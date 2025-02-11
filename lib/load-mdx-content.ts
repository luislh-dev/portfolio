import { generateSlug } from '@helpers/mdx';
import { TProjectFrontMatter } from '@types';
import { readFile } from 'fs/promises';
import matter from 'gray-matter';
import { toString } from 'mdast-util-to-string';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import rehypeSlug from 'rehype-slug';
import { remark } from 'remark';
import { visit } from 'unist-util-visit';

export async function loadMDXContent(fileRelativePath: string) {
  // Leer archivo MDX
  const filePath = path.join(process.cwd(), fileRelativePath);
  const fileContent = await readFile(filePath, 'utf8');

  // Extraer frontmatter y contenido
  const { content, data } = matter(fileContent);
  const frontmatter = data as TProjectFrontMatter;

  // Generar tabla de contenidos a partir del contenido Markdown
  let tableOfContents: Array<{ title: string; depth: number; slug: string }> = [];
  const tocProcessor = remark().use(() => (tree) => {
    visit(tree, 'heading', (node: { depth: number }) => {
      const title = toString(node);
      const headingSlug = generateSlug(title);
      tableOfContents.push({
        title,
        depth: node.depth - 1,
        slug: headingSlug,
      });
    });
  });
  tocProcessor.processSync(content);

  // Serializar el contenido MDX
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeSlug],
    },
  });

  return { mdxSource, tableOfContents, frontmatter };
}

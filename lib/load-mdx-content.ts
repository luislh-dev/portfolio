import { generateSlug } from '@helpers/mdx';
import type { TProjectFrontMatter } from '@types';
import matter from 'gray-matter';
import { toString as convertString } from 'mdast-util-to-string';
import { serialize } from 'next-mdx-remote/serialize';
import { readFile } from 'node:fs/promises';
import rehypeSlug from 'rehype-slug';
import { remark } from 'remark';
import { visit } from 'unist-util-visit';

export async function loadMDXContent(fileRelativePath: string) {
  // Leer archivo MDX
  const fileContent = await readFile(fileRelativePath, 'utf8');

  // Extraer frontmatter y contenido
  const { content, data } = matter(fileContent);
  const frontmatter = data as TProjectFrontMatter;

  // Generar tabla de contenidos a partir del contenido Markdown
  const tableOfContents: Array<{ title: string; depth: number; slug: string }> = [];
  const tocProcessor = remark().use(() => (tree) => {
    visit(tree, 'heading', (node: { depth: number }) => {
      const title = convertString(node);
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

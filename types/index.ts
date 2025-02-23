export type TTableOfContentsItem = {
  title: string;
  depth: number;
  slug: string;
};

export type TTableOfContents = Array<TTableOfContentsItem>;

export type TBaseFrontMatter = {
  title: string;
  description: string;
  caption?: string;
};

export type TPageFrontMatter = TBaseFrontMatter;

export type TProjectFrontMatter = TBaseFrontMatter & {
  githubUrl?: string;
  npmUrl?: string;
  demoUrl?: string;
  landingUrl?: string;
  repositoryName?: string;
};

export type Contributor = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
};

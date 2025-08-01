// Tipos para las respuestas de la API de GitHub

export interface GitHubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type: string;
  site_admin: boolean;
}

export interface GitHubRepository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: GitHubUser;
  html_url: string;
  description: string | null;
  fork: boolean;
  url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string | null;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string | null;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url: string | null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: any;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: string[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}

export interface GitHubCommitAuthor {
  date: string;
  name: string;
  email: string;
}

export interface GitHubCommitTree {
  url: string;
  sha: string;
}

export interface GitHubCommitParent {
  url: string;
  html_url: string;
  sha: string;
}

export interface GitHubCommitData {
  url: string;
  author: GitHubCommitAuthor;
  committer: GitHubCommitAuthor;
  message: string;
  tree: GitHubCommitTree;
  comment_count: number;
}

export interface GitHubCommit {
  url: string;
  sha: string;
  node_id: string;
  html_url: string;
  comments_url: string;
  commit: GitHubCommitData;
  author: GitHubUser;
  committer: GitHubUser;
  parents: GitHubCommitParent[];
  repository: GitHubRepository;
  score: number;
}

export interface GitHubEventRepo {
  id: number;
  name: string;
  url: string;
}

export interface GitHubEventPayload {
  commits?: Array<{
    sha: string;
    message: string;
    author: {
      email: string;
      name: string;
    };
    url: string;
    distinct: boolean;
  }>;
  pull_request?: {
    title: string;
    html_url: string;
    number: number;
  };
  issue?: {
    title: string;
    html_url: string;
    number: number;
  };
}

export interface GitHubEvent {
  id: string;
  type: string;
  actor: GitHubUser;
  repo: GitHubEventRepo;
  payload: GitHubEventPayload;
  public: boolean;
  created_at: string;
}

export interface GitHubSearchCommitsResponse {
  total_count: number;
  incomplete_results: boolean;
  items: GitHubCommit[];
}

export interface GitHubPullRequest {
  id: number;
  number: number;
  title: string;
  body: string;
  html_url: string;
  state: string;
  created_at: string;
  updated_at: string;
  closed_at: string | null;
  merged_at: string | null;
  user: GitHubUser;
  repository_url: string;
  pull_request: {
    url: string;
    html_url: string;
    diff_url: string;
    patch_url: string;
  };
}

export interface GitHubSearchIssuesResponse {
  total_count: number;
  incomplete_results: boolean;
  items: GitHubPullRequest[];
}

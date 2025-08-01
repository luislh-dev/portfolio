export interface ContributionOwner {
  login: string;
  avatarUrl: string;
  profileUrl: string;
}

export interface ContributionRepository {
  name: string;
  fullName: string;
  url: string;
  owner: ContributionOwner;
}

export interface MyContribution {
  id: string;
  repository: ContributionRepository;
  lastContribution: string;
  description: string;
  contributor: string;
  htmlUrl: string;
}

export interface MyContributionResponse {
  total: number;
  uniqueRepository: number;
  contributions: MyContribution[];
}

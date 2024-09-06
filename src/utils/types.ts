export interface Repository {
  id: number;
  name: string;
  language: string | null;
  description: string | null;
  forks_count: number;
  stargazers_count: number;
  updated_at: string;
  license: {
    name: string;
  } | null;
}

export interface Repo {
  name: string;
  language: string | null;
  stargazers_count: number;
  description: string | null;
  license: {
    name: string;
  } | null;
}

export interface RepoDetailsProps {
  repo: Repo | null;
}

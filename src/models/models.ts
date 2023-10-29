// User interface
export interface User {
      name: string | null;
      login: string;
      avatarUrl: string;
      bio: string | null;
      company: string | null;
      email: string | null;
      location: string | null;
      websiteUrl: string | null;
      repositories: {
        nodes: Repo[];
      };
  }

//Repo interface
export interface Repo {
    id: number;
    name: string;
    isPrivate: boolean;
    description: string | null;
    url: string;
    createdAt :string;
    stargazers :{
        totalCount :number;
      };
    forks: {
        totalCount : number
      };
      primaryLanguage: {
        name: string | null;
    }
    owner: {
        login: string;
        id: number;
    };
  }
    
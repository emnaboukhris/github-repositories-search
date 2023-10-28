import { gql } from '@apollo/client';

export const GET_USER_REPOSITORIES = gql`
  query GetRepositories($username: String!) {
    user(login: $username) {
        repositories(first: 100) {
            nodes {
              id
              name
              isPrivate
              description
              url
              createdAt
              stargazers {
                totalCount
              }
              forks {
                totalCount
              }
              primaryLanguage {
                name
              }
              owner {
                login
                id
              }
            }
          }
          }
  }
`;


export const GET_USER_INFO = gql`
  query GetUserInfo($username: String!) {
    user(login: $username) {
      name
      login
      avatarUrl
      bio
      company
      email
      location
      websiteUrl
      repositories(first: 100) {
        nodes {
            id
            name
            isPrivate
            description
            url
            createdAt
            stargazers {
              totalCount
            }
            forks {
              totalCount
            }
            primaryLanguage {
              name
            }
            owner {
              login
              id
            }
          }
    }
    }
  }
`;
// Mock response data for GET_USER_INFO
export const mockGetUserInfoResponse = {
  data: {
    user: {
      name: 'User Name',
      login: 'user',
      avatarUrl: 'https://github.com/user/avatar.jpg',
      bio: 'User bio',
      company: 'Company Inc.',
      email: 'user@example.com',
      location: 'Somewhere',
      websiteUrl: 'https://userwebsite.com',
      repositories: {
        nodes: [
          {
            id: '1',
            name: 'Repo 1',
            isPrivate: false,
            description: 'Description for Repo 1',
            url: 'https://github.com/user/repo1',
            createdAt: '2023-01-01',
            stargazers: {
              totalCount: 42,
            },
            forks: {
              totalCount: 7,
            },
            primaryLanguage: {
              name: 'JavaScript',
            },
            owner: {
              login: 'user',
              id: 'user123',
            },
          },
          // Add more repository data here if needed
        ],
      },
    },
  },
};

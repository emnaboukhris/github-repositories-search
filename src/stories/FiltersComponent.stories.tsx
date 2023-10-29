import React from 'react';
import { Meta, Story } from '@storybook/react';
import FiltersComponent, { FiltersComponentProps } from '../components/FiltersComponent';
import { Repo } from '../models/models';

export default {
  component: FiltersComponent,
  title: 'FiltersComponent',
} as Meta;

const Template: Story<FiltersComponentProps> = (args) => <FiltersComponent {...args} />;


const sampleRepositories: Repo[] = [
  {
    id: 1,
    name: 'emnaboukhris-portfolio',
    isPrivate: false,
    description: 'My portfolio website',
    url: 'https://github.com/emnaboukhris/emnaboukhris-portfolio',
    createdAt: '2022-10-15T14:30:00Z',
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
      login: 'emnaboukhris',
      id: 12345,
    },
  },
  {
    id: 2,
    name: 'emnaboukhris-blog',
    isPrivate: false,
    description: 'My personal blog',
    url: 'https://github.com/emnaboukhris/emnaboukhris-blog',
    createdAt: '2022-09-20T10:15:00Z',
    stargazers: {
      totalCount: 18,
    },
    forks: {
      totalCount: 3,
    },
    primaryLanguage: {
      name: 'TypeScript',
    },
    owner: {
      login: 'emnaboukhris',
      id: 12345,
    },
  },
  {
    id: 3,
    name: 'emnaboukhris-utils',
    isPrivate: false,
    description: 'Utility functions and tools',
    url: 'https://github.com/emnaboukhris/emnaboukhris-utils',
    createdAt: '2022-08-05T09:45:00Z',
    stargazers: {
      totalCount: 31,
    },
    forks: {
      totalCount: 5,
    },
    primaryLanguage: {
      name: 'Python',
    },
    owner: {
      login: 'emnaboukhris',
      id: 12345,
    },
  },
];

export const Default = Template.bind({});
Default.args = {
  repositories: sampleRepositories, // Provide sample repositories here
  filteredRepos:sampleRepositories,
  setFilteredRepos: () => {},
  setIsFilterActive: () => {},
  isFilterActive: false,
};

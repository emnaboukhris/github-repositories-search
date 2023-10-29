import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Repo } from '../models/models';
import RepoItem from '../components/RepoItem';

export default {
  component: RepoItem,
  title: 'RepoItem',
} as Meta;

// Create a sample repository for demonstration
const sampleRepo: Repo =   {
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
  }

const Template: Story<{ repo: Repo }> = (args) => <RepoItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  repo: sampleRepo,
};

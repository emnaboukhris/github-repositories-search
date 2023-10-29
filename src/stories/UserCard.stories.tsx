import React from 'react';
import { Meta, Story } from '@storybook/react';
import UserCard from '../components/UserCard';
import { User } from '../models/models';

export default {
  component: UserCard,
  title: 'UserCard',
} as Meta;

const sampleUser: User = {
  name: 'Emna boukhris',
  login: 'emna boukhris',
  avatarUrl:
    'https://avatars.githubusercontent.com/u/79046370?u=73456d4be9635ee4a9b04b5fdc6cf179e99e3165&v=4',
  bio: 'Software Developer',
  company: 'Tech Company',
  email: 'emna@example.com',
  location: 'Tunisia',
  websiteUrl: 'https://google.com',
  repositories: {
    nodes: [
      {
        id: 1,
        name: 'emnaboukhris',
        isPrivate: false,
        description: 'Config files for my GitHub profile.',
        url: 'https://github.com/emnaboukhris',
        createdAt: '2022-02-07T19:14:56Z',
        stargazers: {
          totalCount: 1,
        },
        forks: {
          totalCount: 0,
        },
        primaryLanguage: {
          name: 'JavaScript',
        },
        owner: {
          login: 'emnaboukhris',
          id: 1,
        },
      },
    ],
  },
};

const Template: Story<{ user: User }> = (args) => <UserCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  user: sampleUser, // Provide the 'user' prop
};

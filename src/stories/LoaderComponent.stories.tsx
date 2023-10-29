import React from 'react';
import { Meta, Story } from '@storybook/react';
import LoaderComponent from '../components/LoaderComponent';

export default {
  component: LoaderComponent,
  title: 'LoaderComponent',
} as Meta;

const Template: Story = (args) => <LoaderComponent {...args} />;

export const Default = Template.bind({});

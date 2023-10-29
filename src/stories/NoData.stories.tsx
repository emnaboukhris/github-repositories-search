import React from 'react';
import { Meta, Story } from '@storybook/react';
import NoData from '../components/NoData';

export default {
  component: NoData,
  title: 'NoData',
} as Meta;

const Template: Story = (args) => <NoData {...args} />;

export const Default = Template.bind({});

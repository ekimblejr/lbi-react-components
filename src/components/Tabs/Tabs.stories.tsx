import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const TabList: Story = {
  args: {
    tabList: [
      {
        id: 1,
        tabName: 'Home',
        tabContent: 'This is the home page.',
      },
      {
        id: 2,
        tabName: 'About',
        tabContent: 'This is the about page.',
      },
      {
        id: 3,
        tabName: 'Blog',
        tabContent: 'This is the blog page.',
      },
      {
        id: 4,
        tabName: 'Contact',
        tabContent: 'This is the contact page.',
      },
    ],
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import ExpandingCards from './ExpandingCards';

const meta: Meta<typeof ExpandingCards> = {
  title: 'Components/ExpandingCards',
  component: ExpandingCards,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ExpandingCards>;

export const HorizontalExpandingCards: Story = {
  args: {
    data: [
      {
        id: 1,
        url: 'beans.jpeg',
        title: 'Title #1',
      },
      {
        id: 2,
        url: 'flowers.jpeg',
        title: 'Title #2',
      },
      {
        id: 3,
        url: 'lighthouse.jpeg',
        title: 'Title #3',
      },
      {
        id: 4,
        url: 'mountains.jpeg',
        title: 'Title #4',
      },
      {
        id: 5,
        url: 'table.jpeg',
        title: 'Title #5',
      },
    ],
  },
};

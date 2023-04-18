import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Hero from './Hero';

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
  argTypes: {
    textColor: { control: 'color' },
    textHeader: { control: 'text' },
    textSubheader: { control: 'text' },
    ctaEnabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Hero>;

// Reuse that template for creating different stories
export const Primary: Story = {
  args: { size: 'full' },
};

export const Secondary: Story = {
  args: { ...Primary.args },
};

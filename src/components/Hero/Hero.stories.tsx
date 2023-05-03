import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Hero from './Hero';

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
  argTypes: {
    width: { control: 'radio' },
    height: { control: 'number' },
    textColor: { control: 'color' },
    textHeader: { control: 'text' },
    textSubheader: { control: 'text' },
    ctaEnabled: { control: 'boolean' },
    ctaText: { control: 'text' },
    backgroundImage: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Hero>;

// Reuse that template for creating different stories
export const StandardHero: Story = {
  args: { ctaText: 'CTA BUTTON' },
};

export const ImageHero: Story = {
  args: { ...StandardHero.args },
};

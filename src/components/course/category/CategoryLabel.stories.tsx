import type { Meta, StoryObj } from '@storybook/react';

import { CategoryLabel } from './CategoryLabel';

const meta = {
  title: 'Course/CategoryLabel',
  component: CategoryLabel,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

} satisfies Meta<typeof CategoryLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Blue: Story = {
  args: {
    children: 'Category',
    color: '#B2C9FF',
  }
};

export const Gray: Story = {
  args: {
    children: 'Category',
    color: '#D4DBE8',
  }
};

export const Orange: Story = {
  args: {
    children: 'Category',
    color: '#FED7AA',
  }
};

export const Green: Story = {
  args: {
    children: 'Category',
    color: '#A7F3D0',
  }
};
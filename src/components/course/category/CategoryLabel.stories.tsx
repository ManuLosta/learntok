import type { Meta, StoryObj } from '@storybook/react';

import { CategoryLabel } from './CategoryLabel';

const meta = {
  title: 'Course/CategoryLabel',
  component: CategoryLabel,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    variant: {
      control: 'select',
      options: ['blue', 'gray', 'orange', 'green'],
    },
  },
} satisfies Meta<typeof CategoryLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Blue: Story = {
  args: {
    children: 'Category',
    variant: 'blue',
  }
};

export const Gray: Story = {
  args: {
    children: 'Category',
    variant: 'gray',
  }
};

export const Orange: Story = {
  args: {
    children: 'Category',
    variant: 'orange',
  }
};

export const Green: Story = {
  args: {
    children: 'Category',
    variant: 'green',
  }
};
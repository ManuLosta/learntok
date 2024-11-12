import type { Meta, StoryObj } from '@storybook/react';

import { ChildAward } from './ChildAward';

const meta = {
  title: 'Common/ChildAward',
  component: ChildAward,
  parameters: {
    layout: 'centered',
  },

  tags: ["autodocs"],

  argTypes: {
    variant: {
      control: 'select',
      options: ['gold', 'silver', 'bronze'],
    },
  },
} satisfies Meta<typeof ChildAward>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Gold: Story = {
  args: {
    variant: 'gold',
    title: 'Gold Award Title',
    category: 'Gold Category',
    date: '1 Jan 2024',
  }
};

export const Silver: Story = {
  args: {
    variant: 'silver',
    title: 'Silver Award Title',
    category: 'Silver Category',
    date: '1 Jan 2024',
  }
};

export const Bronze: Story = {
  args: {
    variant: 'bronze',
    title: 'Bronze Award Title',
    category: 'Bronze Category',
    date: '1 Jan 2024',
  }
};
import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatars';

const meta = {
  title: 'Common/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Blue: Story = {
  args: { imageUrl: '/assets/booky-blue.svg' , variant: "blue" },
};

export const Orange: Story = {
  args: { imageUrl: '/assets/booky-orange.svg' , variant: "blue" },
};

export const Green: Story = {
  args: { imageUrl: '/assets/booky-green.svg' , variant: "blue" },
};

export const BlueKid: Story = {
  args: { imageUrl: '/assets/booky-kidblue.svg' , variant: "blue" },
};
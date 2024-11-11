import type { Meta, StoryObj } from '@storybook/react';

import { Message } from './Message';

const meta = {
  title: 'Common/Message',
  component: Message,

  parameters: {
    layout: 'padded',
  },

  tags: ['autodocs'],

  argTypes: {
    variant: {
      control: 'select',
      options: ['received', 'sent'],
    },
  },
} satisfies Meta<typeof Message>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sent: Story = {
  args: {
    children: 'default message',
    variant: 'sent',
  },
};

export const Received: Story = {
  args: {
    children: 'default message',
    variant: 'received',
  },
};

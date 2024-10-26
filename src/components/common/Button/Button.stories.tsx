import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Common/Button',
  component: Button,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'ghost', 'outlined', 'danger', 'danger-outlined'],
    },
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: "default",
    disabled: false,
  }
};

export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
    disabled: false,
  }
}

export const Outlined: Story = {
  args: {
    children: 'Button',
    variant: 'outlined',
    disabled: false,
  }
}

export const Danger: Story = {
  args: {
    children: 'Button',
    variant: 'danger',
    disabled: false,
  }
}

export const DangerOutlined: Story = {
  args: {
    children: 'Button',
    variant: 'danger-outlined',
    disabled: false
  }
}
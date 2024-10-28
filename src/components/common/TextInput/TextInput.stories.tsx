import type { Meta, StoryObj } from '@storybook/react';

import { TextInput } from './TextInput';

const meta = {
  title: 'Common/TextInput',
  component: TextInput,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'focused', 'error', 'filled'],
    },
    label: {
      control: 'text',
      description: 'Label for the input field',
    },
    description: {
      control: 'text',
      description: 'Description text under the input field',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
  },
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Label',
    description: 'Description',
    placeholder: 'Placeholder',
    variant: 'default',
    disabled: false,
  },
};

export const Focused: Story = {
  args: {
    label: 'Label',
    description: 'Description',
    variant: 'focused',
    disabled: false,
  },
};

export const Error: Story = {
  args: {
    label: 'Label',
    description: 'Description',
    variant: 'error',
    disabled: false,
  },
};

export const Filled: Story = {
  args: {
    label: 'Label',
    description: 'Description',
    placeholder: 'Placeholder',
    variant: 'filled',
    disabled: false,
  },
};

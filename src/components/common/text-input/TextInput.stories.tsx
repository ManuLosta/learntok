import type { Meta, StoryObj } from '@storybook/react';

import { TextInput } from './TextInput';
import { CrossIcon } from '@/components/common/icon/CrossIcon';
import { SearchOutlinedIcon } from '@/components/common/icon/SearchOutlinedIcon';

const meta = {
  title: 'Common/TextInput',
  component: TextInput,

  parameters: {
    layout: 'centered',
  },

  tags: ["autodocs"],

  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'filled'],
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
    variant: "default",
    disabled: false,
    isError: false,
    className: 'w-80',
    startContent: null,
    endContent: null,
  },
};

export const Filled: Story = {
  args: {
    label: 'Label',
    description: 'Description',
    placeholder: 'Placeholder',
    variant: 'filled',
    disabled: false,
    isError: false,
    className: 'w-80',
  },
};

export const SearchInput: Story = {
  args: {
    startContent: <SearchOutlinedIcon size={16} className="text-slate-500 ml-1" />,
    endContent: <CrossIcon size={16} className = "mr-1 text-slate-500  "/>,
    placeholder: 'Search',
    variant: 'default',
    className: 'bg-gray-200 border-gray-200 w-96 h-12 rounded-2xl focus:bg-gray-200 focus:ring-0 focus:border-gray-200',
  },
};

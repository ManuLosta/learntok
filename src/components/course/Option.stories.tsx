import type { Meta, StoryObj } from '@storybook/react';

import { Option } from '@/components/course/Option';

const meta = {
  title: 'course/OptionVariants',
  component: Option,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    variant: {
      control: 'select',
      options: ['unselected', 'incorrect','correct',],
    },
  },
} satisfies Meta<typeof Option>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Unselected: Story = {
  args: {
    children: 'Option',
    variant: 'unselected',
    disabled: false,
  },
};
export const Incorrect: Story = {
  args: {
    children: 'Option',
    variant: 'incorrect',
    disabled: false,
  },
};
export const Correct: Story = {
  args: {
    children: 'Option',
    variant: 'correct',
    disabled: false,
  },
};

export const ListOption: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[283px]">
      <Option>Option 1</Option>
      <Option>Option 2</Option>
      <Option>Option 3</Option>
      <Option>Option 4</Option>
    </div>
  )
}



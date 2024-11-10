import type { Meta, StoryObj } from '@storybook/react';
import { ChoiceOption } from './ChoiceOption';

const meta = {
  title: 'Common/ChoiceOption',
  component: ChoiceOption,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'correct', 'incorrect', 'neutral'],
    },
  },
} satisfies Meta<typeof ChoiceOption>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Option',
    variant: 'default',
  },
};

export const Correct: Story = {
  args: {
    children: 'Option',
    variant: 'correct',
  },
};

export const Incorrect: Story = {
  args: {
    children: 'Option',
    variant: 'incorrect',
  },
};

export const Neutral: Story = {
  args: {
    children: 'Option',
    variant: 'neutral',
  },
};

export const GridExample: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <ChoiceOption variant="incorrect">Option 1</ChoiceOption>
      <ChoiceOption variant="incorrect">Option 2</ChoiceOption>
      <ChoiceOption variant="correct">Option 3</ChoiceOption>
      <ChoiceOption variant="incorrect">Option 4</ChoiceOption>
    </div>
  ),
};
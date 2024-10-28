import type { Meta, StoryObj } from '@storybook/react';

import { QuestionIcon } from './QuestionIcon';

const meta = {
  title: 'Icon/QuestionIcon',
  component: QuestionIcon,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof QuestionIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: '#000000',
    size: 16
  }
};
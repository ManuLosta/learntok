import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Callout from '@/components/course/callout/Callout';
import { CalendarIcon } from '@/components/common/icon/CalendarIcon';

const meta = {
  title: 'Components/Callout',
  component: Callout,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the callout',
    },
    description: {
      control: 'text',
      description: 'The description of the callout',
    },
  },
} satisfies Meta<typeof Callout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <CalendarIcon  className={"text-slate-500"} size={24}/>,
    title: 'Callout',
    description:
      'Very normal callout description.',
  },
};

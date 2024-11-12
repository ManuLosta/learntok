import type { Meta, StoryObj } from '@storybook/react';
import { PathVariants } from './PathVariants';

const meta = {
  title: 'Common/PathVariants',
  component: PathVariants,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PathVariants>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BlueVariant: Story = {
  args: {
    variant: 'blue',
  },
};

export const GreenVariant: Story = {
  args: {
    variant: 'green',
  },
};

export const GreyVariant: Story = {
  args: {
    variant: 'grey',
  },
};

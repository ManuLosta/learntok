import type { Meta, StoryObj } from '@storybook/react';

import { DocumentIcon } from './DocumentIcon';

const meta = {
  title: 'Icon/DocumentIcon',
  component: DocumentIcon,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DocumentIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 16,
    color: '#000000'
  }
};
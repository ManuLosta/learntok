import type { Meta, StoryObj } from '@storybook/react';

import { CheckIcon } from './CheckIcon';
import { ChevronDownIcon } from '@/components/common/icon/ChevronDownIcon';
import { ChevronUpIcon } from '@/components/common/icon/ChevronUpIcon';

const meta = {
  title: 'Common/Icon',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CheckIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

const IconGrid = () => (
  <div className="flex gap-4 p-2">
    <CheckIcon size={16} />
    <ChevronDownIcon size={16} />
    <ChevronUpIcon size={16} />
  </div>
)

export const Default: Story = {
  render: () => <IconGrid />
};
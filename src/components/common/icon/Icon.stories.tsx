import type { Meta, StoryObj } from '@storybook/react';

import { CheckIcon } from './CheckIcon';
import { ChevronDownIcon } from '@/components/common/icon/ChevronDownIcon';
import { ChevronUpIcon } from '@/components/common/icon/ChevronUpIcon';
import { DocumentIcon } from '@/components/common/icon/DocumentIcon';
import { ChevronLeft } from '@/components/common/icon/ChevronLeft';
import { ChevronRight } from '@/components/common/icon/ChevronRight';
import { VideoIcon } from '@/components/common/icon/VideoIcon';
import { ProfileIcon } from '@/components/common/icon/ProfileIcon';
import { SearchIcon } from '@/components/common/icon/SearchIcon';
import { QuestionIcon } from '@/components/common/icon/QuestionIcon';
import { LockIcon } from '@/components/common/icon/LockIcon';
import { HomeIcon } from '@/components/common/icon/HomeIcon';
import { CrossIcon } from '@/components/common/icon/CrossIcon';

const meta = {
  title: 'Common/Icon',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CheckIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

const IconGrid = () => (
  <div className="flex gap-6 p-2">
    <DocumentIcon size={24} />
    <CheckIcon size={24} />
    <ChevronDownIcon size={24} />
    <ChevronUpIcon size={24} />
    <ChevronLeft size={24} />
    <ChevronRight size={24} />
    <VideoIcon size={24} />
    <ProfileIcon size={24} />
    <SearchIcon size={24} />
    <QuestionIcon size={24} />
    <LockIcon size={24} />
    <HomeIcon size={24} />
    <CrossIcon size={24} />
  </div>
)

export const Default: Story = {
  render: () => <IconGrid />
};
import type { Meta, StoryObj } from '@storybook/react';

import { NavBar } from './NavBar';
import { HomeIcon } from '@/components/common/icon/HomeIcon';
import { SearchIcon } from '@/components/common/icon/SearchIcon';
import { ProfileIcon } from '@/components/common/icon/ProfileIcon';
import { ChatIcon } from '@/components/common/icon/ChatIcon';

const meta = {
  title: 'Common/NavBar',
  component: NavBar,

  parameters: {
    layout: 'fullscreen',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof NavBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Child: Story = {
  args: {
    items: [
      {label: 'Home', icon: <HomeIcon size={24} />},
      {label: 'Search', icon: <SearchIcon size={24} />},
      {label: 'Profile', icon: <ProfileIcon size={24} />}],
    activeIndex: 3,
  }
};

export const Adult: Story = {
  args: {
    items: [
      {label: 'Home', icon: <HomeIcon size={24} />},
      {label: 'Search', icon: <SearchIcon size={24} />},
      {label: 'Chat', icon: <ChatIcon size={24} />},
      {label: 'Profile', icon: <ProfileIcon size={24} />}
    ],
    activeIndex: 4,
  }
};
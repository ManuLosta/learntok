import type { Meta, StoryObj } from '@storybook/react';

import { NavBar, NavBarProps } from './NavBar';
import { HomeIcon } from '@/components/common/icon/HomeIcon';
import { SearchIcon } from '@/components/common/icon/SearchIcon';
import { ProfileIcon } from '@/components/common/icon/ProfileIcon';
import { JSX } from 'react';

const meta = {
  title: 'Common/NavBar',
  component: NavBar,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof NavBar>;

export default meta;

type Story = StoryObj<typeof meta>;

const RenderComponent = (args: JSX.IntrinsicAttributes & NavBarProps) => (
  <div className="min-w-[380px]">
    <NavBar {...args} />
  </div>
);

export const Default: Story = {
  render: (args) => <RenderComponent {...args} />,
  args: {
    items: [
      {label: 'Home', icon: <HomeIcon size={24} />},
      {label: 'Search', icon: <SearchIcon size={24} />},
      {label: 'Profile', icon: <ProfileIcon size={24} />}],
    activeIndex: 3,
  }
};
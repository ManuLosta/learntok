import type { Meta, StoryObj } from '@storybook/react';

import { UserList, UserListProps } from './UserList';
import { JSX } from 'react';

const meta = {
  title: 'Common/UserList',
  component: UserList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UserList>;

export default meta;

type Story = StoryObj<typeof meta>;


const RenderComponent = (args: JSX.IntrinsicAttributes & UserListProps) => (
  <div className="bg-white min-w-[300px] max-w-lg">
    <UserList {...args} />
  </div>
);

export const John: Story = {
  render: (args) => <RenderComponent {...args} />,
  args: {
    username: 'John Doe',
    avatarUrl: '/assets/booky-blue.svg',
    avatarColor : 'blue'
  },
};

export const Jane: Story = {
  render: (args) => <RenderComponent {...args} />,
  args: {
    username: 'Jane Doe',
    avatarUrl: '/assets/booky-orange.svg',
    avatarColor : 'orange'
  },
}

export const James: Story = {
  render: (args) => <RenderComponent {...args} />,
  args: {
    username: 'James Doe',
    avatarUrl: '/assets/booky-green.svg',
    avatarColor : 'green'
  },
}

export const List: Partial<Story> = {
  render: () => (
    <div className="flex flex-col gap-4 w-[283px]">
      <UserList username="John Doe" avatarUrl="/assets/booky-blue.svg" avatarColor="blue" />
      <UserList username="Jane Doe" avatarUrl="/assets/booky-orange.svg" avatarColor="orange" />
      <UserList username="James Doe" avatarUrl="/assets/booky-green.svg" avatarColor="green" />
      <UserList username="John Doe" avatarUrl="/assets/booky-blue.svg" avatarColor="blue" />
      <UserList username="Jane Doe" avatarUrl="/assets/booky-orange.svg" avatarColor="orange" />
      <UserList username="James Doe" avatarUrl="/assets/booky-green.svg" avatarColor="green" />
    </div>
  ),
}
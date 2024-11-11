import type { Meta, StoryObj } from '@storybook/react';

import { Category } from './Category';
import { LiteratureIcon } from '@/components/common/category-icon/LiteratureIcon';
import { PhysicsIcon } from '@/components/common/category-icon/PhysicsIcon';
import { GeographyIcon } from '@/components/common/category-icon/GeographyIcon';
import { MathIcon } from '@/components/common/category-icon/MathIcon';

const meta = {
  title: 'Course/Category',
  component: Category,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof Category>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Literature: Story = {
  args: {
    label: "Literature",
    color: "#D4DBE8",
    icon: <LiteratureIcon size={60} background={"#D4DBE8"} foreground={"#1B212E"} />,
  }
};

export const Math: Story = {
  args: {
    label: "Math",
    color: "#D4DBE8",
    icon: <MathIcon size={60} background={"#D4DBE8"} foreground={"#1B212E"} />,
  }
};

export const Physics: Story = {
  args: {
    label: "Physics",
    color: "#D4DBE8",
    icon: <PhysicsIcon size={60} background={"#D4DBE8"} foreground={"#1B212E"} />,
  }
};

export const Geography: Story = {
  args: {
    label: "Geography",
    color: "#D4DBE8",
    icon: <GeographyIcon size={60} background={"#D4DBE8"} foreground={"#1B212E"} />,
  }
};
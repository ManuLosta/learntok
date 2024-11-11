import type { Meta, StoryObj } from '@storybook/react';
import { CourseItem } from '@/components/course/item/CourseItem';

const meta = {
  title: 'Course/CourseItem',
  component: CourseItem,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'on_progress'],
    },
  },
} satisfies Meta<typeof CourseItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    courseName: "Course Name",
    labelName: "Category",
    labelColor: "#B2C9FF",
    path: "/assets/algebracourse.png",
  }
};

export const OnProgress: Story = {
  args: {
    variant: 'on_progress',
    courseName: "Course Name",
    labelName: "Category",
    labelColor: "#B2C9FF",
    path: "/assets/algebracourse.png",
    completedModules: 17,
    totalModules: 45,
  }
};
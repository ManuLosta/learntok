import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCertificate } from './ProfileCertificate';

const meta = {
  title: 'Profile/ProfileCertificate',
  component: ProfileCertificate,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    startContent: {
      control: false,
      description: 'Content to display at the start (e.g., image or placeholder)',
    },
    courseName: {
      control: 'text',
      description: 'Name of the course',
    },
    courseCategory: {
      control: 'text',
      description: 'Category of the course',
    },
    date: {
      control: 'text',
      description: 'Date of course completion',
    },
  },
} satisfies Meta<typeof ProfileCertificate>;

export default meta;

type Story = StoryObj<typeof meta>;

// User Story
export const Default: Story = {
  args: {
    courseName: 'Course Name',
    courseCategory: 'Course Category',
    date: '1 Jan 2024',
    startContent : (
      <img
        src={'https://picsum.photos/200/300'}
        alt="Course Thumbnail"
        className="w-full h-full object-cover"
      />
    ),
    width: '336px',
    height: '74px',
  },
};

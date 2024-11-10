import type { Meta, StoryObj } from '@storybook/react';
import { CatalogCourse } from './CatalogCourse';
import { ChevronRight } from '../common/icon/ChevronRight';

const meta = {
  title: 'Catalog/CatalogCourse',
  component: CatalogCourse,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    startContent: {
      control: false,
      description: 'Content to display at the start (e.g., image or placeholder)',
    },
    endContent: {
      control: false,
      description: 'Content to display at the end (e.g., icon)',
    },
    courseName: {
      control: 'text',
      description: 'Name of the course',
    },
    courseCategory: {
      control: 'text',
      description: 'Category of the course',
    },
    modulesInfo: {
      control: 'text',
      description: 'Additional information like number of modules and duration',
    },
  },
} satisfies Meta<typeof CatalogCourse>;

export default meta;

type Story = StoryObj<typeof meta>;

// User Story
export const Default: Story = {
  args: {
    courseName: 'Course Name',
    courseCategory: 'Course Category',
    modulesInfo: '57 modules, 3 hours',
    startContent: (
      <img
        src="https://picsum.photos/200/300"
        alt="Course Thumbnail"
        className="w-full h-full object-cover"
      />
    ),
    endContent: <ChevronRight className={'text-gray-300'} size={12} />,
    className: 'max-w-md',
  },
};

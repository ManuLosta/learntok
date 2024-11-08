import type { Meta, StoryObj } from '@storybook/react';
import CourseHeaderInfo from '@/components/course/header/CourseHeaderInfo';

const meta = {
  title: 'Course/Header',
  component: CourseHeaderInfo,
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'mobile2' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CourseHeaderInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

const Content = () => (
  <div className="flex min-h-[200vh] flex-col p-4">
    <p className="typography-body">
      In this course, you will learn the basics of algebra, including
      operations with real numbers, solving linear equations, and graphing
      functions. This course is designed to provide a strong foundation
      for more advanced mathematical studies.
    </p>
    <p></p>
  </div>
)

export const Default: Story = {
  render: (args) => (
    <div className="h-[500px]">
      <CourseHeaderInfo {...args}>
        {args.children}
      </CourseHeaderInfo>
    </div>
  ),
  args: {
    title: "Algebra I",
    imageUrl: "/assets/algebracourse.png",
    children: <Content />
  }
};

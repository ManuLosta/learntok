import type { Meta, StoryObj } from '@storybook/react';

import Course from './course';

const meta = {
  title: "Pages/Course",
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'iphone14' },
  },
  component: Course,
} satisfies Meta<typeof Course>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
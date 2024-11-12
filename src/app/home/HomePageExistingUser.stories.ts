import type { Meta, StoryObj } from '@storybook/react';
import HomePage from './HomePageExistingUser';

const meta = {
  title: 'Pages/HomePageExistingUser',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
    viewport: { defaultViewport: 'iphone14' },
  },
} satisfies Meta<typeof HomePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

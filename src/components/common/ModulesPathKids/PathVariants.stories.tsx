import type { Meta, StoryObj } from '@storybook/react';
import { PathVariants } from './PathVariants';

const meta = {
  title: 'Common/PathVariants',
  component: PathVariants,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PathVariants>;

export default meta;

type Story = StoryObj<typeof meta>;

const RenderList = () => (
  <div>
    <PathVariants variant="green" moduleName="Module Name" />
    <PathVariants variant="blue" moduleName="Module Name" />
    <PathVariants variant="grey" moduleName="Module Name" />
  </div>
)

export const BlueVariant: Story = {
  args: {
    variant: 'blue',
    moduleName: "Module Name"
  },
};

export const GreenVariant: Story = {
  args: {
    variant: 'green',
    moduleName: "Module Name"
  },
};

export const GreyVariant: Story = {
  args: {
    variant: 'grey',
    moduleName: "Module Name"
  },
};

export const List: Partial<Story> = {
  render: RenderList
}
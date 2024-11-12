import type { Meta, StoryObj } from '@storybook/react';
import { PathVariants, PathVariantsProps } from './PathVariants';
import { JSX } from 'react';

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

const RenderComponent = (args: JSX.IntrinsicAttributes & PathVariantsProps) => (
  <div className="bg-white min-w-[300px] max-w-lg">
    <PathVariants {...args} />
  </div>
);

export const BlueModule: Story = {
  render: (args) => <RenderComponent {...args} />,
  args: {
    variant: 'blue',
    moduleName: 'ModuleName',
  },
};

export const GreenModule: Story = {
  render: (args) => <RenderComponent {...args} />,
  args: {
    variant: 'green',
    moduleName: 'ModuleName',
  },
};

export const GreyModule: Story = {
  render: (args) => <RenderComponent {...args} />,
  args: {
    variant: 'grey',
    moduleName: 'ModuleName',
  },
};
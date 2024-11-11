import type { Meta, StoryObj } from '@storybook/react';
import { GeographyIcon } from '@/components/common/category-icon/GeographyIcon';
import { LiteratureIcon } from '@/components/common/category-icon/LiteratureIcon';
import { MathIcon } from '@/components/common/category-icon/MathIcon';
import { PhysicsIcon } from '@/components/common/category-icon/PhysicsIcon';

const meta = {
  title: 'Common/CategoryIcon',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof GeographyIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

const IconGrid = () => (
  <div className="flex gap-6 p-2 text-foreground">
    <LiteratureIcon size={60} background={"#D4DBE8"} foreground={"#1B212E"} />
    <MathIcon size={60} background={"#D4DBE8"} foreground={"#1B212E"} />
    <PhysicsIcon size={60} background={"#D4DBE8"} foreground={"#1B212E"} />
    <GeographyIcon size={60} background={"#D4DBE8"} foreground={"#1B212E"} />
  </div>
)

export const Default: Story = {
  render: () => <IconGrid />
};

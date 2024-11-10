import type { Meta, StoryObj } from '@storybook/react';

import MChoiceAdult from './mChoiceAdult';

const meta: Meta<typeof MChoiceAdult> = {
  component: MChoiceAdult,
  title: 'Components/MChoiceAdult', // Organiza el componente en la UI de Storybook
  argTypes: {
    correct: {
      control: 'boolean',
      description: 'Define si la opción es correcta (verde) o incorrecta (rojo)',
    },
    label: {
      control: 'text',
      description: 'Texto que muestra la opción',
    },
  },
} satisfies Meta<typeof MChoiceAdult>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CorrectOption: Story = {
  args: {
    label: 'Option',
    correct: true,
  },
};

export const IncorrectOption: Story = {
  args: {
    label: 'Option',
    correct: false,
  },
};
import React from 'react';
import { ChoiceOption } from './ChoiceOption';

export interface ChoiceOptionsGridProps {
  options: string[];
  correctIndex: number;
}

export const ChoiceOptionsGrid = ({
                                    options,
                                    correctIndex,
                                  }: ChoiceOptionsGridProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {options.map((option, index) => (
        <ChoiceOption
          key={index}
          variant={index === correctIndex ? 'correct' : 'incorrect'}
        >
          {option}
        </ChoiceOption>
      ))}
    </div>
  );
};

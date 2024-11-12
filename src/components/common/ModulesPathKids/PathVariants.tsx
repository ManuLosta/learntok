import React from 'react';

interface PathVariantsProps {
  variant: 'blue' | 'green' | 'grey';
  moduleName: string;
}

const variantToSvgMap = {
  blue: '/assets/BluePath.svg',
  green: '/assets/GreenPath.svg',
  grey: '/assets/GreyPath.svg',
};

export const PathVariants = ({ variant, moduleName }: PathVariantsProps) => {
  const svgPath = variantToSvgMap[variant];

  return (
    <div className="flex w-full max-w-full flex-col gap-2 p-4 overflow-hidden">
      <div className="flex w-full cursor-pointer items-center gap-4">
        <img src={svgPath} alt={`${variant} path`} className="w-8 h-8" />
        <div className="flex flex-grow flex-col w-[220px] h-[24px]">
          <p className="typography-body-bold">{moduleName}</p>
        </div>
      </div>
    </div>
  );
};
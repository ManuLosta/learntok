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
    <div className="flex items-start gap-3 flex-1">
      <img src={svgPath} alt={`${variant} path`} className="w-[40px] h-[60px] flex-shrink-0" />
      <span className="font-bold typography-body text-gray-800 leading-[1.5] mt-2">{moduleName}</span>
    </div>
  );
};

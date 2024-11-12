import React from 'react';

interface PathVariantsProps {
  variant: 'blue' | 'green' | 'grey';
}

const variantToSvgMap = {
  blue: '/assets/BluePath.svg',
  green: '/assets/GreenPath.svg',
  grey: '/assets/GreyPath.svg',
};

export const PathVariants = ({ variant }: PathVariantsProps) => {
  const svgPath = variantToSvgMap[variant];

  return (
    <div className="flex items-center gap-3 p-[16px_7px_35px_8px] flex-1">
      <img src={svgPath} alt={`${variant} path`} className="w-[40px] h-[60px] flex-shrink-0" />
      <span className="font-bold text-gray-800 text-sm leading-[1.5]">Module Name</span>
    </div>
  );
};

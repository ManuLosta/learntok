import { IconProps } from '@/components/common/icon/IconProps';

export const ChevronUpIcon = ({
  size,
  color = 'currentColor',
  ...props
}: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M6 14L12 8L18 14" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

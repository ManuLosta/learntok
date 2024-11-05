import { IconProps } from '@/components/common/icon/IconProps';

export const ChevronDownIcon = ({
  size,
  color = 'currentColor',
  ...props
}: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M6 10L12 16L18 10" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

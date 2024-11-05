import { IconProps } from '@/components/common/icon/IconProps';

export const ChevronRight = ({size, color = 'currentColor', ...props}: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M10 18L16 12L10 6" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
)
import { IconProps } from '@/components/common/icon/IconProps';

export const ChevronLeft = ({size, color = 'currentColor', ...props}: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M14 6L8 12L14 18" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
)
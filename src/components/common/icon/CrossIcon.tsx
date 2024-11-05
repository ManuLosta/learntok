import { IconProps } from '@/components/common/icon/IconProps';

export const CrossIcon = ({
                                size,
                                color = 'currentColor',
                                ...props
                          }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6" stroke={color} strokeWidth="3" stroke-linecap="round"
          stroke-linejoin="round" />
  </svg>
);

import { IconProps } from '@/components/common/icon/IconProps';

export const CheckIcon = ({ size, color = "currentColor", ...props } : IconProps) => (
  <svg width={size} height={size} viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fill-rule="evenodd" clip-rule="evenodd"
          d="M10.5224 1.951C10.9688 1.50468 10.9688 0.781066 10.5224 0.334752C10.0761 -0.111561 9.35251 -0.111561 8.90619 0.334752L4.00003 5.24091L1.95101 3.19189C1.5047 2.74558 0.781085 2.74558 0.334771 3.19189C-0.111542 3.63821 -0.111542 4.36182 0.334771 4.80814L3.19191 7.66528C3.63823 8.11159 4.36184 8.11159 4.80816 7.66528L10.5224 1.951Z"
          fill={color} />
  </svg>
);
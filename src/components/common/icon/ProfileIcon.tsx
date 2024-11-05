import { IconProps } from '@/components/common/icon/IconProps';

export const ProfileIcon = ({ size, color = 'currentColor', ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M1 19C1 23.1175 2.9415 24 12 24C21.0585 24 23 23.1175 23 19C23 14.8825 21.0585 14 12 14C2.9415 14 1 14.8825 1 19Z"
      fill={color} />
    <path
      d="M6 6C6 9.31371 8.68629 12 12 12C15.3137 12 18 9.31371 18 6C18 2.68629 15.3137 0 12 0C8.68629 0 6 2.68629 6 6Z"
      fill={color} />
  </svg>
);
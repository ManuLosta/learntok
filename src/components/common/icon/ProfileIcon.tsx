import { IconProps } from '@/components/common/icon/IconProps';

export const ProfileIcon = ({ size, color = 'currentColor', ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 22 24"
    fill="none"
    {...props}
  >
    <path
      d="M0 19C0 23.1175 1.9415 24 11 24C20.0585 24 22 23.1175 22 19C22 14.8825 20.0585 14 11 14C1.9415 14 0 14.8825 0 19Z"
      fill={color}
    />
    <path
      d="M5 6C5 9.31371 7.68629 12 11 12C14.3137 12 17 9.31371 17 6C17 2.68629 14.3137 0 11 0C7.68629 0 5 2.68629 5 6Z"
      fill={color}
    />
  </svg>
);
import { IconProps } from '@/components/common/icon/IconProps';

export const SearchOutlinedIcon = ({ size, color = 'currentColor', ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 11.4783C1 15.8486 1.78302 18.3581 3.30283 19.8236C4.83125 21.2975 7.35021 21.9565 11.4783 21.9565C15.6063 21.9565 18.1253 21.2975 19.6537 19.8236C21.1735 18.3581 21.9565 15.8486 21.9565 11.4783C21.9565 7.1079 21.1735 4.59842 19.6537 3.13288C18.1253 1.65904 15.6063 0.99999 11.4783 0.99999C7.35021 0.99999 4.83125 1.65904 3.30283 3.13288C1.78302 4.59842 1 7.1079 1 11.4783Z"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22.9564 22.9565L20.3477 20.3478"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

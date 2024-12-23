import { IconProps } from '@/components/common/icon/IconProps';

export const SearchIcon = ({ size, color = 'currentColor', ...props }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M11.3559 22.7118C3.09706 22.7118 0 20.1309 0 11.3559C0 2.58089 3.09706 0 11.3559 0C19.6147 0 22.7118 2.58089 22.7118 11.3559C22.7118 15.065 22.1585 17.6674 20.8959 19.436L23.6976 22.2377C24.1008 22.6408 24.1008 23.2945 23.6976 23.6976C23.2945 24.1008 22.6408 24.1008 22.2376 23.6976L19.441 20.901C17.6297 22.2111 14.9935 22.7118 11.3559 22.7118Z"
      fill={color} />
  </svg>
);
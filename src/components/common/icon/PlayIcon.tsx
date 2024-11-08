import { IconProps } from '@/components/common/icon/IconProps';

export const PlayIcon = ({ size, color = 'currentColor', ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M5 4.53903V20.461C5 21.6751 6.28635 22.4128 7.27698 21.7519L19.3125 13.791C20.2292 13.1916 20.2292 11.8084 19.3125 11.1937L7.27698 3.24806C6.28635 2.5872 5 3.3249 5 4.53903Z"
      fill={color} />
  </svg>
)
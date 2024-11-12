import { IconProps } from '@/components/common/icon/IconProps';

export const MenuIcon = ({ color = 'currentColor', size, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M2 6.58333C2 10.3577 2.80896 11.1667 6.58333 11.1667C10.3577 11.1667 11.1667 10.3577 11.1667 6.58333C11.1667 2.80896 10.3577 2 6.58333 2C2.80896 2 2 2.80896 2 6.58333Z" fill={color}/>
    <path d="M2 17.4167C2 21.191 2.80896 22 6.58333 22C10.3577 22 11.1667 21.191 11.1667 17.4167C11.1667 13.6423 10.3577 12.8333 6.58333 12.8333C2.80896 12.8333 2 13.6423 2 17.4167Z" fill={color}/>
    <path d="M12.8333 6.58333C12.8333 10.3577 13.6423 11.1667 17.4167 11.1667C21.191 11.1667 22 10.3577 22 6.58333C22 2.80896 21.191 2 17.4167 2C13.6423 2 12.8333 2.80896 12.8333 6.58333Z" fill={color}/>
    <path d="M12.8333 17.4167C12.8333 21.191 13.6423 22 17.4167 22C21.191 22 22 21.191 22 17.4167C22 13.6423 21.191 12.8333 17.4167 12.8333C13.6423 12.8333 12.8333 13.6423 12.8333 17.4167Z" fill={color}/>
  </svg>
)
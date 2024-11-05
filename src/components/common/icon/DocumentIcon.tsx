import { IconProps } from '@/components/common/icon/IconProps';

export const DocumentIcon = ({
  size,
  color = 'currentColor',
  ...props
}: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path fill-rule="evenodd" clip-rule="evenodd"
          d="M0.525252 18.7321C0.159047 17.0843 0 14.9098 0 12C0 9.09018 0.159047 6.91569 0.525252 5.26791C0.8854 3.64739 1.41322 2.68709 2.05016 2.05016C2.68709 1.41322 3.64739 0.8854 5.26791 0.525252C6.91569 0.159048 9.09018 0 12 0C14.9098 0 17.0843 0.159048 18.7321 0.525252C20.3526 0.8854 21.3129 1.41322 21.9498 2.05016C22.5868 2.68709 23.1146 3.64739 23.4747 5.26791C23.841 6.91569 24 9.09018 24 12C24 13.3765 23.9644 14.5885 23.8881 15.658C23.7096 15.6542 23.518 15.6459 23.3006 15.6363C23.1334 15.629 22.9504 15.621 22.7469 15.614C22.22 15.5957 21.6133 15.5877 20.9885 15.6391C19.7567 15.7404 18.2944 16.0849 17.1732 17.2095C16.0555 18.3306 15.7202 19.7502 15.6299 20.9698C15.5845 21.5831 15.5987 22.1813 15.6209 22.7054C15.6281 22.8751 15.6358 23.0322 15.643 23.1794C15.6559 23.4411 15.6672 23.6719 15.6714 23.8872C14.5987 23.9641 13.3823 24 12 24C9.09018 24 6.91569 23.841 5.26791 23.4747C3.64739 23.1146 2.68709 22.5868 2.05016 21.9498C1.41322 21.3129 0.8854 20.3526 0.525252 18.7321ZM4.8 6C4.8 5.33726 5.33726 4.8 6 4.8H9.6C10.2627 4.8 10.8 5.33726 10.8 6C10.8 6.66274 10.2627 7.2 9.6 7.2H6C5.33726 7.2 4.8 6.66274 4.8 6ZM6 10.8C5.33726 10.8 4.8 11.3373 4.8 12C4.8 12.6627 5.33726 13.2 6 13.2H18C18.6627 13.2 19.2 12.6627 19.2 12C19.2 11.3373 18.6627 10.8 18 10.8H6Z"
          fill={color} />
    <path
      d="M23.1218 18.0311C23.2853 18.0381 23.4503 18.0453 23.6092 18.0507C23.5679 18.2873 23.5231 18.5143 23.4747 18.7321C23.1146 20.3526 22.5868 21.3129 21.9498 21.9498C21.3129 22.5868 20.3526 23.1146 18.7321 23.4747C18.5185 23.5222 18.296 23.5662 18.0642 23.6068C18.0572 23.4067 18.0471 23.2001 18.0372 22.998C18.0306 22.8635 18.0241 22.7309 18.0187 22.6037C17.9976 22.1061 17.9885 21.6189 18.0234 21.147C18.0938 20.196 18.3334 19.4451 18.8729 18.9039C19.4089 18.3663 20.1947 18.1124 21.1852 18.031C21.6716 17.991 22.1696 17.9954 22.6638 18.0125C22.8108 18.0176 22.9658 18.0243 23.1218 18.0311Z"
      fill={color} />
  </svg>
);

import { IconProps } from '@/components/common/icon/IconProps';

export const CheckIcon = ({ size, color = "currentColor", ...props } : IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path fill-rule="evenodd" clip-rule="evenodd"
          d="M20.6706 8.14165C21.3893 7.42295 21.3893 6.25772 20.6706 5.53902C19.9519 4.82033 18.7867 4.82033 18.068 5.53902L9.68331 13.9237L6.14165 10.382C5.42295 9.66334 4.25772 9.66334 3.53902 10.382C2.82033 11.1007 2.82033 12.266 3.53902 12.9847L8.382 17.8276C9.04456 18.4902 10.0866 18.5419 10.8085 17.9829C10.8696 17.9355 10.9285 17.8838 10.9846 17.8276C10.9846 17.8276 10.9846 17.8276 10.9847 17.8276L20.6706 8.14165Z"
          fill={color} />
  </svg>
);
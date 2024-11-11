import { IconProps2Colors } from '@/components/common/icon/IconProps2Colors';

export const GeographyIcon = ({
                                size,
                                color1 = "currentColor",
                                color2 = "currentColor",
                                ...props
                              }: IconProps2Colors) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 34 48" fill="none" {...props}>
    <path fill-rule="evenodd" clip-rule="evenodd"
          d="M17.0146 35.4446C17.5324 35.4446 17.9521 35.8643 17.9521 36.3821V44.5613C17.9521 45.0791 17.5324 45.4988 17.0146 45.4988C16.4969 45.4988 16.0771 45.0791 16.0771 44.5613V36.3821C16.0771 35.8643 16.4969 35.4446 17.0146 35.4446Z"
          fill={color2} />
    <path fill-rule="evenodd" clip-rule="evenodd"
          d="M17.5962 1.57528C17.6595 2.08916 17.2942 2.55705 16.7803 2.62033C15.3874 2.79185 13.9929 3.14685 12.6278 3.69942C4.24605 7.09228 0.20176 16.6375 3.59462 25.0192C6.98748 33.401 16.5327 37.4453 24.9144 34.0524C26.4112 33.4466 27.7683 32.6453 28.9691 31.6906C29.3744 31.3684 29.9641 31.4357 30.2864 31.841C30.6086 32.2463 30.5413 32.8361 30.136 33.1583C28.7959 34.2237 27.2831 35.1164 25.618 35.7904C16.2763 39.5718 5.63802 35.0644 1.85661 25.7228C-1.9248 16.3811 2.58265 5.74282 11.9243 1.96141C13.4428 1.34674 14.9969 0.950773 16.5512 0.759383C17.0651 0.696104 17.533 1.06139 17.5962 1.57528Z"
          fill={color2} />
    <path fill-rule="evenodd" clip-rule="evenodd"
          d="M10.8949 1.20114C11.3568 0.967172 11.9209 1.15194 12.1549 1.61383L28.9128 34.6973C29.1468 35.1592 28.962 35.7233 28.5001 35.9573C28.0382 36.1912 27.4741 36.0065 27.2402 35.5446L10.4822 2.46109C10.2483 1.9992 10.433 1.4351 10.8949 1.20114Z"
          fill={color2} />
    <path
      d="M32.5444 19.2475C32.5444 26.889 26.3497 33.0837 18.7082 33.0837C11.0667 33.0837 4.87207 26.889 4.87207 19.2475C4.87207 11.606 11.0667 5.41138 18.7082 5.41138C26.3497 5.41138 32.5444 11.606 32.5444 19.2475Z"
      fill={color1} />
    <path fill-rule="evenodd" clip-rule="evenodd"
          d="M33.4819 19.2475C33.4819 27.4068 26.8675 34.0212 18.7082 34.0212C10.549 34.0212 3.93457 27.4068 3.93457 19.2475C3.93457 11.0883 10.549 4.47388 18.7082 4.47388C26.8675 4.47388 33.4819 11.0883 33.4819 19.2475ZM18.7082 33.0837C26.3497 33.0837 32.5444 26.889 32.5444 19.2475C32.5444 11.606 26.3497 5.41138 18.7082 5.41138C11.0667 5.41138 4.87207 11.606 4.87207 19.2475C4.87207 26.889 11.0667 33.0837 18.7082 33.0837Z"
          fill={color2} />
    <path fill-rule="evenodd" clip-rule="evenodd"
          d="M14.3212 10.8483C14.4568 10.6946 14.6765 10.6468 14.8636 10.7303L18.7584 12.468C18.7647 12.4708 18.7709 12.4737 18.777 12.4768L20.8143 13.4954C21.0184 13.5975 21.1193 13.8316 21.0535 14.05L19.915 17.8249C19.8553 18.0229 19.673 18.1583 19.4662 18.1583H17.3862L17.5515 19.117L19.6801 20.2085C19.8087 20.2745 19.8998 20.3962 19.9267 20.5382C19.9537 20.6802 19.9136 20.8268 19.8181 20.9353L17.2985 23.7985V25.4791C17.2985 25.6156 17.239 25.7453 17.1356 25.8343L14.9785 27.6918C14.8141 27.8334 14.5741 27.8436 14.3982 27.7166L12.2559 26.1694L9.81484 24.6809C9.71519 24.6202 9.64179 24.5244 9.609 24.4124L8.88997 21.9557C8.85765 21.8453 8.86707 21.7268 8.91643 21.6229L9.96473 19.416L8.90801 16.9132C8.85375 16.7847 8.85954 16.6387 8.92383 16.5149L10.5417 13.3991C10.5515 13.38 10.5627 13.3617 10.5752 13.3441L11.5938 11.9061C11.6817 11.782 11.8243 11.7083 11.9763 11.7083H13.5623L14.3212 10.8483ZM14.7962 11.7268L14.1254 12.4872C14.0364 12.588 13.9084 12.6458 13.7739 12.6458H12.2187L11.3588 13.8597L9.85734 16.7514L10.9101 19.2449C10.9622 19.3681 10.9591 19.5076 10.9017 19.6284L9.8399 21.8638L10.4578 23.9749L12.7596 25.3785C12.77 25.3848 12.7801 25.3916 12.79 25.3987L14.6472 26.74L16.361 25.2642V23.6216C16.361 23.5076 16.4025 23.3975 16.4779 23.3119L18.7165 20.768L16.9155 19.8444C16.7843 19.7771 16.6925 19.6521 16.6674 19.5069L16.3678 17.7692C16.3443 17.633 16.3822 17.4933 16.4712 17.3876C16.5603 17.2819 16.6915 17.2208 16.8298 17.2208H19.118L20.0419 14.1574L18.367 13.3199L14.7962 11.7268Z"
          fill={color2} />
    <path fill-rule="evenodd" clip-rule="evenodd"
          d="M29.3946 16.3927C29.5383 16.4768 29.6267 16.6308 29.6267 16.7973V20.1123C29.6267 20.1795 29.6122 20.246 29.5842 20.3071L28.4737 22.7365V25.0846C28.4737 25.2622 28.3733 25.4245 28.2145 25.5039L24.8996 27.1613C24.7686 27.2269 24.6144 27.2273 24.4829 27.1626C24.3515 27.0979 24.2578 26.9754 24.2299 26.8315L23.7254 24.2373C23.7084 24.1497 23.7167 24.059 23.7494 23.976L24.6362 21.7248L24.2298 19.6248C24.2087 19.5161 24.2269 19.4034 24.281 19.3067L25.2899 17.5051C25.3627 17.3752 25.4929 17.2875 25.6407 17.269L27.8554 16.9922L28.9281 16.3888C29.0732 16.3072 29.2508 16.3086 29.3946 16.3927ZM28.6892 17.5988L28.2347 17.8545C28.1817 17.8843 28.1234 17.9035 28.063 17.911L25.9921 18.1699L25.1828 19.6151L25.5826 21.6806C25.5995 21.7681 25.5912 21.8586 25.5585 21.9415L24.6718 24.1925L25.0323 26.0468L27.5362 24.7949V22.6345C27.5362 22.5672 27.5506 22.5008 27.5786 22.4396L28.6892 20.0102V17.5988Z"
          fill={color2} />
    <path
      d="M16.8786 41.672C12.46 41.672 8.87793 43.4508 8.87793 45.6451H24.8793C24.8793 43.4508 21.2973 41.672 16.8786 41.672Z"
      fill={color1} />
    <path fill-rule="evenodd" clip-rule="evenodd"
          d="M8.87793 46.5826C8.36016 46.5826 7.94043 46.1629 7.94043 45.6451C7.94043 43.9982 9.2592 42.7633 10.8043 41.996C12.4073 41.1999 14.5562 40.7345 16.8786 40.7345C19.2011 40.7345 21.3499 41.1999 22.953 41.996C24.4981 42.7633 25.8168 43.9982 25.8168 45.6451C25.8168 46.1629 25.3971 46.5826 24.8793 46.5826H8.87793ZM24.6553 44.7076C23.8068 42.9657 20.647 41.672 16.8786 41.672C13.1103 41.672 9.95043 42.9657 9.10195 44.7076C8.95552 45.0082 8.87793 45.3221 8.87793 45.6451H24.8793C24.8793 45.3221 24.8017 45.0082 24.6553 44.7076Z"
          fill={color2} />
    <path
      d="M6.67383 46.5629C6.67383 46.3149 6.87486 46.1139 7.12285 46.1139H26.9069C27.1549 46.1139 27.3559 46.3149 27.3559 46.5629C27.3559 46.8109 27.1549 47.0119 26.9069 47.0119H7.12285C6.87486 47.0119 6.67383 46.8109 6.67383 46.5629Z"
      fill={color2} />
    <path fill-rule="evenodd" clip-rule="evenodd"
          d="M26.9069 47.0119C27.1549 47.0119 27.3559 46.8109 27.3559 46.5629C27.3559 46.3149 27.1549 46.1139 26.9069 46.1139H7.12285C6.87486 46.1139 6.67383 46.3149 6.67383 46.5629C6.67383 46.8109 6.87486 47.0119 7.12285 47.0119H26.9069ZM7.12285 45.1764H26.9069C27.6727 45.1764 28.2934 45.7972 28.2934 46.5629C28.2934 47.3287 27.6727 47.9494 26.9069 47.9494H7.12285C6.35709 47.9494 5.73633 47.3287 5.73633 46.5629C5.73633 45.7972 6.35709 45.1764 7.12285 45.1764Z"
          fill={color2} />
  </svg>
);
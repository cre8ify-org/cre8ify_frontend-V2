import { SvgProps } from "@/lib/components/types";
import React from "react";

export function CREATIFI_SVG() {
  return {
    // =================================================================APP LOGO =================================================================
    searchIcon: (props?: SvgProps) => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
            stroke="url(#paint0_linear_82_4347)"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.9304 20.6898C19.4604 22.2898 20.6704 22.4498 21.6004 21.0498C22.4504 19.7698 21.8904 18.7198 20.3504 18.7198C19.2104 18.7098 18.5704 19.5998 18.9304 20.6898Z"
            stroke="url(#paint1_linear_82_4347)"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_82_4347"
              x1="11"
              y1="2"
              x2="11"
              y2="20"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#32CD32" />
              <stop offset="1" stop-color="#00FFFF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_82_4347"
              x1="20.4137"
              y1="18.7197"
              x2="20.4137"
              y2="22.0033"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#32CD32" />
              <stop offset="1" stop-color="#00FFFF" />
            </linearGradient>
          </defs>
        </svg>
      );
    },
    notificationBell: (props?: SvgProps) => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <mask id="path-1-inside-1_82_4350" fill="white">
            <path d="M12 10.52C11.59 10.52 11.25 10.18 11.25 9.77V6.44C11.25 6.03 11.59 5.69 12 5.69C12.41 5.69 12.75 6.03 12.75 6.44V9.77C12.75 10.19 12.41 10.52 12 10.52Z" />
          </mask>
          <path
            d="M12 10.52C11.59 10.52 11.25 10.18 11.25 9.77V6.44C11.25 6.03 11.59 5.69 12 5.69C12.41 5.69 12.75 6.03 12.75 6.44V9.77C12.75 10.19 12.41 10.52 12 10.52Z"
            fill="url(#paint0_linear_82_4350)"
          />
          <path
            d="M12 9.02C12.4184 9.02 12.75 9.35158 12.75 9.77H9.75C9.75 11.0084 10.7616 12.02 12 12.02V9.02ZM12.75 9.77V6.44H9.75V9.77H12.75ZM12.75 6.44C12.75 6.85843 12.4184 7.19 12 7.19V4.19C10.7616 4.19 9.75 5.20158 9.75 6.44H12.75ZM12 7.19C11.5816 7.19 11.25 6.85843 11.25 6.44H14.25C14.25 5.20158 13.2384 4.19 12 4.19V7.19ZM11.25 6.44V9.77H14.25V6.44H11.25ZM11.25 9.77C11.25 9.34857 11.5946 9.02 12 9.02V12.02C13.2254 12.02 14.25 11.0314 14.25 9.77H11.25Z"
            fill="url(#paint1_linear_82_4350)"
            mask="url(#path-1-inside-1_82_4350)"
          />
          <path
            d="M3.45774 15.1741C3.26937 15.4863 3.14751 15.8296 3.11118 16.1805C3.14306 15.8382 3.2555 15.4881 3.45448 15.155C3.45454 15.1549 3.4546 15.1548 3.45465 15.1547L4.72423 13.0354L4.72517 13.0338C4.91076 12.7223 5.06516 12.3168 5.17296 11.9326C5.28053 11.5492 5.36084 11.1189 5.36084 10.75V10.76C5.36084 11.4367 5.0765 12.4711 4.73019 13.04L4.73017 13.04L4.72666 13.0459L3.45904 15.1719C3.45861 15.1726 3.45818 15.1734 3.45774 15.1741ZM20.5885 15.1571C20.699 15.3405 20.7807 15.535 20.8336 15.7355C20.78 15.5417 20.7004 15.3545 20.5969 15.179L20.5969 15.179L20.5942 15.1746L19.3242 13.0546L19.3242 13.0546L19.3215 13.05C19.1769 12.8125 19.0431 12.4939 18.9363 12.154C19.0371 12.4677 19.1665 12.782 19.3165 13.0338L19.3175 13.0354L20.5875 15.1554L20.5885 15.1571ZM12.0208 1.98999C14.9945 1.98999 17.5155 3.94301 18.3702 6.63523C17.5053 3.94731 14.9887 1.99999 12.0208 1.99999C8.34663 1.99999 5.36084 4.98578 5.36084 8.65999V8.64999C5.36084 4.9742 8.34506 1.98999 12.0208 1.98999Z"
            fill="url(#paint2_linear_82_4350)"
            stroke="url(#paint3_linear_82_4350)"
            stroke-width="1.5"
          />
          <path
            d="M12 22.15C13.5765 22.15 14.903 21.0451 15.2446 19.57H15.2448C14.9036 21.046 13.578 22.15 12 22.15Z"
            fill="url(#paint4_linear_82_4350)"
            stroke="url(#paint5_linear_82_4350)"
            stroke-width="1.5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_82_4350"
              x1="12"
              y1="5.69"
              x2="12"
              y2="10.52"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#32CD32" />
              <stop offset="1" stop-color="#00FFFF" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_82_4350"
              x1="12"
              y1="5.69"
              x2="12"
              y2="10.52"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#32CD32" />
              <stop offset="1" stop-color="#00FFFF" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_82_4350"
              x1="12.0036"
              y1="1.23999"
              x2="12.0036"
              y2="20.35"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#32CD32" />
              <stop offset="1" stop-color="#00FFFF" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_82_4350"
              x1="12.0036"
              y1="1.23999"
              x2="12.0036"
              y2="20.35"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#32CD32" />
              <stop offset="1" stop-color="#00FFFF" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_82_4350"
              x1="12"
              y1="18.82"
              x2="12"
              y2="22.9"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#32CD32" />
              <stop offset="1" stop-color="#00FFFF" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_82_4350"
              x1="12"
              y1="18.82"
              x2="12"
              y2="22.9"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#32CD32" />
              <stop offset="1" stop-color="#00FFFF" />
            </linearGradient>
          </defs>
        </svg>
      );
    },
    homeIcon: (props?: SvgProps) => {
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M27.8137 11.16L18.5737 3.7733C17.147 2.62663 14.8404 2.62663 13.427 3.75996L4.18702 11.16C3.14702 11.9866 2.48035 13.7333 2.70702 15.04L4.48035 25.6533C4.80035 27.5466 6.61369 29.08 8.53369 29.08H23.467C25.3737 29.08 27.2004 27.5333 27.5204 25.6533L29.2937 15.04C29.507 13.7333 28.8404 11.9866 27.8137 11.16ZM16.0004 20.6666C14.1604 20.6666 12.667 19.1733 12.667 17.3333C12.667 15.4933 14.1604 14 16.0004 14C17.8404 14 19.3337 15.4933 19.3337 17.3333C19.3337 19.1733 17.8404 20.6666 16.0004 20.6666Z"
            fill="#121212"
          />
        </svg>
      );
    },
  };
}

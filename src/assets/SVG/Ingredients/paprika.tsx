import React, { FC, ReactElement } from "react";

const PaprikaSVG: FC<React.SVGProps<SVGElement>> = (): ReactElement => {
  return (
    <svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_i_256_12)">
        <path
          d="M12.666 22.9143C13.6252 22.9143 13.6252 11.2913 13.3055 8.19183C12.9857 5.09233 11.387 2.7678 10.4277 1.99291C9.46842 1.21802 8.9299 0.575134 6.79873 0.575134C4.66756 0.575134 3.24138 0.921855 3.16729 0.966062C2.00174 1.66148 1.13575 2.17816 0.835111 5.09237C0.515359 8.19183 0.835111 10.129 1.47462 10.9039C2.11412 11.6787 4.03264 12.0662 4.67214 10.9039C4.67214 10.9039 4.41825 10.9039 4.03264 9.7416C3.64703 8.57934 3.22749 4.94867 3.39314 4.31754C3.55879 3.68642 4.67215 3.0198 4.9919 3.0198C5.31165 3.0198 5.31165 4.94867 5.31165 4.94867C6.04406 4.88189 7.15599 5.43492 7.86967 5.86727C9.14868 6.6421 9.78818 7.41693 9.78818 8.57926C9.78818 8.81631 9.74828 9.50455 9.6929 10.4599C9.47671 14.1892 8.82893 22.7789 9.78818 22.9143C10.7474 23.0497 11.7067 22.9143 12.666 22.9143Z"
          fill="#FF0404"
        />
        <path
          d="M4.67214 10.9039C5.31165 9.74156 5.31165 9.21873 4.67213 6.50666C4.38946 5.30793 4.7315 5.00156 5.31165 4.94867C5.31165 4.94867 5.31165 3.0198 4.9919 3.0198C4.67215 3.0198 3.55879 3.68642 3.39314 4.31754C3.22749 4.94867 3.64703 8.57934 4.03264 9.7416C4.41825 10.9039 4.67214 10.9039 4.67214 10.9039Z"
          fill="url(#paint0_linear_256_12)"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_256_12"
          x="0.709671"
          y="0.575134"
          width="12.787"
          height="26.3993"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_256_12" />
        </filter>
        <linearGradient
          id="paint0_linear_256_12"
          x1="-1.72595"
          y1="3.82666"
          x2="17.8201"
          y2="13.1531"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0879155" stopColor="#FF0404" />
          <stop offset="0.54221" stopColor="#F2C3C3" stopOpacity="0.75" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default PaprikaSVG;

import React, { FC, ReactElement } from "react";

const StarSVG: FC<React.SVGProps<SVGElement>> = (): ReactElement => {
  return (
    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22 8.5H13.9375L11.5 1L9.0625 8.5H1L7.5625 13L5.03125 20.5L11.5 15.8125L17.9688 20.5L15.4375 13L22 8.5Z"
        fill="#FFF146"
        stroke="#D80303"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default StarSVG;

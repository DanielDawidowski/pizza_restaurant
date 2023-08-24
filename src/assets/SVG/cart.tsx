import React, { FC, ReactElement } from "react";

const CartSVG: FC<React.SVGProps<SVGElement>> = (): ReactElement => {
  return (
    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 3.66663H12.1933C12.3796 3.66663 12.5638 3.70567 12.7341 3.78123C12.9044 3.85679 13.0569 3.96718 13.1819 4.1053C13.3069 4.24342 13.4016 4.4062 13.4598 4.58314C13.518 4.76009 13.5385 4.94727 13.52 5.13263L13.12 9.13263C13.0871 9.46163 12.9331 9.76667 12.688 9.98854C12.4428 10.2104 12.124 10.3333 11.7933 10.3333H5.42667C5.11831 10.3334 4.81945 10.2267 4.58096 10.0312C4.34247 9.83574 4.1791 9.56366 4.11867 9.26129L3 3.66663Z"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M3 3.66667L2.46 1.50467C2.42389 1.3605 2.34063 1.23254 2.22347 1.1411C2.10631 1.04967 1.96195 1 1.81333 1H1M5 13H6.33333M10.3333 13H11.6667"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default CartSVG;

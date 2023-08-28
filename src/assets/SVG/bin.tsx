import React, { FC, ReactElement } from "react";

const BinSVG: FC<React.SVGProps<SVGElement>> = (): ReactElement => {
  return (
    <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.13043 1.9C2.13043 1.9 1.89572 8 2.13043 8C2.36513 8 5.65104 8 5.88574 8C6.12045 8 5.88574 1.9 5.88574 1.9C5.88574 1.9 7.52871 1.9 6.82457 1.9C6.12043 1.9 4.94691 1.9 4.94691 1.9M1.1916 1.9C0.252769 1.89999 3.06926 1.9 3.06926 1.9M3.06926 1.9C3.80052 0.723829 4.21596 0.676404 4.94691 1.9M3.06926 1.9H4.94691M4.75532 3.44V6.368M3.34707 3.44V6.368"
        stroke="#FFFDFD"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BinSVG;

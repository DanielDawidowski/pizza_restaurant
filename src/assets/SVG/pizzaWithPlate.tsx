import React, { FC, ReactElement } from "react";

const PizzaWithPlateSVG: FC<React.SVGProps<SVGElement>> = (): ReactElement => {
  return (
    <svg width="176" height="176" viewBox="0 0 176 176" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="pizza-with-plate">
        <circle id="plate" cx="88" cy="88" r="88" fill="#CA884B" />
        <g id="pizza">
          <g id="pizza-round">
            <mask id="path-2-inside-1_264_58" fill="white">
              <path d="M166 88C166 131.078 131.078 166 88 166C44.9218 166 10 131.078 10 88C10 44.9218 44.9218 10 88 10C131.078 10 166 44.9218 166 88ZM19.7879 88C19.7879 125.672 50.3275 156.212 88 156.212C125.672 156.212 156.212 125.672 156.212 88C156.212 50.3275 125.672 19.7879 88 19.7879C50.3275 19.7879 19.7879 50.3275 19.7879 88Z" />
            </mask>
            <g filter="url(#filter0_i_264_58)">
              <path
                d="M166 88C166 131.078 131.078 166 88 166C44.9218 166 10 131.078 10 88C10 44.9218 44.9218 10 88 10C131.078 10 166 44.9218 166 88ZM19.7879 88C19.7879 125.672 50.3275 156.212 88 156.212C125.672 156.212 156.212 125.672 156.212 88C156.212 50.3275 125.672 19.7879 88 19.7879C50.3275 19.7879 19.7879 50.3275 19.7879 88Z"
                fill="#FBA14E"
              />
            </g>
            <path
              d="M166 88C166 131.078 131.078 166 88 166C44.9218 166 10 131.078 10 88C10 44.9218 44.9218 10 88 10C131.078 10 166 44.9218 166 88ZM19.7879 88C19.7879 125.672 50.3275 156.212 88 156.212C125.672 156.212 156.212 125.672 156.212 88C156.212 50.3275 125.672 19.7879 88 19.7879C50.3275 19.7879 19.7879 50.3275 19.7879 88Z"
              stroke="#F49C49"
              strokeWidth="2"
              mask="url(#path-2-inside-1_264_58)"
            />
          </g>
          <g id="pizza-bodem" filter="url(#filter1_f_264_58)">
            <circle cx="88" cy="88" r="69" fill="#FDD879" />
            <circle cx="88" cy="88" r="69.5" stroke="#F9CB56" />
          </g>
          <g id="pizza-slices">
            <line
              id="Line 14"
              y1="-0.05"
              x2="156.003"
              y2="-0.05"
              transform="matrix(-0.866008 0.50003 -0.49997 -0.866043 155.55 48.9972)"
              stroke="black"
              strokeWidth="0.1"
            />
            <line
              id="Line 12"
              y1="-0.05"
              x2="156.012"
              y2="-0.05"
              transform="matrix(0.0123398 0.999924 -0.999924 0.0123418 87.0374 10)"
              stroke="black"
              strokeWidth="0.1"
            />
            <line id="Line 15" x1="166" y1="88.0503" x2="10" y2="88.0502" stroke="black" strokeWidth="0.1" />
            <line
              id="Line 16"
              y1="-0.05"
              x2="156.003"
              y2="-0.05"
              transform="matrix(-0.866008 -0.50003 0.49997 -0.866043 155.55 127.003)"
              stroke="black"
              strokeWidth="0.1"
            />
            <line
              id="Line 17"
              y1="-0.05"
              x2="156.009"
              y2="-0.05"
              transform="matrix(-0.49997 -0.866043 0.866008 -0.50003 127 155.556)"
              stroke="black"
              strokeWidth="0.1"
            />
            <line
              id="Line 13"
              y1="-0.05"
              x2="156.009"
              y2="-0.05"
              transform="matrix(-0.49997 0.866043 -0.866008 -0.50003 127 20.4448)"
              stroke="black"
              strokeWidth="0.1"
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_i_264_58"
          x="10"
          y="10"
          width="156"
          height="160"
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
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_264_58" />
        </filter>
        <filter
          id="filter1_f_264_58"
          x="14"
          y="14"
          width="148"
          height="148"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_264_58" />
        </filter>
      </defs>
    </svg>
  );
};

export default PizzaWithPlateSVG;

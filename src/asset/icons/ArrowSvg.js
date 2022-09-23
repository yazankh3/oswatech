import React from "react";

const ArrowSvg = ({ color, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      width="19.503"
      height="20.578"
      viewBox="0 0 26.503 26.578"
    >
      <defs>
        <clipPath id="clip-path">
          <rect width="26.503" height="26.578" fill="none" />
        </clipPath>
      </defs>
      <g
        id="Repeat_Grid_10"
        data-name="Repeat Grid 10"
        clip-path="url(#clip-path)"
      >
        <g transform="translate(0)">
          <path
            className="rest"
            id="share"
            d="M4.013,27.7H1.125V13.27a6.322,6.322,0,0,1,.666-2.841A7.545,7.545,0,0,1,8.656,6h7.561V1.125h2.346l9.065,9.065-9.1,9.1H16.216V14.414H11.3a4.729,4.729,0,0,0-4.54,3.447ZM8.656,7.77a5.771,5.771,0,0,0-5.256,3.4l-.017.034A4.566,4.566,0,0,0,2.9,13.27V25.109l2.155-7.724A6.506,6.506,0,0,1,11.3,12.642h6.69v4.68l7.132-7.132L17.988,3.057V7.77Z"
            transform="translate(-1.125 -1.125)"
            fill={color ? "#0d323d" : color}
          />
        </g>
      </g>
    </svg>
  );
};

export default ArrowSvg;

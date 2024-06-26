import React from "react";

export const SidebarFooter: React.FC<{}> = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 300 126.5"
        //   style="margin-bottom: -5px; enable-background:new 0 0 300 126.5;"
        style={{
          marginBottom: "-5px",
          background: "new 0 0 300 126.5 ",
        }}
        // xml:space="preserve"
        className="injected-svg js-svg-injector"
        data-parent="#SVGwaveWithDots"
      >
        <path
          className=" fill-[#e3ff64] fill-primary"
          opacity=".6"
          d="M0,58.9c0-0.9,5.1-2,5.8-2.2c6-0.8,11.8,2.2,17.2,4.6c4.5,2.1,8.6,5.3,13.3,7.1C48.2,73.3,61,73.8,73,69  c43-16.9,40-7.9,84-2.2c44,5.7,83-31.5,143-10.1v69.8H0C0,126.5,0,59,0,58.9z"
        ></path>
        <path
          className="fill-[#e9ec0c] fill-primary"
          d="M300,68.5v58H0v-58c0,0,43-16.7,82,5.6c12.4,7.1,26.5,9.6,40.2,5.9c7.5-2.1,14.5-6.1,20.9-11  c6.2-4.7,12-10.4,18.8-13.8c7.3-3.8,15.6-5.2,23.6-5.2c16.1,0.1,30.7,8.2,45,16.1c13.4,7.4,28.1,12.2,43.3,11.2  C282.5,76.7,292.7,74.4,300,68.5z"
        ></path>
        <g>
          <circle
            className="fill-[#DE4437] fill-danger"
            cx="259.5"
            cy="17"
            r="13"
          ></circle>
          <circle
            className="fill-[#00C9A7;] fill-primary"
            cx="290"
            cy="35.5"
            r="8.5"
          ></circle>
          <circle
            className="fill-[#FFC107] fill-success"
            cx="288"
            cy="5.5"
            r="5.5"
          ></circle>
          <circle
            className="wave-bottom-with-dots-4 fill-warning"
            cx="232.5"
            cy="34"
            r="2"
          ></circle>
        </g>
      </svg>
    </div>
  );
};

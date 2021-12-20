import Head from "next/head";

import gsap from "gsap";
import Link from "next/link";
export default function Home() {
  return (
    <section className="w-full bg__image">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-1">
        <p className="font-extrabold text-6xl">
          <span className="block">WE</span>TRANS
          <span className="lowercase">FORM</span>
        </p>
      </div>

      <div className="">
        <div className="absolute left-32 bottom-28">
          <svg
            className="cursor-pointer"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30px"
            height="30px"
            viewBox="0 0 30 30"
            // style={{ enableBackground:new "0 0 30 30" }}
          >
            <g>
              <path
                d="M11.001,30l2.707-16.334H5L11.458,0l9.25,0.123L16.667,8H25L11.001,30z"
                fill="#fff"
              />
            </g>
          </svg>
        </div>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="font-semibold cursor-pointer">Click to transform</p>
        </div>
        <div className="absolute right-32 bottom-28">
          <div class="__loader">
            <svg
              id="wave"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 38.05"
            >
              <path
                id="Line_1"
                data-name="Line 1"
                d="M0.91,15L0.78,15A1,1,0,0,0,0,16v6a1,1,0,1,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H0.91Z"
              />
              <path
                id="Line_2"
                data-name="Line 2"
                d="M6.91,9L6.78,9A1,1,0,0,0,6,10V28a1,1,0,1,0,2,0s0,0,0,0V10A1,1,0,0,0,7,9H6.91Z"
              />
              <path
                id="Line_3"
                data-name="Line 3"
                d="M12.91,0L12.78,0A1,1,0,0,0,12,1V37a1,1,0,1,0,2,0s0,0,0,0V1a1,1,0,0,0-1-1H12.91Z"
              />
              <path
                id="Line_4"
                data-name="Line 4"
                d="M18.91,10l-0.12,0A1,1,0,0,0,18,11V27a1,1,0,1,0,2,0s0,0,0,0V11a1,1,0,0,0-1-1H18.91Z"
              />
              <path
                id="Line_5"
                data-name="Line 5"
                d="M24.91,15l-0.12,0A1,1,0,0,0,24,16v6a1,1,0,0,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H24.91Z"
              />
              <path
                id="Line_6"
                data-name="Line 6"
                d="M30.91,10l-0.12,0A1,1,0,0,0,30,11V27a1,1,0,1,0,2,0s0,0,0,0V11a1,1,0,0,0-1-1H30.91Z"
              />
              <path
                id="Line_7"
                data-name="Line 7"
                d="M36.91,0L36.78,0A1,1,0,0,0,36,1V37a1,1,0,1,0,2,0s0,0,0,0V1a1,1,0,0,0-1-1H36.91Z"
              />
              <path
                id="Line_8"
                data-name="Line 8"
                d="M42.91,9L42.78,9A1,1,0,0,0,42,10V28a1,1,0,1,0,2,0s0,0,0,0V10a1,1,0,0,0-1-1H42.91Z"
              />
              <path
                id="Line_9"
                data-name="Line 9"
                d="M48.91,15l-0.12,0A1,1,0,0,0,48,16v6a1,1,0,1,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H48.91Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

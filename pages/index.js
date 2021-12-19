import Head from "next/head";

import gsap from "gsap";
import Link from "next/link";
export default function Home() {
  
  return (
    <section className="w-full">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="font-extrabold text-6xl">
          <span className="block">WE</span>TRANS
          <span className="lowercase">FORM</span>
        </p>
      </div>

      <div className="">
        <div className="absolute left-20 bottom-10">
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
              <path d="M11.001,30l2.707-16.334H5L11.458,0l9.25,0.123L16.667,8H25L11.001,30z" />
            </g>
          </svg>
        </div>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="font-semibold cursor-pointer">Click to transform</p>
        </div>
        <div className="absolute right-20 bottom-10">
          <img src="images/music.gif" className="w-32" alt="music gif"/>
        </div>
      </div>
    </section>
  );
}

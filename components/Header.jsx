import Link from "next/link";
import React, { useState } from "react";
import Overlay from "./Overlay";
import ToggleMenu from "./ToggleMenu";
import Background from "../public/images/john-towner-JgOeRuGD_Y4-unsplash.jpg";

export default function Header() {
  const [close, setClose] = useState(false);
  //   var background = {
  //       width: "100%",
  //       height: "400px",
  //       backgroundImage: "url(" + { Background } + ")"
  //   }
  return (
    <section className="mx-auto">
      <div className="w-full fixed">
        <div className="absolute top-20 left-32">
            <h2 className="absolute text-6xl font-extrabold tracking-wider">CH<span className="text-red-600">43</span></h2>
        </div>
        <div className="absolute top-16 right-24">
            <Overlay />
        </div>
      </div>
    </section>
  );
}
{
  /* <div className="header-width mx-auto">
        <div className="flex justify-between">
          <div className="my-8 mx-12">
            <Link href={'/'}>
              <a className="text-white text-3xl font-extrabold">
                CHAPTER <span className="text-red-500 ">43</span>
              </a>
            </Link>
          </div>
          <div className="">
            <Overlay />
          </div>
        </div>
      </div> */
}

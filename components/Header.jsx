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
    <>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between">
          <div className="my-8 mx-12">
            <Link href={'/'}>
              <a className="text-black text-3xl font-extrabold">
                CHAPTER <span className="text-red-500 ">43</span>
              </a>
            </Link>
          </div>
          <div className="">
            <Overlay />
          </div>
        </div>
      </div>
    </>
  );
}

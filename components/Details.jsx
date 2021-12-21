import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Details() {
  const el = useRef();

  useEffect(() => {
    gsap.to(el.current, { x: "+=36" });
  });
  return (
    <div>
      <svg
        ref={el}
        width="32px"
        height="32px"
        viewBox="0 0 16 16"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#fff" d="M0 7h16v1h-16v-1z"></path>
      </svg>
    </div>
  );
}

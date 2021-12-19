import React, { useState, useRef, useEffect } from "react";
import { TweenLite, Power3 } from "gsap";
import Link from "next/link";

// import leftArrow from "./images/left-arrow.svg";
// import rightArrow from "images/right-arrow.svg";

// import "reset-css";
// import "./app..scss";

const testimonials = [
  {
    name: "Julia Cameron",
    title: "Creative Director, VISA",
    // image: `${require("../public/images/image3.jpg")}`,
    image: "images/image3.jpg",
    quote:
      "It's all good. I was amazed at the quality of the Design. We've seen amazing results already.",
  },
  {
    name: "Mark Jacobs",
    title: "Tech Lead, Google",
    image: "images/image.jpg",
    quote:
      "The rebranding has really helped our business. Definitely worth the investment.",
  },
  {
    name: "Lisa Bearings",
    title: "Brand Coordinator, Facebook",
    image: "images/image2.jpg",
    quote:
      "The service was excellent. Absolutely wonderful! A complete redesign did it for us.",
  },
];

function Work() {
  let imageList = useRef(null);
  let testimonialList = useRef(null);
  const imageWidth = 340;

  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false,
  });

  useEffect(() => {
    TweenLite.to(testimonialList.children[0], 0, {
      opacity: 1,
    });
  }, []);

  //Image transition
  const slideLeft = (index, duration, multiplied = 1) => {
    TweenLite.to(imageList.children[index], duration, {
      x: -imageWidth * multiplied,
      ease: Power3.easeOut,
    });
  };

  const slideRight = (index, duration, multiplied = 1) => {
    TweenLite.to(imageList.children[index], duration, {
      x: imageWidth * multiplied,
      ease: Power3.easeOut,
    });
  };

  const scale = (index, duration) => {
    TweenLite.from(imageList.children[index], duration, {
      scale: 1.2,
      ease: Power3.easeOut,
    });
  };

  //Content transition

  const fadeOut = (index, duration) => {
    TweenLite.to(testimonialList.children[index], duration, {
      opacity: 0,
    });
  };

  const fadeIn = (index, duration) => {
    TweenLite.to(testimonialList.children[index], duration, {
      opacity: 1,
      delay: 1,
    });
  };

  const nextSlide = () => {
    if (imageList.children[0].classList.contains("active")) {
      setState({ isActive1: false, isActive2: true });
      //Image transition
      slideLeft(0, 1);
      slideLeft(1, 1);
      scale(1, 1);
      slideLeft(2, 1);
      slideLeft(2, 0);
      fadeOut(0, 1);
      fadeIn(1, 1);
    } else if (imageList.children[1].classList.contains("active")) {
      setState({ isActive2: false, isActive3: true });
      //Image transition
      slideRight(0, 1);
      slideLeft(1, 1, 2);
      slideLeft(2, 1, 2);
      scale(2, 1);
      //content transition
      fadeOut(1, 1);
      fadeIn(2, 1);
    } else if (imageList.children[2].classList.contains("active")) {
      setState({ isActive1: true, isActive3: false });
      //Image transition
      slideLeft(2, 1, 3);
      slideLeft(0, 1, 0);
      slideLeft(1, 0, 0);
      scale(0, 1);
      //content transition
      fadeOut(2, 1);
      fadeIn(0, 1);
    }
  };

  const prevSlide = () => {
    if (imageList.children[0].classList.contains("active")) {
      setState({ isActive1: false, isActive3: true });
      //Image transition
      slideLeft(2, 0, 3);
      slideLeft(2, 1, 2);
      scale(2, 1);
      slideRight(0, 1);
      slideRight(1, 1);
      //content transtion
      fadeOut(0, 1);
      fadeIn(2, 1);
    } else if (imageList.children[1].classList.contains("active")) {
      setState({ isActive2: false, isActive1: true });
      //Image transition
      slideLeft(0, 0);
      slideRight(0, 1, 0);
      slideRight(1, 1, 0);
      slideRight(2, 1, 2);
      scale(0, 1);
      //content transtion
      fadeOut(1, 1);
      fadeIn(0, 1);
    } else if (imageList.children[2].classList.contains("active")) {
      setState({ isActive2: true, isActive3: false });
      slideLeft(2, 1);
      slideLeft(1, 0, 2);
      slideLeft(1, 1);
      scale(1, 1);
      //content transtion
      fadeOut(2, 1);
      fadeIn(1, 1);
    }
  };

  return (
    <div className="testimonial-section">
      <div className="testimonial-container">
        <div onClick={prevSlide} className="arrows left">
          <span>
            {/* <img src={leftArrow} alt="left arrow" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="16.828"
              viewBox="0 0 34 16.828"
            >
              <g id="arrow-left" transform="translate(-4 -3.586)">
                <line
                  id="Line_10"
                  data-name="Line 10"
                  x1="32"
                  transform="translate(5 12)"
                  fill="none"
                  stroke="#2e293c"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.2"
                />
                <path
                  id="Path_3"
                  data-name="Path 3"
                  d="M12,19,5,12l7-7"
                  fill="none"
                  stroke="#2e293c"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.2"
                />
              </g>
            </svg>
          </span>
        </div>
        <div className="inner">
          <div className="t-image">
            <ul ref={(el) => (imageList = el)}>
              <li className={state.isActive1 ? "active" : ""}>
                <img src="images/image3.jpg" alt={testimonials[0].name} />
                
              </li>

              <li className={state.isActive2 ? "active" : ""}>
                <img src={testimonials[1].image} alt={testimonials[0].name} />
              </li>
              <li className={state.isActive3 ? "active" : ""}>
                <img src={testimonials[2].image} alt={testimonials[0].name} />
              </li>
            </ul>
          </div>
          <div className="t-content">
            <ul ref={(el) => (testimonialList = el)}>
              <li className={state.isActive1 ? "active" : ""}>
                <div className="content-inner">
                  <p className="quote">{testimonials[0].quote}</p>
                  <h3 className="name">{testimonials[0].name}</h3>
                  <h4 className="title cursor-pointer">{testimonials[0].title}</h4>

                </div>
                
              </li>
              

              <li className={state.isActive2 ? "active" : ""}>
                <div className="content-inner">
                  <p className="quote">{testimonials[1].quote}</p>
                  <h3 className="name">{testimonials[1].name}</h3>
                  <h4 className="title">{testimonials[1].title}</h4>
                </div>
              </li>
              <li className={state.isActive3 ? "active" : ""}>
                
                <div className="content-inner">
                  <p className="quote">{testimonials[2].quote}</p>
                  <h3 className="name">{testimonials[2].name}</h3>
                  <h4 className="title">{testimonials[2].title}</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="arrows right" onClick={nextSlide}>
          {/* <img src={rightArrow} alt="right arrow" /> */}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="16.828"
            viewBox="0 0 34 16.828"
          >
            <g id="arrow-left" transform="translate(38 20.414) rotate(180)">
              <line
                id="Line_10"
                data-name="Line 10"
                x1="32"
                transform="translate(5 12)"
                fill="none"
                stroke="#2e293c"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.2"
              />
              <path
                id="Path_3"
                data-name="Path 3"
                d="M12,19,5,12l7-7"
                fill="none"
                stroke="#2e293c"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.2"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Work;

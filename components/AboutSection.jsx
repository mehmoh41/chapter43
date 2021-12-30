import React, { useState, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

export default function AboutSection() {
  const featuredItems = [
    {
      title: "Responsive to the core",
      text: "Every Tailwind utility also comes with responsive variants, making it extremely easy to build responsive interfaces without resorting to custom CSS.",
      image:
        "https://cdn.dribbble.com/users/2487395/screenshots/6311129/responsivedesign_2x.png",
      alt: "responsive",
      imageLeft: false,
    },
    {
      title: "Responsive to the core",
      text: "Every Tailwind utility also comes with responsive variants, making it extremely easy to build responsive interfaces without resorting to custom CSS.",
      image:
        "https://icons8.com/wp-content/uploads/2020/02/tips-on-mobile-UI-design.png",
      alt: "Component-friendly",
      imageLeft: true,
    },
    {
      title: "Designed to be customized",
      text: "If it makes sense to be customizable, Tailwind lets you customize it. This includes colors, border sizes, font weights, spacing utilities, breakpoints, shadows, and tons more.",
      image:
        "https://statuscast.com/wp-content/uploads/2018/12/untitled-1@3x.png",
      alt: "customizable",
      imageLeft: false,
    },
  ];
  // const [timeline, setTimeline] = useState(gsap.timeline({ paused: false }));
  const [background, setBackground] = useState("#262626");
  const toggleBackground = () => {
    // console.log("button clicked");
    
    const color = background !== "#262626" ? "#262626" : "#1b4943";
    setBackground(color);
  };
  const headerRef = useRef(null);
  const revealRefs = useRef([]);
  revealRefs.current = [];
  const featureRef = useRef(null);
  const heroRef = useRef(null);
  const heroTitleRef = useRef(null)

  

  useEffect(() => {
      gsap.fromTo(heroTitleRef.current , {y: +1000 , delay: 1 , duration: 3},{x:50 , y:0 , delay:1 , duration: 2 , ease:"bounce.inOut"})
  }, [])

  useEffect(() => {
    gsap.to(heroRef.current, {
      backgroundColor: background,
      duration: 3,
      ease: "bounce.inOut",
    });
  }, [background]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(heroRef.current, {
      autoAlpha: 0,
      ease: "bounce.inOut",
      delay: 1,
    });

    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
        },
        {
          duration: 1,
          autoAlpha: 1,
          ease: "bounce.inOut",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=100",
            toggleActions: "play none none reverse",
            
          },
        }
      );
    });
  }, []);

  const addToRefs = el => {
    if (el && !revealRefs.current.includes(el)) {
        revealRefs.current.push(el);
    }
  };

  return (
    <div class="text-gray-700 bg-white">
      {/* the hero section has to be fadeout from opacity 0 to 1 */}
      <div class="py-96 " ref={heroRef}>
        <div class="container mx-auto px-6" ref={heroTitleRef}>
          <div class="text-4xl font-bold mb-2 text-white" >
            Design awesome websites without headaches!
          </div>
          <div class="text-2xl mb-8 text-gray-200">
            A utility-first CSS framework for rapidly building custom designs.
          </div>
          <button
            class="transform hover:scale-110 transition duration-300 ease-in-out bg-white font-bold rounded-full py-6 px-8 shadow-lg uppercase tracking-wider"
            onClick={toggleBackground}
          >
            Change Background
          </button>
        </div>
      </div>
      <section class="container mx-auto px-6 mt-24">
        {featuredItems.map((featuredItem) => {
          return (
            <>
                <h2 className="text-center text-5xl text-indigo-600 font-extrabold mb-12">WHAT WE DO ?</h2>
              {featuredItem.imageLeft ? (  
                <div
                  class="flex items-center flex-wrap mb-20"
                  key={featuredItem.title}
                  ref={addToRefs}
                >
                  <div class="w-full md:w-1/2 px-4">
                    <img src={featuredItem.image} alt={featuredItem.alt} />
                  </div>
                  <div class="w-full md:w-1/2 px-4">
                    <h4 class="text-3xl text-gray-800 font-bold mb-3">
                      {featuredItem.title}
                    </h4>
                    <p class="text-gray-600 mb-8">{featuredItem.text}</p>
                  </div>
                </div>
              ) : (
                <div
                  class="flex items-center flex-wrap mb-10 pb-96"
                  key={featuredItem.title}
                  ref={addToRefs}
                >
                  <div class="w-full md:w-1/2 px-4">
                    <h4 class="text-3xl text-gray-800 font-bold mb-3">
                      {featuredItem.title}
                    </h4>
                    <p class="text-gray-600 mb-8">{featuredItem.text}</p>
                  </div>
                  <div class="w-full md:w-1/2 px-4">
                    <img src={featuredItem.image} alt={featuredItem.alt} />
                  </div>
                </div>
              )}
            </>
          );
        })}
      </section>
      
      
      <footer class="bg-gray-100">
        <div class="container mx-auto px-6 pt-10 pb-6">
          <div class="flex flex-wrap">
            <div class="w-full md:w-1/4 text-center md:text-left">
              <h5 class="uppercase mb-6 font-bold">Links</h5>
              <ul class="mb-4">
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    FAQ
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Help
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-full md:w-1/4 text-center md:text-left">
              <h5 class="uppercase mb-6 font-bold">Legal</h5>
              <ul class="mb-4">
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Terms
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-full md:w-1/4 text-center md:text-left">
              <h5 class="uppercase mb-6 font-bold">Social</h5>
              <ul class="mb-4">
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Facebook
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Linkedin
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-full md:w-1/4 text-center md:text-left">
              <h5 class="uppercase mb-6 font-bold">Company</h5>
              <ul class="mb-4">
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Official Blog
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    About Us
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

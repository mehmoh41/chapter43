  import React, { useEffect,useRef, useState } from "react";
import Link from "next/link";
import $ from 'jquery'
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
import Swiper from "swiper";

// Import Swiper styles

// import Swiper core and required modules
// import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import Header from "./header";
// import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
// SwiperCore.use([Pagination, Navigation]);
// SwiperCore.use([Autoplay, Pagination, Navigation]);
SwiperCore.use([Autoplay, Pagination]);

export default function Slider() {
  useEffect(() => {
    // $(document).ready(function () {
    //   var swiper = new Swiper(".swiper-container", {
    //     autoplay: {
    //       delay: 5000,
    //       disableOnInteraction: false
    //     },
    //     speed: 500,
    //     loop: true,
    //     pagination: {
    //       el: ".swiper-pagination",
    //       type: "fraction"
    //     },
    //     navigation: {
    //       nextEl: ".swiper-button-next",
    //       prevEl: ".swiper-button-prev"
    //     },
    //     on: {
    //       init: function () {
    //         $(".swiper-progress-bar").removeClass("animate");
    //         $(".swiper-progress-bar").removeClass("active");
    //         $(".swiper-progress-bar").eq(0).addClass("animate");
    //         $(".swiper-progress-bar").eq(0).addClass("active");
    //       },
    //       slideChangeTransitionStart: function () {
    //         $(".swiper-progress-bar").removeClass("animate");
    //         $(".swiper-progress-bar").removeClass("active");
    //         $(".swiper-progress-bar").eq(0).addClass("active");
    //       },
    //       slideChangeTransitionEnd: function () {
    //         $(".swiper-progress-bar").eq(0).addClass("animate");
    //       }
    //     }
    //   });
    //   $('.swiper-container').hover(function() {
    //     swiper.autoplay.stop();
    //     $('.swiper-progress-bar').removeClass('animate');
    //   }, function(){
    //     swiper.autoplay.start();
    //     $('.swiper-progress-bar').addClass('animate');
    //   });
    // });
    // var listArray = ["slide1","slide2","slide3"];
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
        loop: true,
        autoplayDisableOnInteraction: true
  ,
        slidesPerView: 1,        
        autoHeight: true,
        autoplay: {
            delay: 3000,//animation과 시간 맞춰줘야함
        }, 
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: 'true',
            type: 'bullets',
            renderBullet: function (index, className) {
                return '<span class="' + className + '">'  + '<i></i>' + '<b></b>'  + '</span>';
              },
        
        },
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
})
  }, [])
  return (
    
<div class="swiper-container">
    
    <div class="swiper-wrapper">
    
        <div className="swiper-slide swiper__slide" style={{ backgroundImage: "url('https://i.gifer.com/tRm.gif')" }}>
               {/* <img
            src="https://i.gifer.com/tRm.gif"
            alt="hero image"
            className="w-full h-fit"
          /> */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h4 className="text-2xl font-semibold mb-16 uppercase">Lorem</h4>
            <h2 className="text-7xl font-extrabold my-4 uppercase bg__img">Lorem ipsum</h2>
            <p className="w-96 mx-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo excepturi quia itaque nesciunt.
            </p>
            <Link href="/home/details-page">
                <span className="inline-block text-gray-600 uppercase hover:text-white hover:underline transition duration-500 ease-in-out cursor-pointer mt-8">View Project</span>
            </Link>
          </div>

        </div>
        <div class="swiper-slide swiper__slide" style={{ backgroundImage: "url('https://i.gifer.com/QHC.gif')" }}>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h4 className="text-2xl font-semibold mb-16 uppercase">Lorem</h4>
            <h2 className="text-7xl font-extrabold my-4 uppercase bg__img">Lorem ipsum</h2>
            <p className="w-96 mx-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo excepturi quia itaque nesciunt.
            </p>
            <Link href="/home/details-page">
                <span className="inline-block text-gray-600 uppercase hover:text-white hover:underline transition duration-500 ease-in-out cursor-pointer mt-8">View Project</span>
            </Link>
          </div>
        </div>
        <div class="swiper-slide swiper__slide" style={{ backgroundImage: "url('https://i.gifer.com/fxac.gif')" }}>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h4 className="text-2xl font-semibold mb-16 uppercase">Lorem</h4>
            <h2 className="text-7xl font-extrabold my-4 uppercase bg__img">Lorem ipsum</h2>
            <p className="w-96 mx-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo excepturi quia itaque nesciunt.
            </p>
            <Link href="/home/details-page">
                <span className="inline-block text-gray-600 uppercase hover:text-white hover:underline transition duration-500 ease-in-out cursor-pointer mt-8">View Project</span>
            </Link>
          </div>
        </div>
        <div class="swiper-slide swiper__slide" style={{ backgroundImage: "url('https://i.gifer.com/Ai5g.gif')" }}>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h4 className="text-2xl font-semibold mb-16 uppercase">Lorem</h4>
            <h2 className="text-7xl font-extrabold my-4 uppercase bg__img">Lorem ipsum</h2>
            <p className="w-96 mx-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo excepturi quia itaque nesciunt.
            </p>
            <Link href="/home/details-page">
                <span className="inline-block text-gray-600 uppercase hover:text-white hover:underline transition duration-500 ease-in-out cursor-pointer mt-8">View Project</span>
            </Link>
          </div>
        </div>
        <div class="swiper-slide swiper__slide" style={{ backgroundImage: "url('https://i.gifer.com/AaQb.gif')" }}>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h4 className="text-2xl font-semibold mb-16 uppercase">Lorem</h4>
            <h2 className="text-7xl font-extrabold my-4 uppercase bg__img">Lorem ipsum</h2>
            <p className="w-96 mx-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo excepturi quia itaque nesciunt.
            </p>
            <Link href="/home/details-page">
                <span className="inline-block text-gray-600 uppercase hover:text-white hover:underline transition duration-500 ease-in-out cursor-pointer mt-8">View Project</span>
            </Link>
          </div>
        </div>
    </div>
    
    <div class="swiper-pagination"></div>

    
    {/* <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> */}

    
    <div class="swiper-scrollbar"></div>
</div>


    // THE FIRST ONE
    //     <Header />
    //   <Swiper
    //     spaceBetween={30}
    //     centeredSlides={true}
    //     autoplay={{
    //       delay: 2500,
    //       disableOnInteraction: false,
    //     }}
    //     pagination={{
    //       clickable: true,
    //     }}
    //     // navigation={true}
    //     className=""
    //   >
    //     <SwiperSlide>
    //       <img
    //         src="https://i.gifer.com/tRm.gif"
    //         alt="hero image"
    //         className=""
    //       />
    //       <div className="absolute bottom-72 w-3/4 text-white text-center">
    //         <h4 className="text-2xl font-semibold mb-16 uppercase">Lorem</h4>
    //         <h2 className="text-7xl font-extrabold my-4 uppercase bg__img">Lorem ipsum</h2>
    //         <p className="w-96 mx-auto">
    //           Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //           Explicabo excepturi quia itaque nesciunt.
    //         </p>
    //         <Link href="/home/details-page">
    //             <span className="inline-block text-gray-600 uppercase hover:text-white hover:underline transition duration-500 ease-in-out cursor-pointer mt-8">View Project</span>
    //         </Link>
    //       </div>
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src="https://i.gifer.com/QHC.gif" alt="nature" />
    //       <div className="absolute bottom-72 w-3/4 text-white text-center">
    //         <h4 className="text-2xl font-semibold mb-16 uppercase">Lorem</h4>
    //         <h2 className="text-7xl font-extrabold my-4 uppercase bg__img">Lorem ipsum</h2>
    //         <p className="w-96 mx-auto">
    //           Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //           Explicabo excepturi quia itaque nesciunt.
    //         </p>
    //         <Link href="/home/details-page">
    //             <span className="inline-block text-gray-600 uppercase hover:text-white hover:underline transition duration-500 ease-in-out cursor-pointer mt-8">View Project</span>
    //         </Link>
    //       </div>
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src="https://i.gifer.com/QHJ.gif" alt="night" />
    //       <div className="absolute bottom-72 w-3/4 text-white text-center">
    //         <h4 className="text-2xl font-semibold mb-16 uppercase">Lorem</h4>
    //         <h2 className="text-7xl font-extrabold my-4 uppercase bg__img">Lorem ipsum</h2>
    //         <p className="w-96 mx-auto">
    //           Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //           Explicabo excepturi quia itaque nesciunt.
    //         </p>
    //         <Link href="/home/details-page">
    //             <span className="inline-block text-gray-600 uppercase hover:text-white hover:underline transition duration-500 ease-in-out cursor-pointer mt-8">View Project</span>
    //         </Link>
    //       </div>
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src="https://i.gifer.com/fxac.gif" alt="nature night" />
    //       <div className="absolute bottom-72 w-3/4 text-white text-center">
    //         <h4 className="text-2xl font-semibold mb-16 uppercase">Lorem</h4>
    //         <h2 className="text-7xl font-extrabold my-4 uppercase bg__img">Lorem ipsum</h2>
    //         <p className="w-96 mx-auto">
    //           Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //           Explicabo excepturi quia itaque nesciunt.
    //         </p>
    //         <Link href="/home/details-page">
    //             <span className="inline-block text-gray-600 uppercase hover:text-white hover:underline transition duration-500 ease-in-out cursor-pointer mt-8">View Project</span>
    //         </Link>
    //       </div>
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src="https://i.gifer.com/Ai5g.gif" alt="nature night" />
    //       <div className="absolute bottom-72 w-3/4 text-white text-center">
    //         <h4 className="text-2xl font-semibold mb-16 uppercase">Lorem</h4>
    //         <h2 className="text-7xl font-extrabold my-4 uppercase bg__img">Lorem ipsum</h2>
    //         <p className="w-96 mx-auto">
    //           Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //           Explicabo excepturi quia itaque nesciunt.
    //         </p>
    //         <Link href="/home/details-page">
    //             <span className="inline-block text-gray-600 uppercase hover:text-white hover:underline transition duration-500 ease-in-out cursor-pointer mt-8">View Project</span>
    //         </Link>
    //       </div>
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src="https://i.gifer.com/SqN.gif" alt="nature night" />
    //       <div className="absolute bottom-72 w-3/4 text-white text-center">
    //         <h4 className="text-2xl font-semibold mb-16 uppercase">Lorem</h4>
    //         <h2 className="text-7xl font-extrabold my-4 uppercase bg__img">Lorem ipsum</h2>
    //         <p className="w-96 mx-auto">
    //           Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //           Explicabo excepturi quia itaque nesciunt.
    //         </p>
    //         <Link href="/home/details-page">
    //             <span className="inline-block text-gray-600 uppercase hover:text-white hover:underline transition duration-500 ease-in-out cursor-pointer mt-8">View Project</span>
    //         </Link>
    //       </div>
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src="https://i.gifer.com/AaQb.gif" alt="nature night" />
    //       <div className="absolute bottom-72 w-3/4 text-white text-center">
    //         <h4 className="text-2xl font-semibold mb-16 uppercase">Lorem</h4>
    //         <h2 className="text-7xl font-extrabold my-4 uppercase bg__img">Lorem ipsum</h2>
    //         <p className="w-96 mx-auto">
    //           Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //           Explicabo excepturi quia itaque nesciunt.
    //         </p>
    //         <Link href="/home/details-page">
    //             <span className="inline-block text-gray-600 uppercase hover:text-white hover:underline transition duration-500 ease-in-out cursor-pointer mt-8">View Project</span>
    //         </Link>
    //       </div>
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img src="https://i.gifer.com/Rcio.gif" alt="nature night" />
    //       <div className="absolute bottom-72 w-3/4 text-white text-center">
    //         <h4 className="text-2xl font-semibold mb-16 uppercase">Lorem</h4>
    //         <h2 className="text-7xl font-extrabold my-4 uppercase bg__img">Lorem ipsum</h2>
    //         <p className="w-96 mx-auto">
    //           Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    //           Explicabo excepturi quia itaque nesciunt.
    //         </p>
    //         <Link href="/home/details-page">
    //             <span className="inline-block text-gray-600 uppercase hover:text-white hover:underline transition duration-500 ease-in-out cursor-pointer mt-8">View Project</span>
    //         </Link>
    //       </div>
    //     </SwiperSlide>
    //   </Swiper>
    // </>
  );
}

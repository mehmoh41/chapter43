import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
// import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
// SwiperCore.use([Pagination, Navigation]);
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className=""
      >
        <SwiperSlide>
          <img
            src="https://i.gifer.com/tRm.gif"
            alt="hero image"
            className=""
          />
          <div className="absolute bottom-72 w-3/4 text-white text-center">
            <h4 className="text-2xl font-semibold mb-16 uppercase">Lorem</h4>
            <h2 className="text-7xl font-extrabold my-4 uppercase bg__img">Lorem ipsum</h2>
            <p className="w-96 mx-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo excepturi quia itaque nesciunt.
            </p>
            <span className="inline-block text-gray-600 uppercase hover:text-white hover:underline transition duration-500 ease-in-out cursor-pointer mt-8">View Project</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.gifer.com/QHC.gif" alt="nature" />
          <div className="absolute bottom-72 w-3/4 text-white text-center">
            <h4 className="text-2xl font-semibold mb-16 uppercase">Lorem</h4>
            <h2 className="text-7xl font-extrabold my-4 uppercase bg__img">Lorem ipsum</h2>
            <p className="w-96 mx-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo excepturi quia itaque nesciunt.
            </p>
            <span className="inline-block text-gray-600 uppercase hover:text-white hover:underline transition duration-500 ease-in-out cursor-pointer mt-8">View Project</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.gifer.com/QHJ.gif" alt="night" />
          <div className="absolute bottom-72 w-3/4 text-white text-center">
            <h4 className="text-2xl font-semibold mb-16 uppercase">Lorem</h4>
            <h2 className="text-7xl font-extrabold my-4 uppercase bg__img">Lorem ipsum</h2>
            <p className="w-96 mx-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo excepturi quia itaque nesciunt.
            </p>
            <span className="inline-block text-gray-600 uppercase hover:text-white hover:underline transition duration-500 ease-in-out cursor-pointer mt-8">View Project</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.gifer.com/fxac.gif" alt="nature night" />
          <div className="absolute bottom-72 w-3/4 text-white text-center">
            <h4 className="text-2xl font-semibold mb-16 uppercase">Lorem</h4>
            <h2 className="text-7xl font-extrabold my-4 uppercase bg__img">Lorem ipsum</h2>
            <p className="w-96 mx-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo excepturi quia itaque nesciunt.
            </p>
            <span className="inline-block text-gray-600 uppercase hover:text-white hover:underline transition duration-500 ease-in-out cursor-pointer mt-8">View Project</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.gifer.com/Ai5g.gif" alt="nature night" />
          <div className="absolute bottom-72 w-3/4 text-white text-center">
            <h4 className="text-2xl font-semibold mb-16 uppercase">Lorem</h4>
            <h2 className="text-7xl font-extrabold my-4 uppercase bg__img">Lorem ipsum</h2>
            <p className="w-96 mx-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo excepturi quia itaque nesciunt.
            </p>
            <span className="inline-block text-gray-600 uppercase hover:text-white hover:underline transition duration-500 ease-in-out cursor-pointer mt-8">View Project</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.gifer.com/SqN.gif" alt="nature night" />
          <div className="absolute bottom-72 w-3/4 text-white text-center">
            <h4 className="text-2xl font-semibold mb-16 uppercase">Lorem</h4>
            <h2 className="text-7xl font-extrabold my-4 uppercase bg__img">Lorem ipsum</h2>
            <p className="w-96 mx-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo excepturi quia itaque nesciunt.
            </p>
            <span className="inline-block text-gray-600 uppercase hover:text-white hover:underline transition duration-500 ease-in-out cursor-pointer mt-8">View Project</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.gifer.com/AaQb.gif" alt="nature night" />
          <div className="absolute bottom-72 w-3/4 text-white text-center">
            <h4 className="text-2xl font-semibold mb-16 uppercase">Lorem</h4>
            <h2 className="text-7xl font-extrabold my-4 uppercase bg__img">Lorem ipsum</h2>
            <p className="w-96 mx-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo excepturi quia itaque nesciunt.
            </p>
            <span className="inline-block text-gray-600 uppercase hover:text-white hover:underline transition duration-500 ease-in-out cursor-pointer mt-8">View Project</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.gifer.com/Rcio.gif" alt="nature night" />
          <div className="absolute bottom-72 w-3/4 text-white text-center">
            <h4 className="text-2xl font-semibold mb-16 uppercase">Lorem</h4>
            <h2 className="text-7xl font-extrabold my-4 uppercase bg__img">Lorem ipsum</h2>
            <p className="w-96 mx-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo excepturi quia itaque nesciunt.
            </p>
            <span className="inline-block text-gray-600 uppercase hover:text-white hover:underline transition duration-500 ease-in-out cursor-pointer mt-8">View Project</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

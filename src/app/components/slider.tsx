"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { Josefin_Sans } from "next/font/google";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Sliding() {
  return (
    <>


     <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper h-[400px] sm:h-[500px] w-full "
      >
        <SwiperSlide>
          <div className="flex justify-around bg-[#F2F0FF] h-[400px] sm:h-[500px]">
            <div className="h-[150px] w-[200px] md:block hidden ml-4">
              <Image
                src={"/images/slider/pic1.png"}
                width={200}
                height={150}
                alt="heroPick h-[150px] w-[300px] hidden "
              />
            </div>
            <div className=" w-[500px] lg:w-[644px] h-auto  flex flex-col gap-8   pl-5 lg:pl-0 lg:gap-4  py-7 mt-20">
              <p className="text-[#FB2E86] text-[16px]">
                Best Furniture For Your Castle....
              </p>
              <h1
                className={`${josefinSans.className} lg:text-[35px] text-[25px]  font-bold leading-tight `}
              >
                New Furniture Collection <br />
                Trends in 2020{" "}
              </h1>
              <p className="text-[#8A8FB9] text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing 
                in phasellus non in justo.
              </p>
              <button className="w-[163px] h-[50px] flex justify-center items-center bg-[#FB2E86] text-white">
                Shop Now
              </button>
            </div>

            <div className="sm:flex justify-center hidden items-center">
               <Image src={'/images/slider/pic2.png'} height={629} width={629} alt="chair"  className="lg:h-[400px] lg:w-[400px] sm:h-[300px] sm:w-[300px]"/>

            </div>
          </div>
        </SwiperSlide> 
        <SwiperSlide>
          <Image
            height={400}
            width={400}
            src={"/images/slider/pick-3.png"}
            alt="banner"
            className="h-[400px] sm:h-[500px] w-full "
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            height={400}
            width={400}
            src={"/images/slider/pick-4.png"}
            alt="banner"
            className="h-[400px] sm:h-[500px] w-full "
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            height={400}
            width={400}
            src={"/images/slider/pick-5.png"}
            alt="banner"
             className="h-[400px] sm:h-[500px] w-full "
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            height={400}
            width={400}
            src={"/images/slider/pick-6.png"}
            alt="banner"
             className="h-[400px] sm:h-[500px] w-full "
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

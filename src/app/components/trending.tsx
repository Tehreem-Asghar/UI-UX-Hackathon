import React from "react";
import { Josefin_Sans } from "next/font/google";
import Image from "next/image";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const trending = [
  "/images/trending/Cantileverchair1.png",
  "/images/trending/Cantileverchair2.png",
  "/images/trending/Cantileverchair3.png",
  "/images/trending/Cantileverchair4.png",
];

export default function Trending() {
  return (
    <main className="mt-24  w-full">
      <h1
        className={`text-[#151875] text-[34px] text-center font-bold mb-6    ${josefinSans.className}`}
      >
        Trending Products{" "}
      </h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  mb-16  justify-center gap-4  ">
        {trending.map((image, index) => {
          return (
            <div key={index} className="h-auto  w-full   shadow-md ">
              <div className="h-[270px]  w-[100%]    lg:mx-0  relative  flex  gap-5 flex-col justify-center items-center bg-[#F6F7FB]">
                <Image
                  src={image}
                  width={216}
                  height={151}
                  alt="product-image"
                  className="h-[211px] w-[151]"
                />
              </div>
              <div className="flex  w-[100%] flex-col justify-center items-center gap-3 mt-3  text-[#151875]  ">
                <h2 className="font-bold">Cantilever chair</h2>
                <div className="flex gap-3">
                  <p>$26.00 </p>
                  <p className="text-gray-500">$42.00</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  justify-center gap-4  ">
         <div className="w-full h-auto flex p-3 flex-col justify-center  items-center hover:bg-[#EEEFFB]  shadow-md">
          <h3 className="text-[#151875] font-bold"> 23% off in all products</h3>
          <p className="text-[#FB2E86] underline underline-offset-4">
            Shop Now
          </p>
          <Image
            src={"/images/trending/clock.png"}
            height={207}
            width={213}
            alt="table"
            className="self-end  "
          />
        </div>
        <div className="w-full h-auto p-3 flex flex-col justify-center items-center hover:bg-[#EEEFFB] shadow-md ">
          <h3  className="text-[#151875] font-bold"> 23% off in all products</h3>
          <p className="text-[#FB2E86] underline underline-offset-4">
            Shop Now
          </p>
          <Image
            src={"/images/trending/table.png"}
            height={207}
            width={213}
            alt="table"
            className="self-end"
          />
        </div>
        <div className="w-[100%] h-auto flex  p-3 flex-col justify-center items-center  text-[#151875] shadow-md hover:bg-[#EEEFFB] ">
          <div className="flex gap-5 mb-5">
          <div className="bg-[#EEEFFB]  p-5">
            <Image
              src={"/images/trending/chair1.png"}
              height={71}
              width={64}
              alt="chair"
              className="h-[60px] w-[60px] "
            />
            </div>
            <div> 
            <p>
              Executive Seat chair  </p>
              <p className="font-bold">$32.00</p>
            </div>
          </div>

          <div className="flex gap-5 mb-5">
            <div className="bg-[#EEEFFB]  p-5">
            <Image
              src={"/images/trending/chair2.png"}
              height={71}
              width={64}
              alt="chair"
              className="h-[60px] w-[60px]  "
            />
            </div>
            <div> 
            <p>
              Executive Seat chair  </p>
              <p className="font-bold">$32.00</p>
            </div>
          </div>


          <div className="flex  items-center gap-5 mb-5">
          <div className="bg-[#EEEFFB]  p-5">
            <Image
              src={"/images/trending/chair3.png"}
              height={71}
              width={64}
              alt="chair"
              className="h-[60px] w-[60px] "
            />
             </div>
            <div> 
            <p>
              Executive Seat chair  </p>
              <p className="font-bold">$32.00</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

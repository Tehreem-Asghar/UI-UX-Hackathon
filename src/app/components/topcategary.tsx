import React from "react";
import { Josefin_Sans } from "next/font/google";
import Image from "next/image";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const trending = [
    "/images/featureProducts/product1.png",
  "/images/featureProducts/product2.png",
  "/images/featureProducts/product3.png",
  "/images/featureProducts/product4.png",
];

export default function TopCategary() {
  return (
    <main className="mt-24  w-full">
      <h1
        className={`text-[#151875] text-[34px] text-center font-bold mb-6    ${josefinSans.className}`}
      >
       Top Categories
      </h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  mb-16  justify-center gap-4  ">
        {trending.map((image, index) => {
          return (
            <div key={index} className="h-auto  w-full flex flex-col justify-center items-center  shadow-md ">
              <div className="h-[269px]  w-[269px]  rounded-full   hover:border-l-[1px] hover:border-b-[5px] hover:border-l-purple-800 hover:border-b-purple-800   lg:mx-0  relative  flex  gap-5 flex-col justify-center items-center bg-[#F6F7FB]">
                <Image
                  src={image}
                  width={216}
                  height={151}
                  alt="product-image"
                  className="h-[211px] w-[151]"
                />
              </div>
              <div className="flex  w-[100%] flex-col justify-center items-center gap-3 mt-3  text-[#151875]  ">
                <h2 className="font-bold">Mini LCW Chair</h2>
                <div className="flex gap-3">
                  <p >$56.00</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>


    </main>
  );
}

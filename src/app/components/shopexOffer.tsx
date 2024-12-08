import Image from "next/image";
import React from "react";
import { Josefin_Sans } from "next/font/google";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const images = [
  "/images/offer/offer1.png",
  "/images/offer/offer2.png",
  "/images/offer/offer3.png",
  "/images/offer/offer4.png",
];

function ShopexOffer() {
  return (
    <main>
      <h1
        className={`text-[42px] text-[#151875] font-bold ${josefinSans.className} text-center my-12`}
      >
        What Shopex Offer!
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  justify-center gap-4  ">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className="h-auto   w-full   flex justify-center items-center flex-col shadow-md shadow-[#EEEFFB]  bg-[#ffffff] gap-3"
            >
              <Image
                src={image}
                width={65}
                height={65}
                alt="product-image"
                className="h-[65px] w-[65px] mt-4"
              />

              <h1 className="text-[#151875]  font-bold">24/7 Support</h1>
              <p className="px-4 text-center text-[#8A8FB9] mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default ShopexOffer;

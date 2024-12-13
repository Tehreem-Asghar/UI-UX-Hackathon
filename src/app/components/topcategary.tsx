import React from "react";
import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { topCategary } from "../../../data";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});



export default function TopCategary() {
  return (
    <main className="mt-24  w-full">
      <div className="lg:mx-[170px] sm:mx-[30px]">
        <h1
          className={`text-[#151875] text-[34px] text-center font-bold mb-6    ${josefinSans.className}`}
        >
          Top Categories
        </h1>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 px-5 sm:px-0  mb-16  justify-center gap-4  ">
          {topCategary.map((product) => {
            return (
              <div
                key={product.id}
                className="h-auto group w-full flex flex-col justify-center items-center  shadow-md "
              >
                <div className="lg:h-[230px]  lg:w-[230px]   w-[200px]  h-[200px] rounded-full   hover:border-l-[1px] hover:border-b-[5px] hover:border-l-purple-800 hover:border-b-purple-800   lg:mx-0  relative  flex  gap-5 flex-col justify-center items-center  lg:bg-inherit bg-[#F6F7FB]">
                  <Image
                    src={product.image}
                    width={216}
                    height={151}
                    alt="product-image"
                    className="lg:h-[211px] lg:w-[151] h-[180px] w-[110px]"
                  />
                  <Button
                    asChild
                    className="h-[29px] w-[94px] hidden  absolute bottom-3 hover:bg-[#08D15F]  bg-[#08D15F] p-1 text-[12px] text-white group-hover:flex justify-center items-center"
                  >
                    <Link href={`/${product.id}`}>View Details</Link>
                  </Button>
                </div>
                <div className="flex  w-[100%] flex-col justify-center items-center gap-3 mt-3  text-[#151875]  ">
                  <h2 className="font-bold">{product.name}</h2>
                  <div className="flex mb-4 gap-3">
                    <p>${product.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}

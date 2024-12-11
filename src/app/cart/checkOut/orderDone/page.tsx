import React from "react";
import { Josefin_Sans } from "next/font/google";
import { FaCheck } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function page() {
  return (
    <main className="max-w-[1920px] mx-auto">
      <section className="h-[286px] w-full bg-[#F6F5FF] grid items-center ">
        <div className="sm:mx-[170px] mx-[30px] overflow-hidden text-center sm:text-left">
          <h2
            className={`${josefinSans.className} text-[25px] sm:text-[36px] text-[#101750] font-bold`}
          >
            Order Completed
          </h2>
          <span className="flex sm:justify-start justify-center font-medium">
            <p>Home.Pages</p>
            <p className="text-[#FB2E86]">.Order Completed</p>
          </span>
        </div>
      </section>

      <section className="lg:mx-[170px] mx-[30px] my-24 flex justify-center items-center">
        <div className="flex flex-col justify-center  items-center gap-4 h-auto w-[635px] ">
          <div className="h-[65px] w-[65px] rounded-full flex justify-center items-center bg-white shadow-md">
            <FaCheck className="text-[#FF1788] text-[36px] font-bold " />
          </div>
          <h1 className="text-[#101750]  text-[24px] sm:text-[36px] font-bold text-center ">
            Your Order Is Completed!{" "}
          </h1>
          <p className="text-[#8D92A7] text-center  text-[14px] sm:text-[16px] ">
            Thank you for your order! Your order is being processed and will be
            completed within 3-6 hours. You will receive an email confirmation
            when your order is completed.
          </p>

          <Button
            asChild
            className="text-white w-[208px] h-[59px]  hover:bg-[#FB2E86] bg-[#FB2E86]"
          >
            <Link href={"/"}>Continue Shoping</Link>
          </Button>
        </div>
      </section>

      <div className="h-[93px] sm:mx-[170px] mx-[30px]  mb-4">
        <Image
          src={"/images/tags/tags.png"}
          height={93}
          width={400}
          alt="tag"
          className="h-[93px] w-full"
        />
      </div>
    </main>
  );
}

export default page;

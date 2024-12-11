import React from "react";
import { Josefin_Sans } from "next/font/google";

import { Button } from "@/components/ui/button";

import Image from "next/image";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function login() {
  return (
    <main className="max-w-[1920px] mx-auto">
      <section className="h-[286px] w-full bg-[#F6F5FF] grid items-center ">
        <div className="sm:mx-[170px] mx-[30px] overflow-hidden text-center sm:text-left">
          <h2
            className={`${josefinSans.className} text-[25px] sm:text-[36px] text-[#101750] font-bold`}
          >
           My Account
          </h2>
          <span className="flex sm:justify-start justify-center font-medium">
            <p>Home.Pages</p>
            <p className="text-[#FB2E86]">.My Account</p>
          </span>
        </div>
      </section>

      <section className="lg:mx-[170px] mx-[30px] my-24 flex justify-center items-center">
        <div className="flex flex-col justify-center  items-center gap-6 h-auto w-[544px] p-5 lg:h-[474px]">
         
          <h1 className="text-[#101750]  text-[24px] sm:text-[36px] font-bold text-center ">
          Login
          </h1>
          <p className="text-[#8D92A7] text-center  text-[14px] sm:text-[16px] ">
          Please login using account detail bellow.
          </p>
           <input type="email"  placeholder="Email Address"  className="border border-[#C2C5E1] text-[#9096B2] w-full p-2"/>
           <input type="password"  placeholder="Password"  className="border border-[#C2C5E1]  text-[#9096B2]  w-full  p-2"/>
           <p className="text-[#9096B2]">Forgot your password?</p>
           <Button className="h-[47px] w-full  bg-[#FB2E86] text-white hover:bg-[#FB2E86]">Sign In</Button>
           <p className="text-[#9096B2]">{`Don't have an Account?Create account`}</p>
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

export default login;

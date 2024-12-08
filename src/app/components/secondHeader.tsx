'use client'

import Link from "next/link";
import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { Lato , Josefin_Sans } from "next/font/google";
import { IoSearch } from "react-icons/io5";
import { SlMenu } from "react-icons/sl";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});


const josefinSans = Josefin_Sans({
    subsets: ["latin"],
    weight: ["400", "700"],
  });


function SecondHeader() {
  const activeLink = usePathname();
  return (
    <main className="max-w-[1920px] mx-auto flex w-full lg:justify-center items-center">
      <header className="h-[40px] lg:mx-[120px]  mx-[30px]  my-4 w-full  flex justify-between lg:justify-around items-center  ">
        <h1 className={`md:text-[34px] text-[28px] text-[#0D0E43]  font-[700] tracking-wide ${josefinSans.className}`}>
          Hekto
        </h1>
        <nav
          className={`lg:flex gap-6 text-[#0D0E43]  hidden text-[16px]  ${lato.className}`}
        >
          <Link
            href={"/"}
            className={`flex items-center  ${
              activeLink == "/" && "text-[#FB2E86]"
            }`}
          >
            Home <FaAngleDown />
          </Link>
          <Link
            href={"/pages"}
            className={`${activeLink == "/pages" && "text-[#FB2E86]"}`}
          >
            Pages
          </Link>
          <Link
            href={"/products"}
            className={`${activeLink == "/products" && "text-[#FB2E86]"}`}
          >
            {" "}
            Products
          </Link>
          <Link
            href={"/blog"}
            className={`${activeLink == "/blog" && "text-[#FB2E86]"}`}
          >
            Blog
          </Link>
          <Link
            href={"/shop"}
            className={`${activeLink == "/shop" && "text-[#FB2E86]"}`}
          >
            Shop
          </Link>
          <Link
            href={"/contact"}
            className={`${activeLink == "/contact" && "text-[#FB2E86]"}`}
          >
            {" "}
            Contact
          </Link>
        </nav>

      

        <div className="w-[300px] h-[40px] lg:flex hidden  bg-red-300 border border-gray-250 ">
          <input type="text" className="h-full w-full" />
          <span className="w-[51px]   h-auto bg-[#FB2E86] text-white flex justify-center items-center">
            <IoSearch className="h-[20px] w-[20px]" />
          </span>
        </div>

   <div className="lg:hidden flex gap-5">
        <span className="w-[30px]    h-[30px] text-[#FB2E86] flex justify-center items-center">
          <IoSearch className="h-[20px] w-[20px]" />
        </span> 
         <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline"  ><SlMenu className="text-[#FB2E86]"/></Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle></SheetTitle>
             
            </SheetHeader>
            <nav
              className={`flex flex-col  gap-6 text-[#0D0E43]  text-[16px] mt-24  items-center ${lato.className}`}
            >
              <Link
                href={"/"}
                className={`flex items-center  ${
                  activeLink == "/" && "text-[#FB2E86]"
                }`}
              >
                Home 
              </Link>
              <Link
                href={"/pages"}
                className={`${activeLink == "/pages" && "text-[#FB2E86]"}`}
              >
                Pages
              </Link>
              <Link
                href={"/products"}
                className={`${activeLink == "/products" && "text-[#FB2E86]"}`}
              >
                {" "}
                Products
              </Link>
              <Link
                href={"/blog"}
                className={`${activeLink == "/blog" && "text-[#FB2E86]"}`}
              >
                Blog
              </Link>
              <Link
                href={"/shop"}
                className={`${activeLink == "/shop" && "text-[#FB2E86]"}`}
              >
                Shop
              </Link>
              <Link
                href={"/contact"}
                className={`${activeLink == "/contact" && "text-[#FB2E86]"}`}
              >
                {" "}
                Contact
              </Link>
            </nav>
          
          </SheetContent>
        </Sheet>
        </div>
      </header>
    </main>
  );
}

export default SecondHeader;

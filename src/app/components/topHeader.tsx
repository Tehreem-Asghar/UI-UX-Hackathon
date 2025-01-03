import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { CgShoppingCart } from "react-icons/cg";
import Link from "next/link";


function TopHeader() {
  return (
    <main className="max-w-[1920px] mx-auto align-middle w-full    h-auto md:h-[44px] bg-[#7E33E0] text-white  flex  sm:flex-row flex-col justify-center items-center  sm:justify-evenly text-[10px] md:text-[12px] lg:text-[16px]   p-2  md:p-0">
      <div className="flex items-center sm:gap-4  md:gap-7">
        <div className="flex items-center gap-2">
          <MdOutlineEmail />
          <p>mhhasanul@gmail.com </p>
        </div>
        <div className="flex  items-center  gap-2">
          <MdOutlinePhoneInTalk />
          <p>(12345)67890</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <p className="flex items-center gap-1">
          English
          <FaAngleDown />
        </p>
        <p className="flex items-center gap-1">
          USD
          <FaAngleDown />
        </p>
        <p >
          <Link href={'/login'} className="flex items-center gap-1"> Login
          <FiUser />
          </Link>
        </p>
        <p className="flex items-center gap-1">
        Wishlist
        <FaRegHeart />
        </p>
       <Link href={'/cart'}> <CgShoppingCart className="lg:h-[24px] lg:w-[24px]  md:h-[18px] md:w-[18px]  h-[18px] w-[18px] ml-2"/> </Link>


      </div>
    </main>
  );
}

export default TopHeader;

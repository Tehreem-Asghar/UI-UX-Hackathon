
import React from "react";
import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import { FaPenFancy, FaRegCalendarAlt } from "react-icons/fa";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const blog = [
  "/images/blogs/blog1.png",
  "/images/blogs/blog2.png",
  "/images/blogs/blog3.png",
];

function Blogs() {
  return (
    <main className="lg:mx-[100px] mx-[20px] overflow-hidden mb-20">
      <h1
        className={`${josefinSans.className} font-bold text-[32px] text-center`}
      >
        Latest Blog
      </h1>

      <div className="w-full gap-5 grid justify-center sm:grid-cols-2 lg:grid-cols-3 mt-10">
        {blog.map((image, index) => {
          return (
            <div
              key={index}
              className="w-full max-w-[370px] h-auto shadow-md rounded-md overflow-hidden"
            >
              {/* Blog Image */}
              <div className="w-full h-[240px]">
                <Image
                  src={image}
                  height={240}
                  width={370}
                  alt="blogPick"
                  className="h-full w-full object-cover"
                />
              </div>
              
              {/* Blog Content */}
              <div className="p-5">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <FaPenFancy className="text-[#FB2E86]" />
                    <p>Surfauxion</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaRegCalendarAlt className="text-[#FB2E86]" />
                    <p className="text-[12px]">21 August, 2020</p>
                  </div>
                </div>
                <h3 className="text-[#FB2E86] text-[20px] font-bold mt-2">
                  Top essential trends in 2021
                </h3>
                <p className="text-[#72718F] mt-4 text-[14px] leading-6">
                  More off this less hello samlande lied much over tightly
                  circa horse taped mightly.
                </p>
                <p className="text-[16px] mt-4 text-[#FB2E86] underline underline-offset-4">
                  Read More
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Blogs;


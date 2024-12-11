import React from "react";
import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import { FaSearchPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import Link from "next/link";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const latestProduct = [  
   
  {
    id: 5,
    name: "Comfort Handy Craft",
    price: "42.00",
    image: "/images/latestProducts/comfortHandy1.png",
  },
  {
    id: 6,
    name: "Comfort Handy Craft",
    price: "42.00",
    image: "/images/latestProducts/comfortHandy2.png",
  },
  {
    id: 7,
    name: "Comfort Handy Craft",
    price: "42.00",
    image: "/images/latestProducts/comfortHandy3.png",
  },
  {
    id: 8,
    name: "Comfort Handy Craft",
    price: "42.00",
    image: "/images/latestProducts/comfortHandy4.png",
  },
  {
    id: 9,
    name: "Comfort Handy Craft",
    price: "42.00",
    image: "/images/latestProducts/comfortHandy5.png",
  },
  {
    id: 7,
    name: "Comfort Handy Craft",
    price: "42.00",
    image: "/images/latestProducts/comfortHandy6.png",
  },

]

function LatestProduct() {
  return (
    <main className="overflow-hidden">
      <h1
        className={`sm:text-[42px]  text-[35px] mt-16 mb-3 font-bold text-[#1A0B5B] ${josefinSans.className} text-center`}
      >
        Leatest Products{" "}
      </h1>
      <div className="text-[#151875] flex justify-center text-[12px] sm:text-[18px]  items-center gap-2 sm:gap-4 md:gap-10">
        <p className="text-[#FB4997] underline underline-offset-3">
          New Arrival
        </p>
        <p>Best Seller </p>
        <p>Featured</p>
        <p>Special Offer</p>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  justify-center gap-4  px-4 lg:px-0 ">
        {latestProduct.map((product) => {
          return (
            <div
              key={product.id}
              className="h-auto  w-full group  shadow-md  mt-12 rounded-md"
            >
              <div className="h-[270px]  w-[100%]    relative  flex  gap-5 flex-col justify-center items-center bg-[#F7F7F7]">
                <Image
                  src={product.image}
                  width={216}
                  height={151}
                  alt="product-image"
                  className="h-[216px] w-[151]"
                />
                <div className="group-hover:flex    flex-col items-center gap-4 absolute hidden bottom-2 left-2">
                 <Link  href={`/${product.id}`}>  <LuShoppingCart className="text-[#00009D]  text-[20px] " /> </Link>
                  <FaRegHeart className="text-[#1DB4E7]  " />
                  <FaSearchPlus className="text-[#1DB4E7]" />
                </div>

                <div>
                  <Image
                    src={"/images/latestProducts/sale.png"}
                    height={57}
                    width={85}
                    alt="sale"
                    className="absolute top-1 left-1  hidden group-hover:flex"
                  />
                </div>
              </div>
              
              <div className="flex  w-[100%]  justify-between items-center  my-3  px-6    " >
              <Link href={`/${product.id}`}>  <p className="text-[#151875] text-[12px] sm:text-[15px]">{product.name}</p> </Link>
                <div className="flex gap-3 text-[12px] sm:text[15px]">
                  <p className="text-[#151875]">${product.price}</p>
                  <p className="text-[#FB2448]">$65.00</p>
                </div>
              </div>
              
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default LatestProduct;

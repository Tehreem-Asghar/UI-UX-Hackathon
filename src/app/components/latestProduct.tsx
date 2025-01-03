"use client"
import React, { useContext, useEffect, useState } from "react";
import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import { FaSearchPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import Link from "next/link";
// import { latestProduct } from "../../../data";
import { client } from "@/sanity/lib/client";
import { searchContext } from "../conntext";
import { Skeleton } from "@/components/ui/skeleton";
const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});



interface Product {
  newPrice: number;
  title: string;
  oldPrice: number;
  description: string;
  image: string;
  _id: string;
}

 function LatestProduct() {

// const latestProduct = await getData()

 
  const [latestProduct, setlatestProduct] = useState<Product[]>([]);
const searchQuery = useContext(searchContext)

// console.log("latestProduct", latestProduct)

 // Filter products based on search query
 const filteredProducts = latestProduct.filter((product) =>
  product.title.toLowerCase().includes(searchQuery.search.toLowerCase())
);

useEffect(()=>{

  async function getData() {
    const res = await client.fetch(`*[_type == "latestProducts"]{
       _id,
    title,
      newPrice,
      oldPrice,
      description,
      "image" : image.asset -> url
  }`); 
  setlatestProduct(res);

  }
  
getData()
},[ filteredProducts])



  return (
    <main className="overflow-hidden">
     {filteredProducts.length !== 0 ? 
     <>
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
     {filteredProducts.map((product : any) => {
       return (
         <div
           key={product._id}
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
              <Link  href={`/${product._id}`}>  <LuShoppingCart className="text-[#00009D]  text-[20px] " /> </Link>
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
           <Link href={`/${product._id}`}>  <p className="text-[#151875] text-[12px] sm:text-[15px]">{product.title}</p> </Link>
             <div className="flex gap-3 text-[12px] sm:text[15px]">
               <p className="text-[#151875]">${product.newPrice}</p>
               <p className="text-[#FB2448] line-through">${product.oldPrice}.00</p>
             </div>
           </div>
           
         </div>
       );
     })}
   </section>
   </>

     :
     <>
        <Skeleton className="h-4 w-[250px]  mt-16 mb-8 bg-gray-400 " />
      <div className="text-[#151875] flex justify-center text-[12px] sm:text-[18px]  items-center gap-2 sm:gap-4 md:gap-10">
      <Skeleton className="h-4 w-[250px]  mt-16 mb-8 bg-gray-400 " />
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  justify-center gap-4  px-4 lg:px-0 ">
        {Array.from({length : 6}).map((product : any , index) => {
          return (
            <div
              key={index}
              className="h-auto  w-full group  shadow-md  mt-12 rounded-md"
            >
              <div className="h-[270px]  w-[100%]    relative  flex  gap-5 flex-col justify-center items-center bg-gray-300">
              
                      <Skeleton className="h-[216px] w-[151] mt-16 mb-8 bg-gray-400 " />
              
              </div>
              
              <div className="flex  w-[100%]  justify-between items-center  my-3  px-6    " >
              <Skeleton className="h-4 w-[250px]  mt-16 mb-8 bg-gray-400 " />
                              <div className="flex gap-3 text-[12px] sm:text[15px]">
                              <Skeleton className="h-4 w-[150px]  mt-16 mb-8 bg-gray-400 " />
                              <Skeleton className="h-4 w-[150px]  mt-16 mb-8 bg-gray-400 " />
                </div>
              </div>
              
            </div>
          );
        })}
      </section>
     
     </>
     
     
     }

      
    </main>
  );
}

export default LatestProduct;

"use client"
import React, { useEffect, useState } from "react";
import { Josefin_Sans } from "next/font/google";
import { PiCirclesFourFill } from "react-icons/pi";
import { TfiMenuAlt } from "react-icons/tfi";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaSearchPlus } from "react-icons/fa";
import { client } from "@/sanity/lib/client";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";


const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});








const shop = [
  {
    name: "Accumsan tincidunt",
    image: "/shop/shop1.png",
  },
  {
    name: "In nulla",
    image: "/shop/shop2.png",
  },
  {
    name: "Vel sem",
    image: "/shop/shop3.png",
  },
  {
    name: "Porttitor cum",
    image: "/shop/shop4.png",
  },
  {
    name: "Nunc in",
    image: "/shop/shop5.png",
  },
  {
    name: "Vitae facilisis",
    image: "/shop/shop6.png",
  },
  {
    name: "Curabitur lectus",
    image: "/shop/shop7.png",
  },
];


interface Product {
  newPrice: number;
  title: string;
  oldPrice: number;
  description: string;
  image: string;
  _id: string;
}


 function Shop() {

   const [products, setProducts] = useState<Product[]>([]);
    const [search, setSearch] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setSearch(e.target.value);
          
        };


 // Filter products based on search query
 const filteredProducts = products.filter((product) =>
  product.title.toLowerCase().includes( search.toLowerCase())
);

  useEffect(() => {
    async function getData() {
      const res = await client.fetch(`*[_type == "shop"]{
        _id,
        title,
        newPrice,
        oldPrice,
        description,
        "image" : image.asset -> url
        
    }`);
      setProducts(res);
    }

    getData();

  }, []);



  return (
    <main className="max-w-[1920px] mx-auto">
      <section className="h-[286px] w-full bg-[#F6F5FF] grid items-center ">
        <div className="sm:mx-[170px] mx-[30px] overflow-hidden text-center sm:text-left">
          <h2
            className={`${josefinSans.className} text-[25px] sm:text-[36px] text-[#101750] font-bold`}
          >
            Shop Grid Default
          </h2>
          <span className="flex sm:justify-start justify-center font-medium">
            <p>Home.Pages</p>
            <p className="text-[#FB2E86]">.Shop Grid Default</p>
          </span>
        </div>
      </section>

      <section className="lg:mx-[170px] mx-[20px] sm:mx-[30px] screen4:mx-[25px] my-24 flex flex-col justify-center items-center ">
        <div className="flex justify-between items-center w-full  gap-8">
          <div>
            <h2
              className={`${josefinSans.className}  text-[11px] sm:text-[14px] lg:text-[18px]  text-[#101750] font-bold`}
            >
              Ecommerce Acceories & Fashion item
            </h2>
            <p className="text-[#8A8FB9] lg:text-[16px]  text-[11px] sm:text-[13px] ">
              {" "}
              About 9,620 results (0.62 seconds)
            </p>
          </div>
          {/* ------- */}
          <div className="flex items-center gap-2">
            <div className="lg:flex items-center gap-2   hidden ">
              <p className="text-[#3F509E] text-[14px]">Per Page:</p>
              <input
                type="text"
                className="h-[25px] w-[55px] border border-[#E7E6EF]"
              />
            </div>

            <div className="lg:flex  hidden items-center gap-2">
              <p className="text-[#3F509E] text-[14px]">Sort By:</p>
              <select className="h-[30px] w-auto text-[#3F509E] p-1 border border-[#E7E6EF]">
                <option value="volvo">Best match</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <p className="text-[#3F509E] hidden sm:block">View:</p>
              <PiCirclesFourFill className="text-[#3F509E]" />
              <TfiMenuAlt className="text-[#3F509E]" />
            </div>

            <input
              type="text"
              className="h-[25px] w-[100px] border border-[#E7E6EF]  sm:block  hidden"
              value={search}
                onChange={handleSearchChange}
            />
          </div>
        </div>
      </section>

      <section className="lg:mx-[170px] mx-[20px] sm:mx-[30px] screen4:mx-[25px] my-24 flex flex-col">
        <div>

        {filteredProducts.length !== 0 ? <>   {filteredProducts.map((shopItem : Product)  => (
            <div className="flex  sm:flex-row  flex-col gap-5 w-full" key={shopItem.title}>
              <div className="h-[217px] w-full sm:w-[30%]">
                <Image
                  src={shopItem.image}
                  alt={shopItem.title}
                  height={217}
                  width={313}
                  // className="h-[217px] w-full sm:w-[313px]"
                  className="h-[217px] w-[100%]"

                />
              </div>
              <div className="grid items-center w-full sm:w-[70%]  py-9">
                <div className=" grid  gap-4  ">
                  <div className="w-auto flex items-center  gap-4">
                    <h1 className="text-[#111C85] text-[18px] font-bold">
                      {shopItem.title}
                    </h1>
                    <div className="flex gap-1 justify-center items-center">
                      <div className="h-[10px] w-[10px] rounded-full bg-[#DE9034]"></div>
                      <div className="h-[10px] w-[10px] rounded-full bg-[#EC42A2]"></div>
                      <div className="h-[10px] w-[10px] rounded-full bg-[#8568FF]"></div>
                    </div>
                  </div>

                  <div className=" flex    items-center gap-6">
                    <div className="flex gap-2">
                      <p className="text-[#111C85]">${shopItem.newPrice}</p>
                      <p className="line-through text-[#EC42A2] ">${shopItem.oldPrice}</p>
                    </div>

                    <div className="flex gap-1">
                      <FaStar className="text-[#FFC416]" />
                      <FaStar className="text-[#FFC416]" />
                      <FaStar className="text-[#FFC416]" />
                      <FaStar className="text-[#FFC416]" />
                      <FaStar className="text-[#B2B2B2]" />
                    </div>
                  </div>
                  <p  className="text-[#9295AA]">{shopItem.description}</p>
                
                
                
                  <div className=" flex gap-4 items-center  text-[#151875]  "> 
                              <Link href={`/${shopItem._id}`} ><div className="h-[25px] w-[25px]"> <CiShoppingCart/> </div></Link>
                              <div  className="h-[25px] w-[25px] "><CiHeart/> </div>
                              <div  className="h-[25px] w-[25px] "> <FaSearchPlus/></div>
                              
                           </div>

                </div>
              </div>
            </div>
          ))} </> : <>
          
          
          
         
            <div className="flex  sm:flex-row  flex-col gap-5 w-full" >
              <div className="h-[217px] w-full sm:w-[30%]">
              <Skeleton className="h-[217px] w-[100%] " />
              </div>
              <div className="grid items-center w-full sm:w-[70%]  py-9">
                <div className=" grid  gap-4  ">
                   <Skeleton  className="h-4  w-full" />
                   <Skeleton  className="h-4  w-full" />
                   <Skeleton  className="h-4  w-full" />
                   <Skeleton  className="h-4  w-full" />

                </div>
              </div>
            </div>
            <div className="flex  sm:flex-row  flex-col gap-5 w-full mt-3" >
              <div className="h-[217px] w-full sm:w-[30%]">
              <Skeleton className="h-[217px] w-[100%] " />
              </div>
              <div className="grid items-center w-full sm:w-[70%]  py-9">
                <div className=" grid  gap-4  ">
                   <Skeleton  className="h-4  w-full" />
                   <Skeleton  className="h-4  w-full" />
                   <Skeleton  className="h-4  w-full" />
                   <Skeleton  className="h-4  w-full" />

                </div>
              </div>
            </div>
         
          
          
          </>}
        
        </div>
      </section>
      <div className="h-[93px] sm:mx-[170px] mx-[30px]  mb-14">
               <Image src={'/images/tags/tags.png'}  height={93} width={400} alt="tag" className="h-[93px] w-full"/>
          </div>
    </main>
  );
}

export default Shop;






// import React from 'react'

// function page() {
//   return (
//     <div>
//       Hello world
//     </div>
//   )
// }

// export default page


import Slider from "./components/slider";
import FeatureProdut from "./components/feature-produt";
import LatestProduct from "./components/latestProduct";
import ShopexOffer from "./components/shopexOffer";
import Image from "next/image";
import Trending from "./components/trending";
import DiscountItem from "./components/discountItem";
import TopCategary from "./components/topcategary";
import Blogs from "./components/blogs";
import Link from "next/link";








// async function  Subscribe() {
//     const res = await client.fetch(`*[_type == "subscribeLatestUpdate"]{
//       _id,
//      subscribtext,
//      buttontext,
//      buttonUrl,
//   }`); 
//     return res

// }



// async function uniqueFeatures() {
//   const res = await client.fetch(`*[_type == "product" && "uniqueFeatures" in tags]{
//   _id,
//   name,
//   "image" : image.asset -> url,
//   price,
//   description,
//   discountPercentage,
//   isFeaturedProduct,
//   stockLevel,
//   category,
//   tags
// }
// `); 
//   return res

// }



export default async function Home() {

  // const uniqueFeature = await uniqueFeatures()
  // const subscribe  = await Subscribe()
  return (
    <main className="max-w-[1920px] mx-auto ">
      <Slider />
      <section className="lg:mx-[100px] mx[30px] overflow-hidden">
        <FeatureProdut />  
        <LatestProduct/>
        <ShopexOffer />
      </section>

     
      <section className="lg:mx-[100px] mx[30px] overflow-hidden">
        <Trending/>
        <DiscountItem />
      </section>
      <TopCategary />



      <div className="relative">
        <Image
          src={"/images/banner2.png"}
          height={300}
          width={500}
          alt="banner"
          className="w-full relative my-10 h-[300px]"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-4">
          <p className="font-bold text-[#151875] text-[24px] text-center sm:text-[32px]">
            Get Latest Update By Subscribe
            <br />
            Our Newsletter
          </p>
          <Link href={'/shop'}>
          <button className="p-7 h-10 w-[150px] flex justify-center items-center text-white bg-[#FB2E86]">
            Shop Now
          </button>
          </Link>
        </div>
      </div>










      <div className="h-[93px] sm:mx-[170px] mx-[30px]  mb-4">
        <Image
          src={"/images/tags/tags.png"}
          height={93}
          width={400}
          alt="tag"
          className="h-[93px] w-full"
        />
      </div>
      <Blogs />
    </main>
  );
}
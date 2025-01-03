import React from "react";
import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const revalidate = 60


interface Offer{
  _id : string
  title : string
   offertitle : string
    description : string
    image : string
}

 async function getData() {
    const res = await client.fetch(`*[_type == "shopexOffer"]{
       _id,
    title,
     offertitle,
      description,
      "image" : image.asset -> url
  }`); 
      return res
    }

async function about() {
  const res = await client.fetch(
    `*[_type == "about"] {
  title,
  about,
  buttontext,
  buttonLink,
  "image" : image.asset->url
  
}`);

  return res;
}





async function  Client() {
  const res = await client.fetch(
    `*[_type == "clientSayes"] {
  heading1,
  heading2,
  description,
  "images": images[].asset->url
}
`);

  return res;
}




async function About() {
  const aboutContent =await about()
  const data : Offer[]= await getData()
  const client = await Client();

  return (

     

    <main className="max-w-[1920px] mx-auto">
      <section className="h-[286px] w-full bg-[#F6F5FF] grid items-center ">
        <div className="sm:mx-[170px] mx-[30px] overflow-hidden text-center sm:text-left">
          <h2
            className={`${josefinSans.className} text-[25px] sm:text-[36px] text-[#101750] font-bold`}
          >
            About Us
          </h2>
          <span className="flex sm:justify-start justify-center font-medium">
            <p>Home.Pages</p>
            <p className="text-[#FB2E86]">.About Us</p>
          </span>
        </div>
      </section>

      <section className="lg:mx-[170px] mx-[30px] my-24 flex justify-center items-center ">
        <div className="flex md:flex-row flex-col items-center gap-8 w-full">
          <div className="md:w-[50%] w-full">
            <Image
              src={aboutContent[0].image}
              height={400}
              width={555}
              alt="about"
              className="sm:h-[400px] md:h-[450px]  h-[340px] w-full"
            />
          </div>
          <div className="md:w-[50%] w-full grid gap-2 items-center">
            <h2
              className={`${josefinSans.className}  text-[#151875] md:text-[25px] text-[20px] font-bold`}
            >
              {aboutContent[0].title}
            </h2>
            <p className="text-[#8A8FB9]">
             {aboutContent[0].about}
            </p>

            <Button
              asChild
              className="bg-[#FB2E86] hover:bg-[#FB2E86] text-white h-[44px] w-[145px] mt-10 sm:mt-4"
            >
              <Link href={`${aboutContent[0].buttonLink}`}>{aboutContent[0].buttontext}</Link>
            </Button>
          </div>
        </div>
      </section>

      <h1
        className={`sm:text-[42px] text-[25px]  font-bold ${josefinSans.className} text-center my-12`}
      >
        Our Features
      </h1>
      <section className="lg:mx-[170px] mx-[30px]  grid grid-cols-1 px-4 lg:px-0 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  justify-center gap-4  ">
        {data.map((data : Offer) => {
          return (
            <div
              key={data._id}
              className="h-auto hover:border-b-orange-500 hover:border-b-2   w-full   flex justify-center items-center flex-col shadow-md shadow-[#EEEFFB]  bg-[#ffffff] gap-3"
            >
              <Image
                src={data.image}
                width={65}
                height={65}
                alt="product-image"
                className="h-[65px] w-[65px] mt-4"
              />

              <h1 className="text-[#151875] text-center font-bold">{data.title}</h1>
              <p className="px-4 text-center text-[#8A8FB9] mb-4">
                {data.description}
              </p>
            </div>
          );
        })}
      </section>

      <section className="lg:mx-[170px] mx-[30px] my-24 flex justify-center items-center ">
            <div className="text-center md:w-[689px]">
                 <h1    className={`sm:text-[42px] text-[25px]  font-bold ${josefinSans.className} text-center my-12`}>Our Client Say!</h1>
                <div className="flex justify-center items-center gap-3">
                    <Image src={client[0].images[0]} height={55} width={55} className="h-[55px] w-[55px]" alt="client"/>
                    <Image src={client[0].images[1]} height={55} width={55} className="h-[55px] w-[55px] " alt="client"/>
                    <Image src={client[0].images[2]} height={55} width={55} className="h-[55px] w-[55px]" alt="client"/>

                </div>
                <h2 className="text-[22px] font-semibold text-[#151875] mt-3"> {client[0].heading1}</h2>
                <p className="text-[#8A8FB9] text-[10px] mt-1"> {client[0].heading2}</p>

                <p className="text-center text-[#8A8FB9] mt-4">{client[0].description}</p>
              
            </div>
      </section>

    </main>
  );
}


export default  About
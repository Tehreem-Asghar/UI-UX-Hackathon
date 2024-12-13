"use client";
import React, { useState } from "react";
import { Josefin_Sans } from "next/font/google";
import { featureProducts , latestProduct ,trending ,topCategary ,products } from "../../../data";
import Image from "next/image";
import { FaInstagramSquare, FaStar } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa6";
import TopCategary from "../components/topcategary";
// import { latestProduct } from "../components/latestProduct";
// import { trending } from "../components/trending";
// import { topCategary } from "../components/topcategary";
// import { products } from "../products/page";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface Params {
  id: string;
}

interface PT {
  id: number;
  name: string;
  price: number;
  image: string;
}


interface CartItem {
  selectedPlant: PT;
  quantity: number;
}


function DettailPage({ params }: { params: Params }) {
  const { id } = params;
  const [quantity, setQuantity] = useState<number>(1);
  // const [addcard, setAddcart] = useState<boolean>(false);

  const allProduct : PT[]= featureProducts.concat(latestProduct , trending , topCategary , products)


  const product  = allProduct.find((item) => String(item.id) === id);
  console.log(product);
  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-semibold">
        product Not Found
      </div>
    );
  }





  const addToCard :()=> any = () => {
    if (product) {
      // Check if 'cart' already exists in localStorage
      const cartItems = localStorage.getItem("cart");

      // If cart exists, parse it, otherwise initialize as an empty array
      const cart: CartItem[] = cartItems ? JSON.parse(cartItems) : [];

      // Check if the selected product is already in the cart
      const existingItem: CartItem | undefined = cart.find(
        (item: CartItem) => item.selectedPlant?.id === product.id
      );

      if (existingItem) {
        // Update the quantity if the plant is already in the cart
        existingItem.quantity += quantity;
      } else {
        // Add the new product with its quantity
        const data: CartItem = {
          selectedPlant: product,
          quantity: quantity,
        };
        cart.push(data);
      }

      // Save the updated cart back to localStorage
      localStorage.setItem("cart", JSON.stringify(cart));
      // setAddcart(true);
    }
  };


  return (
    <main className="max-w-[1920px] mx-auto">
      <section className="h-[286px]  w-full  bg-[#F6F5FF]  grid items-center">
        <div className="sm:mx-[170px] mx-[30px] overflow-hidden text-center sm:text-left">
          <h2
            className={`${josefinSans.className} text-[25px]  sm:text-[36px] text-[#101750] font-bold`}
          >
            Product Details
          </h2>
          <span className="flex sm:justify-start justify-center font-medium">
            <p>Home.Pages</p>
            <p className="text-[#FB2E86]">.Product Details</p>
          </span>
        </div>
      </section>
      <section className=" lg:mx-[170px]  mx[30px] ">
        <div className="  shadow-[#c3c3c5] shadow-2xl h-auto  w-full my-24 sm:my-36 flex  sm:flex-row  flex-col">
          <div className="sm:w-[50%] w-full p-3 flex gap-3">
            <div className="w-[151px]  md:grid gap-2 hidden  ">
              <div className="w-full    h-[155px] bg-[#C4C4C4] flex justify-center items-center">
                <Image
                  src={product.image}
                  height={155}
                  width={151}
                  alt={product.name}
                />
              </div>
              <div className="w-full h-[155px] bg-[#C4C4C4] flex justify-center items-center">
                <Image
                  src={product.image}
                  height={155}
                  width={151}
                  alt={product.name}
                />
              </div>
              <div className="w-full h-[155px] bg-[#C4C4C4] flex justify-center items-center">
                <Image
                  src={product.image}
                  height={155}
                  width={151}
                  alt={product.name}
                />
              </div>
            </div>
            <div className="sm:w-[375px] w-full   bg-[#C4C4C4]   flex justify-center items-center">
              <Image
                src={product.image}
                height={487}
                width={375}
                alt={product.name}
                className=" h-[400px] w-full sm:w-[300px]"
              />
            </div>
          </div>
          <div className="sm:w-[50%]  w-full p-8 ">
            <section className="grid gap-5">
              <h1 className="text-[#0D134E] text-[25px] sm:text-[32px] font-bold">
                {" "}
                {product.name}
              </h1>
              <span className="flex  gap-3 items-center">
                {" "}
                <span className="flex  gap-1 text-[#FFC416]">
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                </span>{" "}
                (22)
              </span>
              <span className=" flex items-center gap-5 font-medium">
                <p>${product.price}</p>{" "}
                <p className="line-through  text-[#FB2E86]">${product.price}</p>{" "}
              </span>
              <h2 className="text-[#0D134E] font-semibold">Color</h2>
              <p className="text-[#A9ACC6]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                tellus porttitor purus, et volutpat sit.
              </p>
              <span className="flex gap-4 items-center  ml-8 text-[#151875]">
                {" "}
                <Button  onClick={()=> addToCard()} className="bg-inherit hover:text-white hover:bg-[#FB2E86] text-[#151875]">
                  Add To cart{" "}
                </Button>{" "}
                <IoMdHeartEmpty className="text-[28px] hover:text-red-600" />{" "}
              </span>
              <h1 className="text-[#0D134E] font-semibold">Categories:</h1>
              <h1 className="text-[#0D134E] font-semibold">Tags</h1>
              <span className="flex items-center  gap-4">
                <h1 className="text-[#0D134E] font-semibold">Tags</h1>{" "}
                <span className="flex items-center gap-2">
                  {" "}
                  <FaFacebook className="text-[#151875] " />
                  <FaInstagramSquare className="text-[#FB2E86]" />
                  <AiFillTwitterCircle className="text-[#151875]" />{" "}
                </span>{" "}
              </span>
            </section>

      
          </div>
        </div>
      </section>

      <section className="h-auto  w-full  bg-[#F6F5FF] mb-24 sm:mb-36 ">
        <div className="sm:mx-[170px] mx-[30px] py-20 overflow-hidden ">
           <div className="flex gap-2 sm:gap-3 lg:gap-7 text-[#151875]  mb-7 text-[11px] sm:text-[14px] lg::text-[24px] font-semibold ">
             <p className="underline underline-offset-4">Description</p>
             <p>Additional Info </p>
             <p>Reviews</p>
             <p>Video</p>
           </div>
           
           <div className="grid gap-4">
                <h1 className=" text-[#151875]  font-semibold text-[22px]">Varius tempor.</h1>
                <p  className="text-[#A9ACC6]">Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                <h1 className=" text-[#151875]  font-semibold text-[22px]">More details</h1>

                <div className="grid gap-3">
                 <div className="flex gap-2 items-center">
                 <FaArrowRight />
                   <p className="text-[#A9ACC6] text-[13px]"> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                 </div>
                 <div className="flex gap-2 items-center">
                 <FaArrowRight />
                   <p className="text-[#A9ACC6] text-[13px]"> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                 </div>
                 <div className="flex gap-2 items-center">
                 <FaArrowRight />
                   <p className="text-[#A9ACC6] text-[13px]"> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                 </div>
                 <div className="flex gap-2 items-center">
                 <FaArrowRight />
                   <p className="text-[#A9ACC6] text-[13px]"> Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                 </div>
                </div>
          
          </div> 
          </div>
      </section>
       <TopCategary />
          <div className="h-[93px] sm:mx-[170px] mx-[30px]  mb-4">
               <Image src={'/images/tags/tags.png'}  height={93} width={400} alt="tag" className="h-[93px] w-full"/>
          </div>
    </main>
  );
}

export default DettailPage;

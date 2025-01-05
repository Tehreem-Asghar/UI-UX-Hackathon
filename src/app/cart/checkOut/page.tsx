'use client'
import React, { useEffect, useState } from "react";
import { Josefin_Sans } from "next/font/google";
import { IoCheckbox } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});


interface PT {
  _id: string;
 title: string;
 newPrice: number;
  image: string;
  stock? : number
}

interface CartItem {
  selectedPlant: PT;
  quantity: number;
}



function OrderDone() {

  // State to store the cart items
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  

  // Get data from localStorage and save it in the state
  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem("cart");
    if (dataFromLocalStorage) {
      setCartItems(JSON.parse(dataFromLocalStorage));
    } else {
      setCartItems([]);
    }
  }, []);


  const calculateSubtotal: () => number = () => {
    return cartItems.reduce(
      (total, item) =>
        total + Number(item.selectedPlant.newPrice) * Number(item.quantity),
      0
    );
  };

  const subTotal: number = calculateSubtotal();

  const SHIPPING_COST = 200; // Example flat shipping cost
  const total = calculateSubtotal() + SHIPPING_COST;



  

const handleUpdate = async () => {
  try {
      const updatePromises = cartItems.map(async (item) => {
          if (item.selectedPlant.stock && item.quantity && item.selectedPlant._id) {
              // Ensure stock and quantity are numbers before updating
              await client.patch(item.selectedPlant._id).set({
                  stock: item.selectedPlant.stock - item.quantity
              }).commit();
          }
      });

      // Wait for all update operations to complete
      await Promise.all(updatePromises);

      // After updates, clear the local storage
      localStorage.clear();

      // Notify user that update was successful
      alert("Data updated successfully!");
      console.log("Stock has been updated successfully!");
  } catch (error) {
      console.error("Error updating stock:", error);
  }
};


  return (
    <main className="max-w-[1920px] mx-auto">
      <section className="h-[286px] w-full bg-[#F6F5FF] grid items-center">
        <div className="sm:mx-[170px] mx-[30px] overflow-hidden text-center sm:text-left">
          <h2
            className={`${josefinSans.className} text-[25px] sm:text-[36px] text-[#101750] font-bold`}
          >
            Shopping Cart
          </h2>
          <span className="flex sm:justify-start justify-center font-medium">
            <p>Home.Pages</p>
            <p className="text-[#FB2E86]">.shopping cart</p>
          </span>
        </div>
      </section>

      <section className="my-9 sm:mx-[170px] mx-[30px]">
        <div>
          <h2
            className={`${josefinSans.className} text-[24px]  text-[#101750] font-bold`}
          >
            Hekto Demo
          </h2>
          <p className="text-[#101750]  text-[12px]">
            Cart/ Information/ Shipping/ Payment
          </p>
        </div>

        <div className="flex gap-3 lg:flex-row flex-col  h-auto mt-3  mb-44">
          <div className="w-full bg-[#F8F8FD]  py-6  px-4">
            <div className="flex justify-between  md:flex-row  flex-col">
              <h1 className="text-[16px]  text-[#1D3178] font-bold">
                Contact Information
              </h1>
              <p className="text-[#C1C8E1] text-[14px]">
                Already have an account? Log in
              </p>
            </div>
            <div className="flex justify-between text-[#C1C8E1] mt-6  border-b-[2px]  border-b-[#d0ced4]">
              <input
                type="email"
                placeholder="Email or mobile phone number"
                className="w-full bg-inherit"
                required
              />
            </div>

            <div className="flex gap-2 mt-4">
              <IoCheckbox className="text-[#19D16F]" />
              <p className="text-[#8A91AB] text-[10px]">
                Keep me up to date on news and excluive offers
              </p>
            </div>

            <h1 className="text-[16px]  text-[#1D3178] font-bold  mt-32">
              Shipping address
            </h1>

            <div className="flex  flex-col md:flex-row md:gap-4  md:justify-evenly ">
              <div className="  text-[#C1C8E1] mt-10  border-b-[2px]  border-b-[#d0ced4] w-full">
                <input
                  type="text"
                  placeholder="First name (optional)"
                  className="w-full  bg-inherit"
                />
              </div>
              <div className="  text-[#C1C8E1] mt-10  border-b-[2px]  border-b-[#d0ced4] w-full">
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full  bg-inherit"
                  required
                />
              </div>
            </div>

            <div className=" text-[#C1C8E1] mt-10  border-b-[2px]  border-b-[#d0ced4]">
              <input
                type="text"
                placeholder="Address"
                className="w-full  bg-inherit"
                required
              />
            </div>

            <div className=" text-[#C1C8E1] mt-10  border-b-[2px]  border-b-[#d0ced4]">
              <input
                type="text"
                placeholder="Appaetnentment,suit,e.t.c (optinal)"
                className="w-full  bg-inherit"
              />
            </div>

            <div className=" text-[#C1C8E1] mt-10  border-b-[2px]  border-b-[#d0ced4]">
              <input
                type="text"
                placeholder="City"
                className="w-full  bg-inherit"
                required
              />
            </div>

            <div className="flex  flex-col md:flex-row md:gap-4  md:justify-evenly ">
              <div className="  text-[#C1C8E1] mt-10  border-b-[2px]  border-b-[#d0ced4] w-full">
                <input
                  type="text"
                  placeholder="Bangladesh"
                  className="w-full  bg-inherit"
                  required
                />
              </div>
              <div className="  text-[#C1C8E1] mt-10  border-b-[2px]  border-b-[#d0ced4] w-full">
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="w-full  bg-inherit"
                  required
                />
              </div>
            </div>
            <Button
              asChild
              className="h-[44px] w-[182px] rounded-sm text-white bg-[#FB2E86] hover:bg-[#FB2E86] mt-24"
            >
              <Link href="/">Continue Shipping</Link>
            </Button>
          </div>
        <div className="lg:w-[40%]  w-full">
               {cartItems.map((items)=>(
                <>
                  <div  key={items.selectedPlant._id} className="h-[102px] bg-[#E1E1E4] px-2 w-full flex justify-between shadow-md mb-4">
                   <div className="flex gap-2"> 
                    <Image src={items.selectedPlant.image} height={87} width={83} alt={items.selectedPlant.title} className="h-[84px] w-[80px] "/>
                       <div className="flex flex-col justify-center items-center">
                        <h2 className="text-[12px]">{items.selectedPlant.title}</h2>
                        <p className="text-[12px] text-[#A1A8C1]"> color:Brown</p>
                        <p className="text-[12px] text-[#A1A8C1]">size:Xl</p>
                       </div>
                   </div>
                   <div className="flex justify-center items-center text-[#15245E]">{  `$${items.quantity &&items.selectedPlant.newPrice &&(  items.quantity *items.selectedPlant.newPrice).toFixed(2)}`}</div>               </div>
                </>
              ))}

            
                {/* Cart Totals Section */}
                <div className="w-full">
                      <h2 className="my-5 text-center text-[#1D3178] font-bold">
                        Cart Totals
                      </h2>
                      <div className="h-auto  w-full p-7  bg-[#E8E6F1]">
                        <div className="flex justify-between text-[#1D3178]  border-[2px]  border-b-[#d0ced4]">
                          <h3>Subtotals:</h3>
                          <h3>${subTotal}</h3>
                        </div>
          
                        <div className="flex justify-between text-[#1D3178] mt-3  border-[2px]  border-b-[#d0ced4]">
                          <h3>Total:</h3>
                          <h3>${total}</h3>
                        </div>
          
                        <div className="flex gap-2 mt-4">
                          <IoCheckbox className="text-[#19D16F]" />
                          <p className="text-[#8A91AB] text-[10px]">
                            {" "}
                            Shipping & taxes calculated at checkout
                          </p>
                        </div>
          
                        <Button asChild  onClick={()=>  handleUpdate()} className="h-[40px] w-full bg-[#19D16F] mt-4 hover:bg-[#19D16F] text-white">
                           <Link href={'/cart/checkOut/orderDone'}>
                           Confirm Order
                           </Link>
                        </Button>



                      </div>
          </div>
        </div>
        </div>
      </section>
    </main>
  );
}

export default OrderDone;

import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { FaSearchPlus } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const featureProducts = [ 
  {id : 1 , name : "Cantilever chair" , price : '42.00', image: "/images/featureProducts/product1.png"},
  { id : 2 , name : "Cantilever chair" , price : '42.00' , image : "/images/featureProducts/product2.png"},
  {id : 3 , name : "Cantilever chair" , price : '42.00' ,image : "/images/featureProducts/product3.png"},
  {id : 4 , name : "Cantilever chair" , price : '42.00' , image : "/images/featureProducts/product4.png"},
]

  function FeatureProdut() {
  return (
    <main className="mx-4 lg:mx-0">
      <h1
        className={`sm:text-[42px]  text-[27px] mt-16 mb-8 font-bold text-[#151875] ${josefinSans.className} text-center`}
      >
        Featured Products{" "}
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  justify-center gap-4  ">
        {featureProducts.map((product) => {
          return (
            <div key={product.id} className="h-auto  w-full group  shadow-md ">
              <div className="h-[270px]  w-[100%]   lg:mx-0  relative  flex  gap-5 flex-col justify-center items-center bg-[#F6F7FB]">
                <Image
                  src={product.image}
                  width={216}
                  height={151}
                  alt="product-image"
                  className="h-[216px] w-[151]"
                />
                <div className="group-hover:flex items-center gap-4 absolute hidden top-2 left-2">
                 <Link  href={`/${product.id}`}> <LuShoppingCart className="text-[#00009D]  text-[20px] " /></Link>
                  <FaRegHeart className="text-[#1DB4E7]  " />
                  <FaSearchPlus className="text-[#1DB4E7]" />
                </div>
                <Button className="h-[29px] w-[94px] hidden  hover:bg-[#08D15F]  bg-[#08D15F] p-1 text-[12px] text-white group-hover:flex justify-center items-center">
                   <Link href={`/${product.id}`}>View Details</Link>
                </Button>
              </div>
              <div className="flex  w-[100%] flex-col justify-center items-center gap-3 mt-3   group-hover:bg-[#2F1AC4] ">
                <h3 className="text-[#FB2E86] group-hover:text-white text-[18px] font-bold">
                  {product.name}
                </h3>
                <div className="flex gap-2">
                  <div className="h-[4px] w-[14px] bg-[#05E6B7] rounded-md"></div>
                  <div className="h-[4px] w-[14px] bg-[#F701A8] rounded-md"></div>
                  <div className="h-[4px] w-[14px] bg-[#00009D] rounded-md"></div>
                </div>
                <p className="text-[#151875]  group-hover:text-white">
                  Code - Y523201
                </p>

                <p className="text-[#151875] group-hover:text-white pb-4">${product.price}</p>
              </div>
            </div>
          );
        })}

       
      </section>

      <div className="flex gap-2 my-[80px] justify-center items-center">
          <div className="h-[4px] w-[20px] bg-[#FB2E86] rounded-md"></div>
          <div className="h-[4px] w-[14px] bg-[#FEBAD7] rounded-md"></div>
          <div className="h-[4px] w-[14px] bg-[#FEBAD7] rounded-md"></div>
          <div className="h-[4px] w-[14px] bg-[#FEBAD7] rounded-md"></div>
        </div>
    </main>
  );
}

export default FeatureProdut;

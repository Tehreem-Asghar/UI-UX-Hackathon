import React from "react";
import { Josefin_Sans } from "next/font/google";
import { PiCirclesFourFill } from "react-icons/pi";
import { TfiMenuAlt } from "react-icons/tfi";
import Image from "next/image";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaSearchPlus } from "react-icons/fa";
import Link from "next/link";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});





export  const  products =[
    {
        id : 16 ,
        name : 'Vel elit euismod',
        price : '26.00 ',
        image : '/shop/product16.png' 
    },

    {
        id : 17 ,
        name : 'Ultricies condimentum imperdiet',
        price : '26.00 ',
        image : '/shop/product17.png' 
    },

    {
        id : 18 ,
        name : 'Vitae suspendisse sed',
        price : '26.00 ',
        image : '/shop/product18.png' 
    },

    {
        id : 19 ,
        name : 'Sed at fermentum',
        price : '26.00 ',
        image : '/shop/product19.png' 
    },

    {
        id : 20 ,
        name : 'Fusce pellentesque at',
        price : '26.00 ',
        image : '/shop/product20.png' 
    },

    {
        id : 21 ,
        name : 'Vestibulum magna laoreet',
        price : '26.00 ',
        image : '/shop/product21.png' 
    },

    {
        id : 22 ,
        name : 'Sollicitudin amet orci',
        price : '26.00 ',
        image : '/shop/product22.png' 
    },

    {
        id : 23 ,
        name : 'Ultrices mauris sit',
        price : '26.00 ',
        image : '/shop/product23.png' 
    },
    {
        id : 24 ,
        name : 'Pellentesque condimentum ac',
        price : '26.00 ',
        image : '/shop/product24.png' 
    },


    {
        id : 25 ,
        name : 'Cras scelerisque velit',
        price : '26.00 ',
        image : '/shop/product25.png' 
    },
    

    {
        id : 26 ,
        name : 'Lectus vulputate faucibus',
        price : '26.00 ',
        image : '/shop/product26.png' 
    },


    {
        id : 27 ,
        name : 'Purus risus, ut',
        price : '26.00 ',
        image : '/shop/product27.png' 
    },
]












export default function Shop() {
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
              <select className="h-[30px] w-auto text-[#3F509E] p-1 border border-[#E7E6EF]" >
                <option value="volvo">Best match</option>
                
              </select>
            </div>


            <div className="flex items-center gap-2">
              <p className="text-[#3F509E] hidden sm:block">View:</p>
              <PiCirclesFourFill  className="text-[#3F509E]"  />
              <TfiMenuAlt className="text-[#3F509E]" />

            </div>

                <input  type="text" className="h-[25px] w-[100px] border border-[#E7E6EF]  sm:block  hidden"/>
          </div>
        </div>



        <div className="my-5 w-full">
             <div  className="w-full grid  sm:grid-cols-3 md:grid-cols-4 gap-3 items-center ">
                {products.map((product)=> (
                    <div key={product.id} className="w-full h-auto group grid  my-2 ">   
                         <div className="h-[250px] w-full  relative bg-[#EBF4F3] flex justify-center items-center"> 
                         <Image src={product.image} height={280} width={270} className="h-[169px] w-[169px]" alt={product.name}/>
                        
                           <div className="group-hover:grid gap-2 hidden  text-[#151875]  absolute bottom-4  left-2"> 
                              <div className="h-[25px] w-[25px] bg-white flex justify-center items-center rounded-full"> <Link href={`/${product.id}`}><CiShoppingCart/></Link> </div>
                              <div  className="h-[25px] w-[25px] bg-white flex justify-center items-center rounded-full"> <FaSearchPlus/></div>
                              <div  className="h-[25px] w-[25px] bg-white flex justify-center items-center rounded-full"><CiHeart/> </div>
                           </div>
                         </div>


                         <div className="pt-3   h-auto"> 
                            <h1 className="text-[#151875] font-bold text-[16px] text-center">{product.name}</h1>
                            <div className="flex gap-2 justify-center items-center mt-1">
                                <div className="h-[10px] w-[10px] rounded-full  bg-[#DE9034]"></div>
                                <div   className="h-[10px] w-[10px]  rounded-full  bg-[#EC42A2]"></div>
                                <div   className="h-[10px] w-[10px]   rounded-full bg-[#8568FF]"></div>
                            </div>
                            <div className="flex gap-2 justify-center items-center mt-1"><p className="text-[#151875]">${product.price}</p>  <p className="line-through text-[#FB2E86]">$42.00</p> </div>
                         </div>
                       </div>
                ) )}
             </div>
      </div>


      <div className="h-[93px] sm:mx-[170px] mx-[30px]  mt-28 mb-4">
               <Image src={'/images/tags/tags.png'}  height={93} width={400} alt="tag" className="h-[93px] w-full"/>
          </div>

      </section>
    </main>
  );
}

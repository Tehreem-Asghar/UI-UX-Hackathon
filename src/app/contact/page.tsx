import React from 'react'
import Image from 'next/image';
// import { Josefin_Sans } from "next/font/google";


// const josefinSans = Josefin_Sans({
//     subsets: ["latin"],
//     weight: ["400", "700"],
//   });

export default function Contact() {
  return (
    <main className="max-w-[1920px] mx-auto">
        <section className="h-[286px] w-full bg-[#F6F5FF] grid items-center ">
        <div className="sm:mx-[170px] mx-[30px] overflow-hidden text-center sm:text-left">
        
           <h2
            className={`
           
               text-[25px] sm:text-[36px] text-[#101750] font-bold`}
          >
          
            Contact Us
          </h2>
          <span className="flex sm:justify-start justify-center font-medium">
            <p>Home.Pages</p>
            <p className="text-[#FB2E86]">.Contact us</p>
          </span>
        </div>
      </section>




      
      <section className="lg:mx-[170px] mx-[30px] my-24 flex  justify-center items-center ">
        <div className=' flex gap-3 w-full justify-between lg:flex-row  flex-col'>
           <div className='lg:w-[50%] w-full h-auto   p-4'>
                       <h1 className='text-[#151875] font-bold sm:text-[25px] text-[18px] md:text-[30px]'>Information About us</h1>
                       <p  className='text-[#8A8FB9] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                   <div className='flex items-center gap-2 mt-5'>
                    <div className='h-[25px] w-[25px] rounded-full bg-[#5625DF]'></div>
                    <div className='h-[25px] w-[25px] rounded-full bg-[#FF27B7]'></div>
                    <div className='h-[25px] w-[25px] rounded-full bg-[#37DAF3]'></div>
                   </div>


                   <div className='mt-32'>
                   <h1 className='text-[#151875] font-bold sm:text-[25px] text-[18px] md:text-[30px]'>Get In Touch</h1>
                     <p className='text-[#8A8FB9] mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
                   </div>
                   <form className='mt-9 grid gap-7'>
                    <div className='flex gap-3 text-[#8A8FB9]'>
                        <input type='text' placeholder='Your Name*' className='border  border-[#A4B6C8B2] w-full  p-5 h-[45px]'/>
                        <input type="emailn" placeholder='Your E-mail'  className='border border-[#A4B6C8B2] w-full p-5 h-[45px]'/>
                    </div>
                    <div className=' text-[#8A8FB9]'>
                        <input type='text' placeholder='Subject*' className='border  border-[#A4B6C8B2] w-full  p-5 h-[45px]'/>
                
                    </div>


                    <div>
                        <textarea placeholder='Type Your Messege*'  className='h-[166px] text-[#8A8FB9] w-full p-5  border  border-[#A4B6C8B2]'/> 
                    </div>
                    <button type='submit' className='bg-[#FB2E86] text-white h-[44px] w-[150px]'> Send Mail</button>
                   </form>
           </div>
           <div className='lg:w-[50%] w-full h-auto p-4'> 
           <h1 className='text-[#151875] font-bold sm:text-[25px] text-[18px] md:text-[30px]'>Contact Way</h1>
              <div  className='mt-4 grid grid-cols-2 text-[12px] gap-7'>
                <div className='flex gap-3  items-center'> <div className='sm:h-[40px] sm:w-[40px]  hidden sm:block rounded-full bg-[#5726DF]'></div> <div className='text-[#8A8FB9]'> <p> Tel: 877-67-88-99</p> <p> E-Mail: shop@store.com</p></div></div>
                <div className='flex gap-3 items-center'> <div className='sm:h-[40px] sm:w-[40px] hidden sm:block   rounded-full bg-[#FB2E86]'></div> <div className='text-[#8A8FB9]'> <p> Support Forum</p> <p> For over 24hr</p></div></div>
                <div className='flex gap-3 items-center'> <div className='sm:h-[40px] sm:w-[40px]   hidden sm:block rounded-full bg-[#FFB265]'></div> <div className='text-[#8A8FB9]'> <p> 20 Margaret st, London</p> <p> Great britain, 3NM98-LK</p></div></div>
                <div className='flex gap-3  items-center'> <div className='sm:h-[40px] sm:w-[40px] hidden sm:block  rounded-full bg-[#1BE982]'></div> <div className='text-[#8A8FB9]'> <p> Free standard shipping</p> <p> on all orders.</p></div></div>
                
              </div>
              <div className='w-full h-[600px] mt-36'>
              <Image src={'/images/contact.png'}  height={692} width={723} alt='contact'  className='h-[600px] w-full'/>
              </div>
              
           </div>
        </div>
      </section>
    </main> 
  )
}

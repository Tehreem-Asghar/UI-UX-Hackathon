







"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { HiTemplate } from "react-icons/hi";
import { GoPersonFill } from "react-icons/go";
import { FaHistory, FaHeart } from "react-icons/fa";
import { RiLogoutBoxFill } from "react-icons/ri";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";



const Sidebar: React.FC = () => {
  const { data: session } = useSession();
  const router= useRouter()



interface UserFormData {
  name: string;
  email: string;

}

const [formData, setFormData] = useState<UserFormData>({
  name: session?.user.name || "",
  email: session?.user.email || "",
 
});

const getUserInitial = (name?: string) => name?.charAt(0).toUpperCase();

  useEffect(() => {
    async function getDatabase() {
      try {
        if (!session?.user.email) return;

        const response = await fetch(`/api/auth/getdatafromdb`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: session?.user.email }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data from database");
        }

        const data = await response.json();
        if (data.user) {
          setFormData({
            name: data.user.name || "",
            email: data.user.email || "",
           
          });
          // getUserInitial(data.user.name)
          
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getDatabase();
  }, [session?.user.email]);







  const handleLogout = async () => {
    await signOut({ redirect: false }); // Do not redirect automatically
    router.push('/login'); // Redirect to login page after logout
  };

 

  return (
    <div className="w-[100%] md: bg-gradient-to-r from-[#FB2E86] to-[#c46fe6]   bg-white text-blue-600  rounded-md md:text-white  h-full pt-5 ">
      <div className="lg:flex hidden items-center gap-2 p-3  bg-white text-[#FB2E86] mx-5    border-[2px] rounded-md ">
           <span className="font-bold text-white bg-blue-600 rounded-full w-9 h-9 flex items-center justify-center">
          {getUserInitial(formData.name)}
           </span>
          <div>
          <p>{formData.name}</p>
          <p>{formData.email}</p>
           </div>
      </div>
      <div className=" md:flex hidden flex-col gap-6 pl-4 py-14">
        <Link href="/dashboard" className="flex gap-2 items-center">
          <HiTemplate /> Dashboard
        </Link>
        <Link href="/dashboard/profile" className="flex gap-2 items-center">
          <GoPersonFill /> Profile
        </Link>
        <Link
          href="/dashboard/orderHistory"
          className="flex gap-2 items-center"
        >
          <FaHistory /> Order History
        </Link>
        <Link href="/dashboard/Wishlist" className="flex gap-2 items-center">
          <FaHeart /> Wishlist
        </Link>
        
        <button onClick={handleLogout}  className="flex gap-2 items-center">
          <RiLogoutBoxFill /> Log Out
        </button>
      </div>
      <div className="flex  md:hidden flex-col justify-center gap-6  pt-14">
        <Link href="/dashboard"  >
          <HiTemplate  className="  pl-1 text-[30px]" />
        </Link>
        <Link href="/dashboard/profile" >
          <GoPersonFill   className="  pl-1 text-[30px]" /> 
        </Link>
        <Link
          href="/dashboard/orderHistory"
         
        >
          <FaHistory  className="  pl-1 text-[30px]" /> 
        </Link>
        <Link href="/dashboard/wishList">
          <FaHeart  className="  pl-1 text-[30px]"/> 
        </Link>
        
        <button onClick={handleLogout}>
          <RiLogoutBoxFill   className="  pl-1 text-[30px]" /> 
        </button>
      </div>

    </div>
  );
};

export default Sidebar;

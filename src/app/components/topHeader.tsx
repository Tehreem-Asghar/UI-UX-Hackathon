"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { CgShoppingCart } from "react-icons/cg";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

function TopHeader() {
  const { data: session } = useSession();
  // console.log("Session", session?.user);
  const router= useRouter()

    const handleLogout = async () => {
      await signOut({ redirect: false }); // Do not redirect automatically
      router.push('/login'); // Redirect to login page after logout
    };


  // Helper function to get the user's initial
  const getUserInitial = (name?: string) => name?.charAt(0).toUpperCase();

  interface UserFormData {
    name: string;
    email: string;
  
  }

const [formData, setFormData] = useState<UserFormData>({
  name: session?.user.name || "",
  email: session?.user.email || "",
 
});


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
 





  return (
    <main className="max-w-[1920px] mx-auto flex  w-full   h-auto md:h-[50px] bg-[#7E33E0] items-center justify-center">
      <section className="  w-full     bg-[#7E33E0] text-white  flex  sm:flex-row flex-col justify-center items-center  sm:justify-evenly text-[10px] md:text-[12px] lg:text-[16px]   ">
        {session?.user ? (
          <>
            <div className="sm:flex hidden items-center sm:gap-4  md:gap-7 gap-1">
              <div className="flex items-center gap-1 text-[12px] md:text-[16px]">
                <MdOutlineEmail />
                <p>tehreemmeo818@gmail.com </p>
              </div>

              <div className=" flex   items-center text-[12px] md:text-[16px] gap-1">
                <MdOutlinePhoneInTalk />
                <p>+92 3443551431</p>
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center sm:gap-4  md:gap-7 gap-1">
            <div className="flex items-center gap-1 text-[12px] md:text-[16px]">
              <MdOutlineEmail />
              <p>tehreemmeo818@gmail.com </p>
            </div>

            <div className="md:flex hidden items-center text-[12px] md:text-[16px] gap-1">
              <MdOutlinePhoneInTalk />
              <p>+92 3443551431</p>
            </div>
          </div>
        )}

        <div className="flex   ">
          <div className="flex items-center sm:gap-3 gap-1">
            <select className="bg-[#7E33E0] text-[14px] pl-2">
              <option value="english"> English</option>
              <option value="urdu">Urdu</option>
            </select>

            <select className="bg-[#7E33E0] text-[14px]">
              <option value="english">USD</option>
            </select>

            <Link href={"/wishlist"}>
              <p className="flex text-[14px] items-center gap-1">
                Wishlist
                <FaRegHeart />
              </p>
            </Link>
            <Link href={"/cart"}>
              {" "}
              <CgShoppingCart className="lg:h-[24px] lg:w-[24px]  md:h-[18px] md:w-[18px]  h-[18px] w-[18px] ml-1" />{" "}
            </Link>
          </div>
        </div>
      </section>

      {session?.user ? (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger className="space-x-1 px-6 ">
             
              <span className="font-bold text-white bg-[#FB2E86]  rounded-full w-9 h-9 flex items-center justify-center">
               {getUserInitial(formData.name)}   
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account <br/>
             <p className="text-blue-800"> {formData.email} </p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              
            <Link href="/dashboard"><DropdownMenuItem>DashBoard</DropdownMenuItem></Link>  
              {/* <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem> */}
              <DropdownMenuItem><button  onClick={handleLogout}>  Log Out </button> </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      ) : (
        <>
          <p>
            <Link
              href={"/login"}
              className="flex items-center md:pb-2 pt-1 pl- text-white gap-1 pr-4"
            >
              {" "}
              Login
              <FiUser />
            </Link>
          </p>
        </>
      )}
    </main>
  );
}

export default TopHeader;

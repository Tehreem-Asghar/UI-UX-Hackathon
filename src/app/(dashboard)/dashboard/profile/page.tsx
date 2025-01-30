"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { IoPersonSharp } from "react-icons/io5";



interface FormData {
  name: string;
  email: string;
  address: string;
  phone: string;
}

const ProfileUpdate = () => {
  const { data: session, update } = useSession(); 

  console.log("session" , session)

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
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
            address: data.user.address || "",
            phone: data.user.phone ? String(data.user.phone) : "",
          });
          getUserInitial(data.user.name)
          
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getDatabase();
  }, [session?.user.email]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`/api/auth/users`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to update profile");
      }

      // Update the state with the new user data
      setFormData(result.user);

      // Update session after successful update
      await update({
        name: result.user.name,
        email: result.user.email,
        address: result.user.address,
        phone: result.user.phone,
      });

      alert("Profile updated successfully");
    } catch (error: any) {
      console.error("Error updating profile:", error);
      alert(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="w-full rounded-lg">

  <div className="h-[200px] w-full rounded-md bg-slate-500  relative">
   <Image src={'/images/profilebg.jpg'} height={200} width={500} alt="profile-bg" className="h-[200px] w-full"/>
  
   <div className="h-[150px] w-[150px]  rounded-full absolute bottom-[-0] left-4">
   <span className="font-bold text-white bg-[#e2e1e1]  shadow-md  border-[2px]   text-[50px] rounded-full w-[150px] h-[150px] flex items-center justify-center">
               {/* {getUserInitial(formData.name)}    */}
               <IoPersonSharp className="h-[150px] w-[100px] text-[150px]"/>
              </span>
   </div>
  </div>
   <div className="my-10 w-[70%] mx-auto"> 
  <h2 className="sm:text-[20px]  text-[16px] text-[#FB2E86] font-bold  ">Personal Information</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4  mt-9">
   
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="p-2 border rounded"
          readOnly
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="p-2 border rounded"
        />
        <button
          type="submit"
          disabled={loading}
          className={`bg-[#FB2E86] text-white p-2 rounded ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:[#FB2E86]"
          }`}
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
      </div>
    </div>
  );
};

export default ProfileUpdate;
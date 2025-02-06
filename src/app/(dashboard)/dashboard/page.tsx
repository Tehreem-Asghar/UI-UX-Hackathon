"use client"

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { signOut} from "next-auth/react";
import { useRouter } from "next/navigation";


interface FormData {
  name: string;
  email: string;
  address: string;
  phone: string;
}
interface Product {
  price: string;
  name: string;
  discountPercentage: number;
  description: string;
  image: string;
  _id: string;
  stockLevel?: number;
  category? :string;
  tags? :string[]
}





export default function Dashboard() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [parsedItems, setParsedItems] = useState<Product[]>([]);
  const router= useRouter()


  const { data: session } = useSession(); 
  const email = session?.user?.email

 const [formData, setFormData] = useState<FormData>({
    name: session?.user.name  || "",
    email:session?.user.email  || "",
    address:session?.user.address || "",
    phone:session?.user.phone ? String(session.user.phone) : "",
  });


useEffect(() => {

  const wishListItems  = localStorage.getItem("wishlist") || "[]"; // Default to an empty array as a string
    setParsedItems(JSON.parse(wishListItems)); // Parse and store the data in state

  const fetchCustomerOrders = async () => {
    try {
      setLoading(true);

      const response = await fetch('/api/customerOrders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch orders');
      }

      const data = await response.json();
      setOrders(data); // Store the orders in state
    } catch (error) {
      console.error('Error fetching customer orders:', error);
    } finally {
      setLoading(false);
    }
  };
  if (email) {
    fetchCustomerOrders();
  }



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
         
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getDatabase();
  }, [session?.user.email , email]);

  const handleLogout = async () => {
      await signOut({ redirect: false }); // Do not redirect automatically
      router.push('/login'); // Redirect to login page after logout
    };
  




  return (
    <div className=" w-[100%]   min-h-screen bg-gray-100 p-4">
      {/* Header */}
      {/* bg-gradient-to-r from-[#FB2E86] to-[#c46fe6] */}
      <header className="bg-[#7E33E0]     text-white p-4 rounded-lg mb-4">
        <h1 className=" text-[14px] sm:text-2xl font-bold">Welcome, {formData.name}!</h1>
         <p className="text-sm">Manage your account and orders</p>
      </header>

      {/* Main Content */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> */}
      <div className="grid my-7    gap-4">

        {/* Profile Information */}
        <div className="bg-white p-4 w-full  mx-auto rounded-lg shadow-lg  shadow-pink-400">
          <h2 className="text-xl font-semibold mb-2  text-[#FB2E86]">Profile Information</h2>
          <p><strong className='text-[#1D3178]'>Name:</strong> {formData.name}</p>
          <p><strong  className='text-[#1D3178] '>Email:</strong> {formData.email}</p>
          <p><strong  className='text-[#1D3178]'>Contact:</strong> {formData.phone}</p>
          <p><strong  className='text-[#1D3178]'>Address:</strong> {formData.address}</p>

        <Link href={'/dashboard/profile'}>    <button className="mt-2 bg-[#c46fe6] w-full text-white px-4 py-2 rounded">Edit Profile</button> </Link>
        </div>

        {/* Order History */}
        <div className="bg-white   p-4 rounded-lg shadow-lg  shadow-pink-400">
          <h2 className="text-xl font-semibold mb-2 text-[#FB2E86]">Order History</h2>
          {orders.length >0 ? <>
            <ul>
            {orders.slice(0, 4).map((item)=>(
              <li key={item._id} className="mb-2  list-disc list-inside ">
              <strong>Order #{item.phone}</strong> - {item.status} - <span className="text-gray-500">Rs-{item.totalAmount}</span>
            </li>
            ))}
         
          </ul>
          <Link href={'/dashboard/orderHistory'} ><button className="mt-2  w-full bg-[#c46fe6] text-white px-4 py-2 rounded">View All Orders</button></Link>
          </> : <>
            <p  className='text-[#1D3178] '>not yet Order</p>
          </>}
  
        </div>

        {/* Wishlist */}
        <div className="bg-white p-4  rounded-lg shadow-lg  shadow-pink-400">
          <h2 className="text-xl font-semibold mb-2  text-[#FB2E86]">Wishlist</h2>
          {parsedItems.length >0 ? <>
            <ul>
            {parsedItems.slice(0,4).map((item)=>(
                <li key={item._id} className="mb-2 text-[#1D3178] font-bold">{item.name} - <span className="text-gray-500">Rs-{item.price}</span></li>
            ))}
         
          </ul>
          <Link href="/dashboard/Wishlist" >    <button className="mt-2 bg-[#c46fe6] w-full text-white px-4 py-2 rounded">View Wishlist</button> </Link>
          
          </>  : <>
          <p  className='text-[#1D3178]'>Wishlist is empty</p> 
          </>}
         
        </div>

       
        {/* Logout Option */}
        <div className="bg-white p-4  rounded-lg shadow-lg  shadow-pink-400">
          <h2 className="text-xl font-semibold mb-2  text-[#FB2E86]">Logout</h2>
          <button  onClick={handleLogout} className=" w-full text-white px-4 py-2 rounded  shadow-lg shadow-pink-400   bg-[#c46fe6]">Logout</button>
        </div>
      </div>
    </div>
  );
}


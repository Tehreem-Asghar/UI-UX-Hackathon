"use client";
import { FaHistory } from "react-icons/fa";
import { format } from "date-fns";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";


const CustomerOrders = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
    const { data: session } = useSession();
  const email = session?.user?.email
  useEffect(() => {
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
  }, [email]);

  return (

    
    <div className="px-4 py-6 ">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6 text-blue-600 flex gap-2 items-center">
        <FaHistory className="pt-1" /> Order History
      </h1>
     
  {/* Orders Table */}
       {orders.length >0 ? <>
       
        <div className="screen5:hidden  block w-full overflow-x-auto">
        <table className="w-full border-collapse min-w-[600px]">
          <thead>
            <tr className="text-[#1D3178] text-left border-b">
              <th className="pl-2 py-3">User</th>
              <th className="pl-2 py-3">Product</th>
              <th className="pl-2 py-3">Payment</th>
              <th className="pl-2 py-3">Status</th>
              <th className="pl-2 py-3 ">Delivery Expected </th>
            </tr>
          </thead>
          <tbody className="pt-3 md:text-[16px] sm:text-[14px] text-[12px]">
            {orders &&
              orders.map((order: any) => (
               <OrderRow key={order._id} order={order} />
              ))}
          </tbody>
        </table>
      </div>
       

       <div  className="screen5:grid grid-cols-1 md:grid-cols-2 hidden  flex-col gap-3 ">
           {orders.map((item)=>(
            <div key={item._id}  className="bg-slate-100  p-1 shadow-lg shadow-red-400 w-full h-auto">
                <span className="flex  flex-col md:flex-row justify-between px-2"><p>{item.customerName}</p> <p>{item.address}</p>  </span>
                <span className="flex   flex-col md:flex-row justify-between px-2"><p>{item.phone}</p> <p  className="text-blue-500">{item.email}</p>  </span>
                <div className="grid  "> 
                    {item.items.map((pro : any , index  : number)=>(
                        <div key={index} className="flex gap-1 my-2 border-b" > 
                         <Image  src={pro.product.image} height={100} width={100} alt={pro.product.name}  className="h-[60px] w-[60px]" />
                          
                          <div> <p className="line-clamp-2">{pro.product.name} </p>
                          <p >Quantity : {pro.quantity}</p>
                          </div>
                          </div>
                    ))}
                 </div>

                <span className="flex justify-between px-2"><p className="text-[#1D3178]">Amount : {item.totalAmount}</p> <p className="text-pink-600">  {item.status} </p>  </span> 

                
            </div>
           ))}
          
       </div>




       </> : <>
       
       <div>
        <h1  className="text-[#1D3178] font-serif">Order History is Empty</h1>
       </div>


       </>}
    
  
    </div>
  );
};

// Single Order Row Component
const OrderRow = ({ order }: { order: any }) => {
  return (
    <tr className="border-b">
      {/* User Info */}
      <td className="pl-2 py-3 whitespace-pre-wrap">
        <p  className="text-pink-600">{order.customerName}</p>
        <p className="text-blue-500">{order.email}</p>
        <p className="text-[#1D3178]">{order.phone}</p>
        <p className="text-[#1D3178]">{order.address}</p>
      </td>

      {/* Product Info */}
      <td className="pl-2 py-3">
        <div className="grid grid-cols-2 gap-2">
          {order.items.map((item: any, index: number) => (
            <div className="flex  items-center" key={item.product._id}> 
            {/* <p className="text-[10px] text-[#1D3178] flex ">{item.product.name} <p>( {item.quantity} )</p> </p> */}
            <Image
              key={index}
              src={item.product.image}
              alt={item.product.name}
              width={80}
              height={80}
              className="h-[60px] w-[60px] rounded-md object-cover"
              unoptimized
            />
            <p className="text-[10px] text-[#1D3178]   pl-1">{item.product.name}( {item.quantity} )</p>

            </div>
          ))}
        </div>
      </td>

      {/* Payment Info */}
      <td className="pl-2 py-3 text-[#1D3178] text-sm">RS.{order.totalAmount}</td>

      {/* Status */}
      <td className="pl-2 py-3 text-sm"><mark>{order.status}</mark></td>

      {/* Delivery Date */}
      <td className="pl-2 py-3 text-[#1D3178] text-sm">
        <p>{format(new Date(order.orderDate), "MMM dd yyyy")}</p>
      </td>
    </tr>
  );
};

export default CustomerOrders;



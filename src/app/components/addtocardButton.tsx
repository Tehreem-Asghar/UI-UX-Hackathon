'use client'
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'

interface PT {
  _id: number;
 title: string;
  newPrice: number;
  image: string;
  oldPrice : number;
}


interface CartItem {
  selectedPlant: PT;
  quantity: number;
}


function AddtocardButton( {product} : any) {

  const [quantity, setQuantity] = useState<number>(1);

  
  const addToCard :()=> any = () => {
    if (product) {
      // Check if 'cart' already exists in localStorage
      const cartItems = localStorage.getItem("cart");

      // If cart exists, parse it, otherwise initialize as an empty array
      const cart: CartItem[] = cartItems ? JSON.parse(cartItems) : [];

      // Check if the selected product is already in the cart
      const existingItem: CartItem | undefined = cart.find(
        (item: CartItem) => item.selectedPlant?._id === product._id
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
    <Button  onClick={()=> addToCard()} className="bg-inherit hover:text-white hover:bg-[#FB2E86] text-[#151875]">
                  Add To cart
                </Button>
  )

}

export default AddtocardButton
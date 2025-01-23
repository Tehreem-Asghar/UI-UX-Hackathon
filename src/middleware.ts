import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
       

export  const middleware = async (request : NextRequest)=>{
   

console.log("hello")


const cookie = await cookies()
const isLoggedin = cookie.get("next-auth.session-token")

if(!isLoggedin){
   return NextResponse.redirect(new URL("/login" , request.url))
}
    return NextResponse.next()
}


export const config = {
    matcher : ["/cart" , "/cart/checkOut" , "/cart/checkOut/orderDone" , "/wishlist" , "/contact"]
}
       
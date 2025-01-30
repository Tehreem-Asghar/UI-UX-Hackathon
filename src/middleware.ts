import { NextRequest, NextResponse } from "next/server";


export const middleware = (request: NextRequest) => {
    const cookie = request.cookies.get("next-auth.session-token")?.value;
    const deployedCookie = request.cookies.get("__Secure-next-auth.session-token")?.value;
  
    // Log cookie values for debugging
    console.log("Cookie:", cookie);
    console.log("DeployedCookie:", deployedCookie);
  
    // Check if both cookies exist
    if (!cookie && !deployedCookie) {
      const loginUrl = new URL("/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  
    return NextResponse.next();
  };
  
  export const config = {
      matcher: [ "/cart/checkOut", "/cart/checkOut/orderDone", "/wishlist", "/contact"  , "/dashboard" , "/dashboard/profile" , "/dashboard/orderHistory" , "/dashboard/Wishlist" ],
    };
    


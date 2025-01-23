import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  // Retrieve the session token from cookies
  const cookie = request.cookies.get("next-auth.session-token");
  const isLoggedIn = cookie?.value; // Ensure cookie exists and retrieve its value

  // If not logged in, redirect to login page
  if (!isLoggedIn) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Allow access to the route
  return NextResponse.next();
};

export const config = {
  matcher: ["/cart", "/cart/checkOut", "/cart/checkOut/orderDone", "/wishlist", "/contact"],
};




// import { cookies } from "next/headers";
// import { NextRequest, NextResponse } from "next/server";
       

// export  const middleware = async (request : NextRequest)=>{
   

// console.log("hello")


// const cookie = await cookies()
// const isLoggedin = cookie.get("next-auth.session-token")

// if(!isLoggedin){
//    return NextResponse.redirect(new URL("/login" , request.url))
// }
//     return NextResponse.next()
// }


// export const config = {
//     matcher : ["/cart" , "/cart/checkOut" , "/cart/checkOut/orderDone" , "/wishlist" , "/contact"]
// }
       
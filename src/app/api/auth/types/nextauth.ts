import NextAuth from "next-auth";
import { DefaultSession } from "next-auth";

// Extend the session type to include additional user properties
declare module "next-auth" {
  interface Session {
    user: {
      id :string;
      email: string;
      name?: string;
      image?: string;
      role?: string;
      address?: string;
      phone?: number;
    };
  }

  interface User {
    id : string;
    email: string;
    name?: string;
    image?: string;
    role?: string;
    address?: string;
    phone?: number;
  }
}





















// import NextAuth from "next-auth";
// import { DefaultSession } from "next-auth";

// // Extend the session type to include additional user properties
// declare module "next-auth" {
//     interface Session {
//       user: {
//         email: string;
//         name?: string;
//         image?: string;
//         role?: string;
//       };
//     }
  
//     interface User {
//       email: string;
//       name?: string;
//       image?: string;
//       role?: string;
//     }
   
  
//   }
  
  
//   // Typically, NextAuth's User type may look something like this:
  
    
    
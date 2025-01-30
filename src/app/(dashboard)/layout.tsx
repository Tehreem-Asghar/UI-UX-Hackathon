"use client";

import ContextProvider from "../contetxtProvider";
import Sidebar from "./components/sidebare";
import { AuthProvider } from "../provider/provider";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <ContextProvider>
        <div className="max-w-[1920px] mx-auto ">
          <main className="w-[100%] flex">
            <div className="md:w-[30%] w-[10%] ">
              <Sidebar />
            </div>
            <div className="w-[100%]"> {children}</div>
          </main>
        </div>
      </ContextProvider>
    </AuthProvider>
  );
}







// import ContextProvider from "../contetxtProvider";
// import Sidebar from "./components/sidebare";
// import { AuthProvider } from "../provider/provider";

// export default function Dashboard({ children }: { children: React.ReactNode }) {
//   return (
//     <AuthProvider> 
//         <ContextProvider> 
//     <div className="max-w-[1920px] mx-auto   h-screen">
//       {/* <nav>Shop Navigation</nav> */}
//       <main className="w-[100%] flex">
       
//         <div className="w-[30%]">
//           <Sidebar />
//         </div>
//         <div className="w-[100%]"> {children}</div>
//       </main>
//       {/* <footer>Shop Footer</footer> */}
//     </div>
//     </ContextProvider>
//     </AuthProvider>
//   );
// }

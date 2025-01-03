import React from "react";
import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import { FaFacebook, FaPenFancy } from "react-icons/fa6";
import { FaInstagramSquare, FaRegCalendarAlt } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const blogImage = [
  {
    image: "/images/blogs/blog4.png",
    name: "Mauris at orci non vulputate diam tincidunt nec.",
  },
  {
    image: "/images/blogs/blog5.png",
    name: "Aenean vitae in aliquam ultrices lectus. Etiam.",
  },
  {
    image: "/images/blogs/blog6.png",
    name: "Sit nam congue feugiat nisl, mauris amet nisi.",
  },
];

function Blogs() {
  return (
    <main className="max-w-[1920px] mx-auto">
      <section className="h-[286px] w-full bg-[#F6F5FF] grid items-center ">
        <div className="sm:mx-[170px] mx-[30px] overflow-hidden text-center sm:text-left">
          <h2
            className={`${josefinSans.className} text-[25px] sm:text-[36px] text-[#101750] font-bold`}
          >


            
            Blog Page
          </h2>
          <span className="flex sm:justify-start justify-center font-medium">
            <p>Home.Pages</p>
            <p className="text-[#FB2E86]">.Blog Page</p>
          </span>
        </div>
      </section>

      <section className="lg:mx-[170px] mx-[20px] sm:mx-[30px] screen4:mx-[25px] my-24 flex  ">
        <div className="w-full flex ">
          <div className="w-[70%] screen:w-[100%] ">
            {blogImage.map((blog , index) => (
              <div className="my-6"  key={index}>
                <Image
                  src={blog.image}
                  height={453}
                  width={600}
                  alt={"blog"}
                  className="w-full  h-[400px]"
                />

                <div className="p-5">
                  <div className="flex gap-6 items-center mb-4">
                    <div className="flex items-center gap-3">
                      <FaPenFancy className="text-[#FB2E86]" />
                      <p>Surfauxion</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaRegCalendarAlt className="text-[#FFA454]" />
                      <p className="text-[12px]">21 August, 2020</p>
                    </div>
                  </div>
                  <h3 className="text-[#151875] text-[20px] font-bold mt-2">
                    {blog.name}
                  </h3>
                  <p className="text-[#72718F] mt-4 text-[14px] leading-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Velit facilisis quis auctor pretium ipsum, eu rutrum.
                    Condimentum eu malesuada vitae ultrices in in neque, porta
                    dignissim. Adipiscing purus, cursus vulputate id id dictum
                    at.
                  </p>
                  <p className="text-[16px] mt-4 text-[#151875] ">Read More</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-[30%] screen:hidden px-5  mt-5 py-5  ">
            <h1 className="text-[#151875] font-bold text-[22px]  "> Search</h1>

            <input
              type="text"
              placeholder="Search For Posts"
              className="h-[45px] w-full  mt-4 border border-[#BDBDD8] p-2 "
            />

            <div>
              <h1 className="text-[#151875] font-bold text-[22px] mt-6  ">
                Categories
              </h1>

              <div className="grid grid-cols-2 gap-2 mt-3 ">
                <button className="hover:text-white  text-[#3F509E] font-semibold hover:bg-[#F939BF] flex justify-center items-center w-[122px] h-[30px]">
                  Hobbies (14)
                </button>
                <button className="hover:text-white text-[#3F509E] font-semibold  hover:bg-[#F939BF] flex justify-center items-center w-[122px] h-[30px]">
                  Womain (21)
                </button>
                <button className="hover:text-white text-[#3F509E] font-semibold hover:bg-[#F939BF] flex justify-center items-center w-[122px] h-[30px]">
                  womain (21)
                </button>
                <button className="hover:text-white  text-[#3F509E]  font-semibold hover:bg-[#F939BF] flex justify-center items-center w-[122px] h-[30px]">
                  womain (21)
                </button>
                <button className="hover:text-white text-[#3F509E] font-semibold hover:bg-[#F939BF] flex justify-center items-center w-[122px] h-[30px]">
                  Womain (21)
                </button>
                <button className="hover:text-white  text-[#3F509E] font-semibold hover:bg-[#F939BF] flex justify-center items-center w-[122px] h-[30px]">
                  Womain (21)
                </button>
              </div>

              <h1 className="text-[#151875] font-bold text-[22px] mt-16">
                Recent Post
              </h1>
              <div className="flex gap-3 mt-8 ">
                <Image
                  src={"/images/blogs/recent1.png"}
                  height={51}
                  width={70}
                  alt="recent post"
                  className="h-[50px] w-[70px] "
                />
                <div >
                  <p className="text-[#3F509E] text-[14px]">
                    It is a long established fact
                  </p>
                  <p className="text-[#8A8FB9] text-[11px]">Aug 09 2020</p>
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <Image
                  src={"/images/blogs/recent2.png"}
                  height={51}
                  width={70}
                  alt="recent post"
                  className="h-[50px] w-[70px]"
                />
                <div>
                  <p className="text-[#3F509E] text-[14px]">
                    It is a long established fact
                  </p>
                  <p className="text-[#8A8FB9] text-[11px]">Aug 09 2020</p>
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <Image
                  src={"/images/blogs/recent3.png"}
                  height={51}
                  width={70}
                  alt="recent post"
                  className="h-[50px] w-[70px]"
                />
                <div>
                  <p className="text-[#3F509E] text-[14px]">
                    It is a long established fact
                  </p>
                  <p className="text-[#8A8FB9] text-[11px]">Aug 09 2020</p>
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <Image
                  src={"/images/blogs/recent4.png"}
                  height={51}
                  width={70}
                  alt="recent post"
                  className="h-[50px] w-[70px]"
                />
                <div>
                  <p className="text-[#3F509E] text-[14px]">
                    It is a long established fact
                  </p>
                  <p className="text-[#8A8FB9] text-[11px]">Aug 09 2020</p>
                </div>
              </div>

              
              <h1 className="text-[#151875] font-bold text-[22px] mt-16">
              Sale Product
              </h1>
              <div className="flex gap-3 mt-8">
                <Image
                  src={"/images/blogs/sale1.png"}
                  height={51}
                  width={70}
                  alt="recent post"
                  className="h-[50px] w-[70px]"
                />
                <div>
                  <p className="text-[#3F509E] text-[14px]">
                  Elit ornare in enim mauris.
                  </p>
                  <p className="text-[#8A8FB9] text-[11px]">Aug 09 2020</p>
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <Image
                  src={"/images/blogs/sale2.png"}
                  height={51}
                  width={70}
                  alt="recent post"
                  className="h-[50px] w-[70px]"
                />
                <div>
                  <p className="text-[#3F509E] text-[14px]">
                  Viverra pulvinar et enim.
                  </p>
                  <p className="text-[#8A8FB9] text-[11px]">Aug 09 2020</p>
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <Image
                  src={"/images/blogs/sale3.png"}
                  height={51}
                  width={70}
                  alt="recent post"
                  className="h-[50px] w-[70px]"
                />
                <div>
                  <p className="text-[#3F509E] text-[14px]">
                  Mattis varius donec fdsfd
                  </p>
                  <p className="text-[#8A8FB9] text-[11px]">Aug 09 2020</p>
                </div>
              </div>

              <h1 className="text-[#151875] font-semibold text-[22px] mt-14">
                Offer Product
              </h1>

              <div className="mt-12  grid grid-cols-2 gap-2">
                      <div  className="w-[126px] h-auto">
                        <Image src={'/images/blogs/offer1.png'}   height={80} width={126}  alt="offer" className="h-[80px]  w-[126px]"/>
                          <h2 className="text-[#151875] text-[14px]">Duis lectus est.</h2>
                          <p className="text-[#8A8FB9] text-[12px]"> $12.00 - $15.00</p>
                      </div>

                      <div  className="w-[126px] h-auto">
                        <Image src={'/images/blogs/offer2.png'}   height={80} width={126}  alt="offer" className="h-[80px]  w-[126px]"/>
                          <h2 className="text-[#151875] text-[14px]">Sed placerat.</h2>
                          <p className="text-[#8A8FB9] text-[12px]"> $12.00 - $15.00</p>
                      </div>

                      <div  className="w-[126px] h-auto">
                        <Image src={'/images/blogs/offer3.png'}   height={80} width={126}  alt="offer" className="h-[80px]  w-[126px]"/>
                          <h2 className="text-[#151875] text-[14px]">Netus proin.</h2>
                          <p className="text-[#8A8FB9] text-[12px]"> $12.00 - $15.00</p>
                      </div>

                      <div  className="w-[126px] h-auto">
                        <Image src={'/images/blogs/offer4.png'}   height={80} width={126}  alt="offer" className="h-[80px]  w-[126px]"/>
                          <h2 className="text-[#151875] text-[14px]">Platea in.</h2>
                          <p className="text-[#8A8FB9] text-[12px]"> $12.00 - $15.00</p>
                      </div>
              </div>

              <h1 className="text-[#151875] font-semibold text-[22px] mt-10">
                Follow
              </h1>
                <div className="mt-4 flex items-center gap-2">
                <FaFacebook className="text-blue-800"/>
                <FaInstagramSquare className="text-pink-700"/>
                <AiFillTwitterCircle  className="text-blue-400"/>
                </div>

                <h1 className="text-[#151875] font-semibold text-[22px] mt-7">
                Tags
              </h1>


               <div className="text-[#151875]  mt-4  grid grid-cols-3 gap-4">
                 <p className="underline underline-offset-2">General</p>
                <p className="text-[#FB2E86]  underline underline-offset-2">Atsanil</p>
                <p className="underline underline-offset-2">Insas.</p>
                <p className="underline underline-offset-2" >Bibsaas</p>
                <p className="underline underline-offset-2">Nulla.</p>
               </div>


            </div>
          </div>
        </div>

       

      </section>

      <div className="h-[93px] sm:mx-[170px] mx-[30px]  mt-28 mb-4">
               <Image src={'/images/tags/tags.png'}  height={93} width={400} alt="tag" className="h-[93px] w-full"/>
          </div>

    </main>
  );
}

export default Blogs;

import Image from "next/image";
import { SiYoutube } from "react-icons/si";
import { MdEvent } from "react-icons/md";
import Link from "next/link";

export default function Home() {
  return (
    //header ui
    <div className="w-full md:1/2 ">
      <header className="h-[186px] bg-green-500 p-5 text-center border-b-8 border-green-400 items-center justify-center">
        <div>
          <h3 className="font-semibold text-2xl absolute mr-[80px] inset-x-0 top-[70px]   text-shadow text-shadow-green-900">
            Hi,
          </h3>
          <h3 className="font-semibold text-2xl absolute ml-[70px] inset-x-0 top-[70px] text-green-200 text-shadow text-shadow-black-900">
            I'm Riyas
          </h3>
        </div>
        {/* Image in header */}
        <div>
          <Image
            src="https://github.com/Its-Riyas-28.png"
            sizes="100%"
            width={100}
            height={100}
            priority
            alt="profile"
            className="w-[120px] h-[120px] top-[120px] absolute m-auto inset-x-0 shadow-lg border-1 border-black shadow-black rounded-full"
          />
        </div>
      </header>
      {/* Share Your Views box*/}
      <div className="mt-24 sm:mt-32 mb-10 w-full flex justify-center">
        <div className=" bg-white box-shadow border-2 border-green-100 shadow-md shadow-green-400 p-4 ml-4 mr-4 mt-[20px] w-[400px] rounded-2xl">
          <div className="font-semibold">Share Your Views</div>

          <ul className="py-3">
            {/* Youtube row */}
            <li className="relative">
              <div>
                <SiYoutube className="text-red-500 text-2xl absolute top-[22px] ml-4 " />
              </div>

              <Link
                href={"/reviews/youtube"}
                className="border-2 border-red-100 rounded-2xl                  
                            items-center space-x-4 px-4 py-5 box-shadow shadow-lg

                          shadow-red-500 flex p-2 pl-[50px] hover:shadow-red-300"
              >
                Youtube Reviews
              </Link>
            </li>
            {/* event row */}
            <li className="relative py-5">
              <div>
                <MdEvent className="text-purple-500 text-2xl  absolute top-[42px] ml-4" />
              </div>

              <div
                className="border-2 border-red-100 rounded-2xl
                            items-center space-x-4 px-4 py-5 box-shadow shadow-lg 

                          shadow-purple-500 flex p-2 pl-[50px] hover:shadow-purple-300"
              >
                Event Reviews
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

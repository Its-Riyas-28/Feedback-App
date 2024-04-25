"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";

function YouTubeReview() {
  const router = useRouter();
  return (
                                              //navbar
    <div className="w-full md:1/2 ">
      <header className=" h-[70px] w-[370px]  bg-red-500 border-b-8 border-red-400 py-4 flex px-3 space-x-4 items-center">
        <button type="button" onClick={() => router.back()}>
          <IoMdArrowRoundBack />
        </button>
        <h3 className="font-semibold uppercase">Youtube Reviews</h3>
      </header>
                                              {/* Share your views box */}
      <div className="bg-white ml-4 mt-7 w-[317px]  rounded-2xl py-1 pl-1 pt-4 shadow-red-400 shadow-lg ">
        <h4 className="font-semibold pl-4 ">Share Your Views</h4>

        <form action="" className="my-5">
          <div>
            <label htmlFor="improve" className="block text-gray-500 pl-4 ">
              How we can improve
            </label>
            <textarea
              placeholder="Enter Your feedback"
              className="bg-red-100 w-[280px] px-3 pt-2 mt-1 rounded ml-[12px] shadow-md shadow-red-400 outline-none"
            ></textarea>
          </div>
                                                  {/* Submit button */}
          <div>
            <button
              type="button"
              className="bg-red-500 font-semibold font-sans mx-[120px] mt-[20px] p-2 rounded-3xl shadow-red-400 shadow-md hover:bg-red-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default YouTubeReview;

// "use client"
// import { useRouter } from 'next/navigation';
//import React from 'react'
//import { IoMdArrowRoundBack } from "react-icons/io";

//function jackicon({appTitle}) {
//const router = useRouter();
//return (

//<header className=" bg-red-500  border-b-8 border-red-400 py-4 w-[425px] rounded flex px-3 space-x-4 items-center">
//  <button type='button' onClick={() => router.back()}><IoMdArrowRoundBack /></button>
//    <h3 className='font-semibold uppercase'>{appTitle}</h3>
//  </header>
//);
//}

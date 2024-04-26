"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";
import TextArea from "@/components/TextArea";
import Inputi from "@/components/Inputi";

function YouTubeReview() {
  const router = useRouter();
  return (
    //navbar
    <div className="w-full md:1/2 ">
      <header className=" h-[70px]  bg-red-500 border-b-8 border-red-400 py-4 flex px-3 space-x-4 items-center">
        <button type="button" onClick={() => router.back()}>
          <IoMdArrowRoundBack />
        </button>
        <h3 className="font-semibold uppercase">Youtube Reviews</h3>
      </header>

      {/* Share your views box */}
      <div className="flex justify-center my-5 g-black">
        <div className="w-[330px] bg-white m-3 p-5 rounded-[25px] shadow-red-400 shadow-lg ">
          <h4 className="font-semibold">Share Your Views</h4>

          <form action="" className="my-5 space-y-4">
            <div>
              <Inputi text="Name" placeholder="Enter Your Name" />
            </div>

            <div>
              <Inputi
                text="Youtube Video Title"
                placeholder="Enter Video Title"
              />
            </div>

            <div>
              <TextArea
                text="Your Suggestion to improve the content"
                placeholder="Your Suggestion is Valube to us"
              />
            </div>
            {/* Submit button */}
            <div className="px-7">
              <button
                type="button"
                className="bg-red-500 flex  font-semibold font-sans mx-[120px] mt-[20px] p-2 rounded-3xl shadow-red-400 shadow-md hover:bg-red-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default YouTubeReview;

"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";

function jackicon({appTitle}) {
  const router = useRouter();
  return (
    
    <header className=" bg-white py-4 flex px-3 space-x-4 items-center">
        <button type='button' onClick={() => router.back()}><IoMdArrowRoundBack /></button>
            <h3 className='font-semibold uppercase'>{appTitle}</h3>
            </header>
  );
}

export default jackicon

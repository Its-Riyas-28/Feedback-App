"use client";

import React from "react";

function TextArea({ text, children }) {
  return (
    <div>
      <label htmlFor="improve" className="block text-gray-500 pl-4 ">
        {text}
      </label>

      <textarea
        placeholder="Enter Your feedback"
        className="bg-red-100 w-[280px] px-3 pt-2 mt-1 rounded ml-[12px] shadow-md shadow-red-400 outline-none"
      ></textarea>
      {children}
    </div>
  );
}

export default TextArea;

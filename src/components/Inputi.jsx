import React from "react";

function Inputi({ children, placeholder, text }) {
  return (
    <div>
      <label htmlFor="improve" className="block text-gray-500">
        {text}
      </label>
      <input
        type="input"
        placeholder={placeholder}
        className="bg-red-100 w-[360px] px-3 py-2 mt-1 rounded shadow-md shadow-red-400 outline-none"
      ></input>
      {children}
    </div>
  );
}

export default Inputi;

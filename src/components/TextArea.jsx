import React from "react";
import PropTypes from "prop-types"

function TextArea({ text, children, placeholder }) {
  return (
    <div>
      <label htmlFor="improve" className="block text-gray-500">
        {text}
      </label>

      <textarea
        placeholder={placeholder}
        className="bg-red-100 w-[360px] px-3 py-2 mt-1 rounded  shadow-md shadow-red-400 outline-none"
      ></textarea>
      {children}
    </div>
  );
};

TextArea.protoType={
    text : PropTypes.string,
    placeholder : PropTypes.string,
}

export default TextArea;

import React from "react";

const Button = ({ className, btnText }) => {
  return (
    <button
      className={`${className} rounded-md bg-brainyWavePurple text-white hover:bg-brainyWavePurple/70 hover:shadow-lg transition-all duration-300 ease-in-out`}
    >
      {btnText}
    </button>
  );
};

export default Button;

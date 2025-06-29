import React from "react";

const Button = ({ className, btnText }) => {
  return <button className={`${className}`}>{btnText}</button>;
};

export default Button;

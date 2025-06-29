import React from "react";

const Heading = ({ className, headingText }) => {
  return <header className={`${className}`}>{headingText}</header>;
};

export default Heading;

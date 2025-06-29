import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">Logo</Link>
      </div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/second_page">Second Page</Link>
        <Link to="/third_page">Third Page</Link>
      </ul>
    </nav>
  );
};

export default Navbar;

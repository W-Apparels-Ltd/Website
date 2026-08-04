import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/button/Web_Photo_Editor.jpg";

const Nav2 = () => (
  <div className="sticky top-0 z-20 -mb-[75px] bg-black/30 backdrop-blur-sm">
    <div className="navbar font-Nunito">
      <div className="navbar-start">
        <Link
          to="/productgallery"
          className="btn btn-ghost p-1"
          aria-label="Back to product gallery"
        >
          <img
            className="w-12 rounded-md"
            src={logo}
            alt="Back to product gallery"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex" />
      <div className="navbar-end" />
    </div>
  </div>
);

export default Nav2;

import React from 'react';
import logo from '../images/wapparels_logo.jpeg'


const Nav = () => {
  return (
    <div>
      <div className="navbar bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
              <li><a>About us</a></li>
              <li><a>Facilities</a></li>
              <li><a>Clientele</a></li>
              <li><a>Products</a></li>
              <li><a>Meet Our Team</a></li>

            </ul>
          </div>

          <a className="btn btn-ghost normal-case text-xl"><img className='me-1 w-12 rounded-full' src={logo} alt="" />Wapparels Ltd.</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">
            <li><a>About Us</a></li>
            <li><a>Products</a></li>
            <li><a>Facilities</a></li>
            <li><a>Our Clients</a></li>
            <li><a>Our Team</a></li>
            <li><a>Careers</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Send us a Message</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;

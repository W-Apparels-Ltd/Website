import React from 'react';
import logo from '../images/wapparels_logo.jpeg'
import { Link } from 'react-router-dom';
import '../pages/Nav.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { HashLink } from 'react-router-hash-link';


const Nav = () => {
  return (
    <div className='sticky z-10  -mb-[75px]'  style={{
      'background-color':'linear-gradient(to bottom, rgba(135, 124, 201, 0.52), rgba(24, 22, 117, 0.73))'
    }} >
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
            <li><HashLink smooth to='/#aboutus'>About Us</HashLink></li>
            <li><HashLink smooth to='/#products'>Products</HashLink></li>
            <li><HashLink smooth to='/#facilities'>Facilities</HashLink></li>
            <li><HashLink smooth to='/#ourclients'>Our Clients</HashLink></li>
            <Link to='/meettheteam'><li><a>Our Team</a></li></Link>
            <Link to='/career'><li><a>Careers</a></li></Link>
            </ul>
          </div>

          <Link to='/' className="btn btn-ghost normal-case text-xl text-white"><img className='me-1 w-12 rounded-full' src={logo} alt="" />Wapparels Ltd.</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold text-white">
            <li className=' hover:text-[#b8b8b8] hover:bg-[rgba(1,1,1,0.7)] rounded-xl'><HashLink smooth to='/#aboutus'>About Us</HashLink></li>
           
            <li className='hover:text-[#b8b8b8] hover:bg-[rgba(1,1,1,0.7)]  rounded-xl' ><HashLink smooth to='/#products'>Products</HashLink></li>
            <li className='hover:text-[#b8b8b8] hover:bg-[rgba(1,1,1,0.7)] rounded-xl'><HashLink smooth to='/#facilities'>Facilities</HashLink></li>
            <li className='hover:text-[#b8b8b8] hover:bg-[rgba(1,1,1,0.7)]  rounded-xl'><HashLink smooth to='/#ourclients'>Our Clients</HashLink></li>
            <Link to='/meettheteam'><li className='hover:text-[#b8b8b8] hover:bg-[rgba(1,1,1,0.7)] rounded-xl'><a>Our Team</a></li></Link>
            <Link to='/career'><li className='hover:text-[#b8b8b8] hover:bg-[rgba(1,1,1,0.7)] rounded-xl'><a>Careers</a></li></Link>
        
          </ul>
        </div>
        <div className="navbar-end ">
        <form>
          <i className='fa fa-search text-white fa-lg m-5'></i>
        </form>
        </div>
        
      </div>
    </div>
  );
};

export default Nav;

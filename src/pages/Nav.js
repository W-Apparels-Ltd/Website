import React from 'react';
import logo from '../images/wapparels_logo.jpeg'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../pages/Nav.css'
import { useState } from 'react';

const Nav = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const handleSelect=(value)=>{
    setFilteredData([]);
    setWordEntered("");
  }
  const data=[
    {
      title:'About Us',
      goto:'/#aboutus',
      target:''
    },
    {
      title:'Products',
      goto: '/#products',
      target:''
    },
    {
      title:'Facilities',
      goto:'/#facilities',
      target:''
    },
    {
      title:'Our Clients',
      goto:'/#ourclients',
      target:''
    },
    {
      title:'Our Team',
      goto:'/meettheteam',
      target:''
    },
    {
      title:'Careers',
      goto:'/career',
      target:''
    },
    {
      title:'Our Profile',
      goto:'https://drive.google.com/file/d/1Ci1X5Eu-uYRvd9n_zryD5InZXo9YcLWE/edit',
      target:'_blank'
    },
  ]
  return (
    <div className='sticky z-10  -mb-[75px]'  style={{
      'background-color':'linear-gradient(to bottom, rgba(135, 124, 201, 0.52), rgba(24, 22, 117, 0.73))'
    }} >
      <div className="navbar font-Nunito">
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

          <Link to='/' className="btn btn-ghost normal-case text-xl text-white"><img className='me-1 w-12 rounded-full' src={logo} alt="" />W. Apparels Ltd.</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold text-white">
            
            <li className='hover:text-[#b8b8b8] hover:bg-[rgba(1,1,1,0.7)]  rounded-xl'><HashLink smooth to='/#aboutus'>About Us</HashLink></li>
            
            <li className=' rounded-xl hover:text-[#b8b8b8] hover:bg-[rgba(1,1,1,0.7)] ' ><HashLink smooth to='/#products'>Products</HashLink></li>
            <li className='hover:text-[#b8b8b8] hover:bg-[rgba(1,1,1,0.7)] rounded-xl'><HashLink smooth to='/#facilities'>Facilities</HashLink></li>
            <li className='hover:text-[#b8b8b8] hover:bg-[rgba(1,1,1,0.7)]  rounded-xl'><HashLink smooth to='/#ourclients'>Our Clients</HashLink></li>
            <Link to='/meettheteam'><li className='hover:text-[#b8b8b8] hover:bg-[rgba(1,1,1,0.7)] rounded-xl'><a>Our Team</a></li></Link>
            <Link to='/career'><li className='hover:text-[#b8b8b8] hover:bg-[rgba(1,1,1,0.7)] rounded-xl'><a>Careers</a></li></Link>   
          </ul>
        </div>
        <div className="navbar-end ">
        <div class="searchBox1 flex justify-center items-center flex-wrap	 mt-3">

            <input className="searchInput1" type="text" name="" placeholder="Search"
            value={wordEntered}
            onChange={handleFilter}
            />
            <button className="searchButton1 flex justify-center items-center">
                <i className="material-icons">
                    search
                </i>
            </button>
            
            {filteredData.length != 0 && (
              <div className="Result1 basis-full rounded">
                {filteredData.slice(0, 15).map((value, key) => {
                  return (
                    
                      <HashLink className='Item1 ps-5' onClick={handleSelect}  smooth to={value.goto} target={value.target}>{value.title}</HashLink>
                      
                    
                  );
                })}
              </div>
            )}
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Nav;

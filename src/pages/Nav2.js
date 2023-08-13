import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/button/Web_Photo_Editor.jpg'

const Nav2 = () => {
  const navigate = useNavigate();
  const goBack = () => {
		navigate(-1);
	}
    return (
        <div className='sticky z-10  -mb-[75px]'  style={{
            'background-color':'linear-gradient(to bottom, rgba(135, 124, 201, 0.52), rgba(24, 22, 117, 0.73))'
          }} >
            <div className="navbar font-Nunito">
              <div className="navbar-start">
                <button onClick={goBack}><img className='w-12 rounded-md' src={logo}></img></button>
              </div>
              <div className="navbar-center hidden lg:flex">
                
              </div>
              <div className="navbar-end ">
              
              </div>
              
            </div>
          </div>
    );
};

export default Nav2;
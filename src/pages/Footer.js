import React from 'react';
import logo from '../images/logo.jpeg'

const Footer = () => {
  return (
  <footer className="footer footer-center p-4 bg-base-300 text-base-content gap-y-1">
    <div>
    <img className='w-12 rounded-full' src={logo} alt="" />
    </div>
    <div>
      <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
    </div>
  </footer>
  );
};

export default Footer;
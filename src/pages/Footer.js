import React from 'react';
import logo from '../images/wapparels_logo.jpeg'
import ScrollToTop from 'react-scroll-to-top';

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content gap-y-1">
      <ScrollToTop className='flex justify-center animate-bounce ' smooth />
      <div>
        <img className='w-12 rounded-full' src={logo} alt="" />
      </div>
      <div>
        <p>Copyright © 2023 - All right reserved by W Apparels Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;

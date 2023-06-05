import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../pages/Nav';
import Footer from '../pages/Footer';

const Main = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
      
    </div>
  );
};

export default Main;
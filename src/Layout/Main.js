import React from 'react';
// 1. Add ScrollRestoration to this import line
import { Outlet, ScrollRestoration } from 'react-router-dom'; 
import Nav from '../pages/Nav';
import Footer from '../pages/Footer';
import RouteSeo from '../seo/RouteSeo';

const Main = () => {
  return (
    <div>
      {/* 2. Add the component here */}
      <ScrollRestoration />
      
      <RouteSeo />
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;

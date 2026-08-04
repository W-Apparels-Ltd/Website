import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../pages/Nav';
import Footer from '../pages/Footer';
import RouteSeo from '../seo/RouteSeo';

const Main = () => {
  return (
    <div>
      <RouteSeo />
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
      
    </div>
  );
};

export default Main;
import React from 'react';
import pic from '../images/factory_purpose/1.jpg'
import bcl from '../images/Certificates/Bcl-removebg-preview.png'
import cpi from '../images/Certificates/CPI-removebg-preview.png'
import oekotex from '../images/Certificates/standard-100-by-oeko-tex-logo-vector-removebg-preview.png'
import amforibsci from '../images/Certificates/amforibsci-removebg-preview.png'
import amforibepi from '../images/Certificates/amfori-bepi-removebg-preview.png'
import alliance from '../images/Certificates/alliance-removebg-preview.png'
import rsc from '../images/Certificates/RSC.png'
import { Flip } from 'react-awesome-reveal';
import Costing from '../Shared/Costing';
import FireAndSafety from '../Shared/FireAndSafety';


const Teams = () => {
  return (
    <div style={{
      backgroundImage:`linear-gradient(to bottom, rgba(135, 124, 201, 0.52), rgba(24, 22, 117, 0.73)), url(${pic})`,
    }}  className= "  mx-auto w-full bg-cover bg-fixed bg-center bg-no-repeat shadow-lg">  
      <div>
          <div className='p-20 text-center'><h1 className='lg:text-5xl md:text-3xl text-2xl text-white font-bold mt-5'>Welcome to The Teamsite of W Apparels Ltd.</h1></div>
          
      </div>
      <div className='lg:mt-20 mt-5 rounded-xl'>
      <div className='bg-base-200 '>
          <div className=" bg-base-200 px-10 pt-10">
            <div className='text-center'>
              <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold">Our Certifications</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 justify-items-center items-center p-5'>
              <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300'>
                <Flip><img className='lg:w-60 w-44 object-cover'  src={bcl} alt="" /></Flip>
              </div>
              <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300'>
                <Flip><img className='lg:w-60 w-44 object-cover'  src={cpi} alt="" /></Flip>
              </div>
              <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300'>
                <Flip><img className='lg:w-60 w-44 object-cover' src={alliance} alt="" /></Flip>
              </div>
              <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300'>
                <Flip><img className='lg:w-60 w-44 object-cover' src={oekotex} alt="" /></Flip>
              </div>
              <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300'>
                <Flip><img className='lg:w-60 w-44 object-cover' src={amforibsci} alt="" /></Flip>
              </div>
              <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300'>
                <Flip><img className='lg:w-60 w-44 object-cover' src={amforibepi} alt="" /></Flip>
              </div>
              
              <div className='mt-5 lg:col-span-3 md:col-span-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300'>
                <Flip><img className='lg:w-60 w-44 object-cover' src={rsc} alt="" /></Flip>
              </div>

            </div>
          </div>
          <Costing></Costing>
          <FireAndSafety></FireAndSafety>
        </div>
      </div>
    </div>
  );
};

export default Teams;
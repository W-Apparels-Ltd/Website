import React from 'react';
import sis1 from '../images/factory_purpose/888888.jpg'
import sis3 from '../images/factory_purpose/333333-1.jpg'
import building from '../images/factory_purpose/building.jpg'
import Nav2 from './Nav2';
import Footer from './Footer';
import { useEffect } from 'react';
const QualityBuilding = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <Nav2></Nav2>
    <div style={{
      backgroundImage:`linear-gradient(to bottom, rgba(135, 124, 201, 0.52), rgba(24, 22, 117, 0.73)), url(${sis1})`,
    }}  className= "  mx-auto w-full bg-cover bg-fixed bg-center bg-no-repeat shadow-lg">
      
      <div>
          <div className='p-20 text-center'><h1 className='lg:text-5xl text-3xl text-white font-bold mt-5'>Buildings and Occupants</h1></div>
          
      </div>
      <div className=' bg-base-100'>
     
            <div className="hero min-h-screen bg-base-200 lg:px-10 px-0">
              <div className="hero-content flex-col lg:flex-row">
                <img src={sis1} className="lg:max-w-lg w-full rounded-lg shadow-2xl" />
                <div className='lg:ps-5'>
                  <h1 className="lg:text-4xl text-3xl  font-bold">Quality Apparels</h1>
                  <p className="py-6 text-justify">Quality Apparels stands tall as a 9-story, 100% export-oriented factory that
              commenced its operations in September 1992. Situated in ( Harindhora, Hemayetpur, Savar, Dhaka ) Bangladesh, it has
              swiftly established itself as a compliant manufacturer of woven 
              garments.</p>
                  
                </div>
              </div>
            </div>
            
    </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default QualityBuilding;
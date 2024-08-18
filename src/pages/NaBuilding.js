import React from 'react';
import sis1 from '../images/factory_purpose/888888.jpg'
import sis3 from '../images/factory_purpose/333333-1.jpg'
import building from '../images/factory_purpose/building.jpg'
import Nav2 from './Nav2';
import Footer from './Footer';
import { useEffect } from 'react';
const NaBuilding = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <Nav2></Nav2>
    <div style={{
      backgroundImage:`linear-gradient(to bottom, rgba(135, 124, 201, 0.52), rgba(24, 22, 117, 0.73)), url(${sis3})`,
    }}  className= "  mx-auto w-full bg-cover bg-fixed bg-center bg-no-repeat shadow-lg">
      
      <div>
          <div className='p-20 text-center'><h1 className='lg:text-5xl text-3xl text-white font-bold mt-5'>Buildings and Occupants</h1></div>
          
      </div>
      <div className=' bg-base-100'>
          
            <div className="hero min-h-screen bg-base-200 lg:px-10 px-0">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={sis3} className="lg:max-w-xl w-full rounded-lg shadow-2xl" />
                <div>
                  <h1 className="lg:text-4xl text-3xl  font-bold">3NA Fashion</h1>
                  <p className="py-6 text-justify">The industry boasts an impressive annual production capacity, churning
              out 2.8 million pieces of woven garments and 2.6 million pieces of
              knitwear. This substantial output underscores the factory&#39;s
              commitment to meeting market demands. Furthermore, the facility is
              outfitted with advanced and state-of-the-art equipment, ensuring
              efficiency and quality throughout the manufacturing process.</p>
                  
                </div>
              </div>
            </div>
    </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default NaBuilding;
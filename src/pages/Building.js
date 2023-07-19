import React from 'react';
import sis1 from '../images/factory_purpose/888888.jpg'
import sis2 from '../images/factory_purpose/aftab-1.jpg'
import sis3 from '../images/factory_purpose/333333-1.jpg'
import building from '../images/factory_purpose/building.jpg'

const Building = () => {
  return (
    <div style={{
      backgroundImage:`linear-gradient(to bottom, rgba(135, 124, 201, 0.52), rgba(24, 22, 117, 0.73)), url(${building})`,
    }}  className= "  mx-auto w-full bg-cover bg-fixed bg-center bg-no-repeat shadow-lg">
      
      <div>
          <div className='p-20 text-center'><h1 className='lg:text-5xl text-3xl text-white font-bold mt-5'>Buildings and Occupants</h1></div>
          
      </div>
      <div className=' bg-base-100 lg:px-20'>
      <div className='p-10'>
        <div className=' grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
          <div className="card w-50 bg-base-100 shadow-xl">
            <figure><img src={building} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">W. apparels ltd.</h2>
              <p>Aftabunnesa Garments Ltd. is 9 storied 100% export oriented factory initiating its activities since September, 2019.....</p>
              <div className="card-actions justify-end">
                
              </div>
            </div>
          </div>
          <div className="card w-50 bg-base-100 shadow-xl">
            <figure><img src={sis1} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Quality apparels ltd.</h2>
              <p>Aftabunnesa Garments Ltd. is 9 storied 100% export oriented factory initiating its activities since September, 2019.....</p>
              <div className="card-actions justify-end">
                
              </div>
            </div>
          </div>
          <div className="card w-50 bg-base-100 shadow-xl">
            <figure><img src={sis3} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">3NA Fashion</h2>
              <p>The Industry has a yearly production capacity of 28,00,000 lakh pieces (2.8 million pieces) of woven-wear.....</p>
              <div className="card-actions justify-end">
                
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default Building;
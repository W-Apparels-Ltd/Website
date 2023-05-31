import React from 'react';
import sis1 from '../images/888888.jpg'
import sis2 from '../images/aftab-1.jpg'
import sis3 from '../images/333333-1.jpg'

const SisterConcern = () => {
  return (
    <div className=' min-h-screen  bg-base-100 lg:px-20'>  
      <div className='pb-20'>
          <div className='p-20 text-center'><h1 className='text-5xl text-primary font-bold'>Sister Concern</h1></div>
          <div className='px-20 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
          <div className="card w-50 bg-base-100 shadow-xl">
            <figure><img src={sis1} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Quality apparels ltd.</h2>
              <p>Aftabunnesa Garments Ltd. is 9 storied 100% export oriented factory initiating its activities since September, 2019.....</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-150">Read More</button>
              </div>
            </div>
          </div>
          <div className="card w-50 bg-base-100 shadow-xl">
            <figure><img src={sis2} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Aftabunessa Garments</h2>
              <p>Aftabunnesa Garments Ltd. is 9 storied 100% export oriented factory initiating its activities since September, 2019.....</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-150">Read More</button>
              </div>
            </div>
          </div>
          <div className="card w-50 bg-base-100 shadow-xl">
            <figure><img src={sis3} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">3NA Fashion</h2>
              <p>The Industry has a yearly production capacity of 28,00,000 lakh pieces (2.8 million pieces) of woven-wear.....</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover: duration-150">Read More</button>
              </div>
            </div>
          </div>
          
          </div>
      </div>
    </div>
  );
};

export default SisterConcern;
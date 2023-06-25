import React from 'react';
import pic1 from '../images/FireAndSafety/IMG_7258.JPG'
import pic2 from '../images/FireAndSafety/IMG_7269.JPG'
import pic3 from '../images/FireAndSafety/IMG_7281.JPG'

const FireAndSafety = () => {
  return (
    <div className='p-5'>
      <div className='text-center'>
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold">Fire and Safety</h1>
      </div>
      <div className=' bg-base-200 lg:px-20'>
      <div className='p-10'>
        <div className=' grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
          <div className="card w-50 bg-base-100 shadow-xl">
            <figure><img src={pic1} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Fire 1</h2>
              <p>Aftabunnesa Garments Ltd. is 9 storied 100% export oriented factory initiating its activities since September, 2019.....</p>
              <div className="card-actions justify-end">
                
              </div>
            </div>
          </div>
          <div className="card w-50 bg-base-100 shadow-xl">
            <figure><img src={pic2} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Fire 2</h2>
              <p>Aftabunnesa Garments Ltd. is 9 storied 100% export oriented factory initiating its activities since September, 2019.....</p>
              <div className="card-actions justify-end">
                
              </div>
            </div>
          </div>
          <div className="card w-50 bg-base-100 shadow-xl">
            <figure><img src={pic3} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Fire 3</h2>
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

export default FireAndSafety;
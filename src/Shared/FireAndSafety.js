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
            <figure className='rounded'><img src={pic1} alt="Shoes" /></figure>
            
          </div>
          <div className="card w-50 bg-base-100 shadow-xl">
            <figure className='rounded'><img src={pic2} alt="Shoes" /></figure>
            
          </div>
          <div className="card w-50 bg-base-100 shadow-xl">
            <figure className='rounded'><img src={pic3} alt="Shoes" /></figure>
            
          </div>

        </div>
        <div>
          <p className='text-md pt-5 text-justify'>
          Fire safety is a critical aspect of protecting lives, property, and the environment. It encompasses a set of practices and precautions designed to prevent fires, mitigate their impact, and ensure the safety of individuals in the event of a fire. W. apparels ltd. trying the best to understand fire behavior, implement preventive measures, and design effective emergency response plans what are the key components of fire safety. 
          <br/>W. Apparels Ltd. Properly maintains fire equipment. Because we know it is crucial for safeguarding lives and property, ensuring rapid response and effective fire control. We are trying the best to ensure the fire and safety issues.
          </p>
        </div>
      </div>
    </div>
      

    </div>
  );
};

export default FireAndSafety;
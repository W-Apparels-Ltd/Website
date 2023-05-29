import React from 'react';
import product1 from '../images/111111.jpg'
import product2 from '../images/33333-1.jpg'
import product3 from '../images/44444.png'
import product4 from '../images/66666-1.png'
import product5 from '../images/777777.jpg'
import product6 from '../images/egg.jpg'


const Facilities = () => {
  return (
    <div className=' min-h-screen  bg-base-100 lg:px-20'>  
      <div className='pb-20'>
          <div className='p-20 text-center'><h1 className='text-3xl font-bold'>Facilities</h1></div>
          <div className='px-20 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
          <div className="card w-50 bg-base-100 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300">
            <figure><img className='w-full' src={product1} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title justify-center">Safety Measures</h2>
            </div>
          </div>
          <div className="card w-50 bg-base-100 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300">
            <figure><img className='w-full' src={product2} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title justify-center">Medical Facilities</h2>
            </div>
          </div>
          <div className="card w-50 bg-base-100 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300">
            <figure><img className='w-full' src={product3} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title justify-center">Child care</h2>
              
            </div>
          </div>
          <div className="card w-50 bg-base-100 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300">
            <figure><img className='w-full' src={product4} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title justify-center">Fire Training</h2>
              
            </div>
          </div>
          <div className="card w-50 bg-base-100 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300">
            <figure><img className='w-full' src={product5} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title justify-center">First Aid Training</h2>
              
            </div>
          </div>
          <div className="card w-50 bg-base-100 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300">
            <figure><img className='w-full' src={product6} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title justify-center">Food Facilities</h2>
              
            </div>
          </div>
          
          </div>
      </div>
    </div>
  );
};

export default Facilities;
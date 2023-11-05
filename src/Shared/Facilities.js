import React from 'react';
import product1 from '../images/factory_purpose/trainnig.jpg'
import product2 from '../images/factory_purpose/medical (1).jpg'
import product3 from '../images/factory_purpose/cc.jpg'
import product4 from '../images/factory_purpose/66666-1.png'
import product5 from '../images/factory_purpose/777777.jpg'
import product6 from '../images/factory_purpose/medical (2).jpg'
import { Link } from 'react-router-dom';


const Facilities = () => {
  return (
    <div id='facilities' className=' min-h-screen  bg-base-100 lg:px-20 pb-10 font-Nunito'>
      <div className='pb-20'>
        <div className='pb-10 text-center'><h1 className='lg:text-4xl text-2xl md:text-3xl text-primary font-bold'>Facilities</h1></div>
        <div className='px-20 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8'>
          <Link  to='/safetymeasures'>
          <div className="card w-50 bg-base-100 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300">
              <figure><img className='w-full' src={product1} alt="Shoes" /></figure>
              <div className='my-3'>
                <h2 className="card-title justify-center text-md font-bold">Safety Measures</h2>
              </div>
          </div>
          </Link>
          <Link to='/medicalfacilities'>
            <div className="card w-50 bg-base-100 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300">
                <figure><img className='w-full' src={product2} alt="Shoes" /></figure>
                  <div className='my-3'>
                    <h2 className="card-title justify-center text-md font-bold">Medical Facilities</h2>
                  </div>
            </div>
          </Link>
          <Link to='/childcare'>
            <div className="card w-50 bg-base-100 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300">
              <figure><img className='w-full' src={product3} alt="Shoes" /></figure>
                <div className='my-3'>
                  <h2 className="card-title justify-center text-md font-bold">Child care</h2>

                </div>
            </div>
          </Link>
          <Link to='/firetraining'>
            <div className="card w-50 bg-base-100 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300">
              <figure><img className='w-full' src={product4} alt="Shoes" /></figure>
                <div className='my-3'>
                  <h2 className="card-title justify-center text-md font-bold">Fire Training</h2>

                </div>
            </div>
          </Link>
          <Link to='/firstaidtraining'>
            <div className="card w-50 bg-base-100 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300">
              <figure><img className='w-full' src={product5} alt="Shoes" /></figure>
              <div className='my-3'>
                <h2 className="card-title justify-center text-md font-bold">First Aid Training</h2>

              </div>
            </div>
          </Link>
          <Link to='/foodfacilities'>
          <div className="card w-50 bg-base-100 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300">
            <figure><img className='w-full' src={product6} alt="Shoes" /></figure>
              <div className='my-3'>
                <h2 className="card-title justify-center text-md font-bold">Food Facilities</h2>

              </div>
          </div>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Facilities;

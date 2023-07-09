import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../images/costing1.webp'
import pic2 from '../images/costing2.webp'
import { Button } from '@material-tailwind/react';

const Costing = () => {
  return (
    <div className='p-5'>
      <div className='text-center'>
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold mt-5">Costing</h1>
      </div>
      <div className=' bg-base-200 lg:px-20'>
      <div className='p-10'>
        <div className=' grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5'>
          <div className="card w-50 bg-base-100 shadow-xl">
            <figure><img src={pic1} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Fast Costing</h2>
              <p>Costing is the process to estimate the total cost of apparel manufacturing. </p>
              <div className="card-actions justify-end">
              <Link to='/costing'><Button>Calculate</Button></Link>
              </div>
            </div>
          </div>
          <div className="card w-50 bg-base-100 shadow-xl">
            <figure><img src={pic2} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Final Costing</h2>
              <p>Costing is the process to estimate the total cost of apparel manufacturing. </p>
              <div className="card-actions justify-end">
              <Link to='/costing'><Button>Calculate</Button></Link>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
      

    </div>
  );
};

export default Costing;
import React from 'react';
import { Link } from 'react-router-dom';

const Costing = () => {
  return (
    <div className='p-5'>
      <div className='text-center'>
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold">Costing</h1>
      </div>
      <div className='text-center'>
            <Link to='/costing' className="btn btn-primary">Costing</Link>
      </div>

    </div>
  );
};

export default Costing;
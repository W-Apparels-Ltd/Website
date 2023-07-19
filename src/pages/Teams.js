import React from 'react';
import pic from '../images/factory_purpose/1.jpg'

import Costing from '../Shared/Costing';
import FireAndSafety from '../Shared/FireAndSafety';


const Teams = () => {
  return (
    <div style={{
      backgroundImage:`linear-gradient(to bottom, rgba(135, 124, 201, 0.52), rgba(24, 22, 117, 0.73)), url(${pic})`,
    }}  className= "  mx-auto w-full bg-cover bg-fixed bg-center bg-no-repeat shadow-lg">  
      <div>
          <div className='p-20 text-center'><h1 className='lg:text-4xl md:text-3xl text-2xl text-white font-bold mt-5'>Welcome to The Teamsite of W Apparels Ltd.</h1></div>
          
      </div>
      <div className='lg:mt-20 mt-5 rounded-xl'>
      <div className='bg-base-200 '>
          
          <Costing></Costing>
          <FireAndSafety></FireAndSafety>
        </div>
      </div>
    </div>
  );
};

export default Teams;
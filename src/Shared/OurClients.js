import React from 'react';
import client1 from '../images/clients/BlueSeven_logo.png'
import client2 from '../images/clients/hellenic_logo.png'
import client3 from '../images/clients/pep_and_co_logo.png'
import client4 from '../images/clients/woolworth_logo.png'

const OurClients = () => {
  return (
    <div className=' bg-base-100 '>
      <div>
        <div className='p-15 text-center'><h1 className='text-5xl font-bold text-primary'>Our clients</h1></div>
        <div className='px-20 grid grid-cols-4 gap-5 justify-items-center items-center'>
          <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 '>
            <img src={client1} alt="" />
          </div>
          <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 '>
            <img src={client2} alt="" />
          </div>
          <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 '>
            <img src={client3} alt="" />
          </div>
          <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 '>
            <img src={client4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;

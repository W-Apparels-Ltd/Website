import React from 'react';
import client1 from '../images/w-w-300x300-1-removebg-preview.png'
import client2 from '../images/333333333-removebg-preview.png'
import client3 from '../images/1111111-removebg-preview.png'
import client4 from '../images/22222222222-150x144-removebg-preview.png'

const OurClients = () => {
  return (
    <div className=' bg-base-100 '>  
      <div>
          <div className='p-5 text-center'><h1 className='text-5xl font-bold text-primary'>Our clients</h1></div>
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
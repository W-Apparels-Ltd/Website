import React, { useState } from 'react';
import career from '../images/career.jpg'
import { Link } from 'react-router-dom';

const Career = () => {
  const [active,setactive]=useState(false);
  return (
    <div style={{
      backgroundImage:`linear-gradient(to bottom, rgba(135, 124, 201, 0.52), rgba(24, 22, 117, 0.73)), url(${career})`,
    }}  className= "  mx-auto w-full bg-cover bg-fixed bg-center bg-no-repeat shadow-lg font-Nunito">  
      <div>
         <div className='p-20 text-center'><h1 className='lg:text-5xl text-3xl text-white font-bold mt-5'>View Current Openings</h1></div>
      </div>
      {
        active ? 
        <div className='mt-20  bg-base-100'>
        <ul role="list" className="divide-y divide-gray-300">
          <li className="flex flex-col lg:flex-row justify-between gap-x-6 py-5 px-20">
            <div className="flex gap-x-4">
              <div className="min-w-0 flex-auto mb-2">
                <p className="text-xl font-bold leading-6 text-gray-900">Junior Software Developer <span className='text-[green]'>(On-site)</span></p>
                <p className="text-sm font-bold leading-6 text-gray-900">Company: Quality Group Ltd.</p>
                <p className="mt-1  truncate text-sm font-bold leading-5 text-gray-500">Rayer Bazar, Tali office Rd, Dhaka, Bangladesh</p>
              </div>
            </div>
            <div className="sm:flex sm:flex-col sm:items-end">
              <Link to='/careerForm'><button className=' btn btn-primary text-white'>Details</button></Link>  
            </div>
          </li>
          <li className="flex flex-col lg:flex-row justify-between gap-x-6 py-5 px-20">
            <div className="flex gap-x-4">
              
              <div className="min-w-0 flex-auto mb-2">
                <p className="text-xl font-bold leading-6 text-gray-900">Junior Software Developer <span className='text-[green]'>(Remote)</span></p>
                <p className="text-sm font-bold leading-6 text-gray-900">Company: Quality Group Ltd.</p>
                <p className="mt-1  truncate text-sm font-bold leading-5 text-gray-500">Rayer Bazar, Tali office Rd, Dhaka, Bangladesh</p>
              </div>
            </div>
            <div className=" sm:flex sm:flex-col sm:items-end">
              <Link to='/careerForm'><button className=' btn btn-primary text-white'>Details</button></Link>
              
            </div>
          </li>
          <li className="flex flex-col lg:flex-row justify-between gap-x-6 py-5 px-20">
            <div className="flex gap-x-4">
              
              <div className="min-w-0 flex-auto mb-2">
                <p className="text-xl font-bold leading-6 text-gray-900">Junior Software Developer <span className='text-[green]'>(Remote)</span></p>
                <p className="text-sm font-bold leading-6 text-gray-900">Company: Quality Group Ltd.</p>
                <p className="mt-1  truncate text-sm font-bold leading-5 text-gray-500">Rayer Bazar, Tali office Rd, Dhaka, Bangladesh</p>
              </div>
            </div>
            <div className=" sm:flex sm:flex-col sm:items-end">
            <Link to='/careerForm'><button className=' btn btn-primary text-white'>Details</button></Link>
              
              
            </div>
          </li>
      
      </ul>
      </div>
      :
      <div className='mt-20  bg-base-100'>
        <div className='text-center p-20'><p className="text-xl font-bold leading-6 text-gray-900"><span className='text-[green]'>Sorry</span>, No Current Openings</p>
        </div>
      </div>
      }
    </div>
  );
};

export default Career;
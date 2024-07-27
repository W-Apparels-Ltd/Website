import React from 'react';
import D1 from '../images/personnel/team-2.png'
import D2 from '../images/personnel/team-3-removebg-preview.jpg'
import D3 from '../images/personnel/team-4.jpg'
const OurFactoryComponent = () => {
  return (
    <div className=' bg-base-100 py-20 font-Nunito'>
        <div className='lg:p-15 text-center'><h1 className='lg:text-4xl text-2xl md:text-3xl font-bold text-primary'>Our Factory Component</h1></div>

        <div className='mx-20 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-0 justify-items-center justify-center'>
                <div className=' my-5 cursor-pointer group'>
                  
                  <div className='grid justify-items-center mt-10 relative max-w-xs overflow-hidden bg-cover bg-no-repeat '>
                      <img className='w-52 h-80 object-cover transition duration-700 ease-in-out hover:scale-125' src={D1} alt="" />
                  </div>
                  <div className='my-2'>
                    <a className=" text-xl group text-gray-700 font-bold">Operation & Admin
                    <div className='bg-amber-500 h-[2px] w-0 group-hover:w-3/4 transition-all duration-500'></div>
                    </a>
                    
                  </div>

                </div>
                
                <div className=' my-5 cursor-pointer group'>
                  
                  <div className='grid justify-items-center mt-10 relative max-w-xs overflow-hidden bg-cover bg-no-repeat '>
                      <img className='w-52 h-80 object-cover transition duration-700 ease-in-out hover:scale-125' src={D1} alt="" />
                  </div>
                  <div className='my-2'>
                    <a className=" text-xl group text-gray-700 font-bold">Operation & Admin
                    <div className='bg-amber-500 h-[2px] w-0 group-hover:w-3/4 transition-all duration-500'></div>
                    </a>
                    
                  </div>

                </div>
                
                <div className=' my-5 cursor-pointer group'>
                  
                  <div className='grid justify-items-center mt-10 relative max-w-xs overflow-hidden bg-cover bg-no-repeat '>
                      <img className='w-52 h-80 object-cover transition duration-700 ease-in-out hover:scale-125' src={D1} alt="" />
                  </div>
                  <div className='my-2'>
                    <a className=" text-xl group text-gray-700 font-bold">Operation & Admin
                    <div className='bg-amber-500 h-[2px] w-0 group-hover:w-3/4 transition-all duration-500'></div>
                    </a>
                    
                  </div>

                </div>
                
                <div className=' cursor-pointer group'>
                  
                  <div className='grid justify-items-center mt-5 relative max-w-xs overflow-hidden bg-cover bg-no-repeat '>
                      <img className='w-52 h-80 object-cover transition duration-700 ease-in-out hover:scale-125' src={D1} alt="" />
                  </div>
                  <div className='my-2'>
                    <a className=" text-xl group text-gray-700 font-bold">Operation & Admin
                    <div className='bg-amber-500 h-[2px] w-0 group-hover:w-3/4 transition-all duration-500'></div>
                    </a>
                    
                  </div>

                </div>
                
                <div className=' my-5 cursor-pointer group'>
                  
                  <div className='grid justify-items-center mt-10 relative max-w-xs overflow-hidden bg-cover bg-no-repeat '>
                      <img className='w-52 h-80 object-cover transition duration-700 ease-in-out hover:scale-125' src={D1} alt="" />
                  </div>
                  <div className='my-2'>
                    <a className=" text-xl group text-gray-700 font-bold">Operation & Admin
                    <div className='bg-amber-500 h-[2px] w-0 group-hover:w-3/4 transition-all duration-500'></div>
                    </a>
                    
                  </div>

                </div>
                
                
              </div>
    
    </div>
  );
};

export default OurFactoryComponent;
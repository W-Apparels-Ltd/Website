import React from 'react';
import D1 from '../images/factoryComponant/1.Fabric Inspection.jpg'
import D2 from '../images/factoryComponant/2.Sewing.jpg'
import D3 from '../images/factoryComponant/3.Cutting.jpg'
import D4 from '../images/factoryComponant/4.Quality Assurance.jpg'
import D5 from '../images/factoryComponant/5.Sustainability & Development.jpg'
import D6 from '../images/factoryComponant/6.PACKAGING.jpg'

const OurFactoryComponent = () => {
  return (
    <div className=' bg-base-100 py-20 font-Nunito'>
        <div className='lg:p-15 text-center'><h1 className='lg:text-4xl text-2xl md:text-3xl font-bold text-primary'>Our Factory Component</h1></div>

        <div className='mx-20 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-2 justify-items-center justify-center'>
                <div className=' lg:my-10 my-5  cursor-pointer group'>
                  
                  <div className='grid justify-items-center mt-10 relative max-w-xs overflow-hidden bg-cover bg-no-repeat '>
                      <img className='w-52 h-80 object-cover transition duration-700 ease-in-out hover:scale-125' src={D1} alt="" />
                  </div>
                  <div className='my-2'>
                    <a className=" text-xl group text-gray-700 font-bold">Fabric Inspection
                    <div className='bg-amber-500 h-[2px] w-0 group-hover:w-3/4 transition-all duration-500'></div>
                    </a>
                    
                  </div>

                </div>
                
                <div className=' lg:my-10 my-5  cursor-pointer group'>
                  
                  <div className='grid justify-items-center mt-10 relative max-w-xs overflow-hidden bg-cover bg-no-repeat '>
                      <img className='w-52 h-80 object-cover transition duration-700 ease-in-out hover:scale-125' src={D2} alt="" />
                  </div>
                  <div className='my-2'>
                    <a className=" text-xl group text-gray-700 font-bold">Sewing
                    <div className='bg-amber-500 h-[2px] w-0 group-hover:w-2/5 transition-all duration-500'></div>
                    </a>
                    
                  </div>

                </div>
                
          

                <div className=' lg:my-10 my-5  cursor-pointer group'>
                  
                  <div className='grid justify-items-center mt-10 relative max-w-xs overflow-hidden bg-cover bg-no-repeat '>
                      <img className='w-52 h-80 object-cover transition duration-700 ease-in-out hover:scale-125' src={D3} alt="" />
                  </div>
                  <div className='my-2'>
                    <a className=" text-xl group text-gray-700 font-bold">Cutting
                    <div className='bg-amber-500 h-[2px] w-0 group-hover:w-2/5 transition-all duration-500'></div>
                    </a>
                    
                  </div>

                </div>
                
                <div className='lg:my-10 my-5 cursor-pointer group'>
                  
                  <div className='grid justify-items-center mt-10 relative max-w-xs overflow-hidden bg-cover bg-no-repeat '>
                      <img className='w-52 h-80 object-cover transition duration-700 ease-in-out hover:scale-125' src={D4} alt="" />
                  </div>
                  <div className='my-2'>
                    <a className=" text-xl group text-gray-700 font-bold">Quality Assurance
                    <div className='bg-amber-500 h-[2px] w-0 group-hover:w-3/4 transition-all duration-500'></div>
                    </a>
                    
                  </div>

                </div>
                
                <div className='lg:my-0 my-5 cursor-pointer group'>
                  
                  <div className='grid justify-items-center mt-10 relative max-w-xs overflow-hidden bg-cover bg-no-repeat '>
                      <img className='w-52 h-80 object-cover transition duration-700 ease-in-out hover:scale-125' src={D5} alt="" />
                  </div>
                  <div className='my-2 text-center flex justify-start'>
                    <a className=" text-xl group text-gray-700 font-bold">Sustainability<br/> & <br/> Development
                    <div className='bg-amber-500 h-[2px] w-0 group-hover:w-3/4 transition-all duration-500'></div>
                    </a>
                    
                  </div>

                </div>
                <div className=' lg:my-10 my-5  cursor-pointer group'>
                  
                  <div className='grid justify-items-center mt-10 relative max-w-xs overflow-hidden bg-cover bg-no-repeat '>
                      <img className='w-52 h-80 object-cover transition duration-700 ease-in-out hover:scale-125' src={D6} alt="" />
                  </div>
                  <div className='my-2'>
                    <a className=" text-xl group text-gray-700 font-bold">Packaging
                    <div className='bg-amber-500 h-[2px] w-0 group-hover:w-2/4 transition-all duration-500'></div>
                    </a>
                    
                  </div>

                </div>
                
                
              </div>
    
    </div>
  );
};

export default OurFactoryComponent;
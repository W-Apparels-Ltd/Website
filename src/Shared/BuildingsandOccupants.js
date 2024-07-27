import React from 'react';
import img from '../images/factory_purpose/building.jpg'
import img1 from '../images/factory_purpose/888888.jpg'
import img2 from '../images/factory_purpose/333333-1.jpg'
import { Link } from 'react-router-dom';
const BuildingAndOccupation = () => {
  return (
    <div className=' bg-base-100 py-10 font-Nunito'>
    <div className='lg:p-15 text-center mb-10'><h1 className='lg:text-4xl text-2xl md:text-3xl font-bold text-primary'>Buildings and Occupants</h1></div>

    <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-0 justify-items-center justify-center'>

          <div className="relative flex items-center justify-center m-3 overflow-hidden shadow-xl w-full h-80 group bg-cover cursor-pointer group">
            <img className='absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover group-hover:scale-150' src={img} alt="" />
            <div className='bg-black/75 h-full w-full opacity-50'></div>
            <Link to='/building'>
            <div
        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/50 bg-fixed opacity-0 transition duration-300 ease-in-out group-hover:opacity-50"></div>
            </Link>
            <h1 className="absolute text-2xl font-black transition-all duration-500 ease-in-out transform scale-150 text-white opacity-90 group-hover:scale-100">W. Apparels Ltd.</h1>
          </div>
          <div className="relative flex items-center justify-center m-3 overflow-hidden shadow-xl w-full h-80 group bg-cover cursor-pointer group">
            <img className='absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover group-hover:scale-150' src={img1} alt="" />
            <div className='bg-black/75 h-full w-full opacity-50'></div>
            <Link to='/building'>
            <div
        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/50 bg-fixed opacity-0 transition duration-300 ease-in-out group-hover:opacity-50"></div>
            </Link>
            <h1 className="absolute text-2xl font-black transition-all duration-500 ease-in-out transform scale-150 text-white opacity-90 group-hover:scale-100">Quality Apparels</h1>
          </div>
          <div className="relative flex items-center justify-center m-3 overflow-hidden shadow-xl w-full h-80 group bg-cover cursor-pointer group">
            <img className='absolute w-full h-full transition-all duration-500 ease-in-out transform bg-center bg-cover group-hover:scale-150' src={img2} alt="" />
            <div className='bg-black/75 h-full w-full opacity-50'></div>
            <Link to='building'>
            <div
        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/50 bg-fixed opacity-0 transition duration-300 ease-in-out group-hover:opacity-50"></div>
            </Link>
            <h1 className="absolute text-2xl font-black transition-all duration-500 ease-in-out transform scale-150 text-white opacity-90 group-hover:scale-100">3NA Fashion</h1>
          </div>
          
                
            
            
            
          </div>

</div>
  );
};

export default BuildingAndOccupation;

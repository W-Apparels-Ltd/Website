import React from 'react';
import img from '../images/factory_purpose/333333.jpg'
import grp from '../images/personnel/GroupPic.jpg'
import arrow from '../images/Untitled__1_-removebg-preview.png'

const CorporateViewpoint = () => {
  return (
    <div className='w-full bg-cover bg-top '
    style={{
      backgroundImage:` url(${grp})`,
    }}  
    >
      
      <div className='hero bg-black/60 min-h-screen font-Nunito'>
      <div className='text-center pt-10'><h1 className='lg:text-5xl text-3xl font-bold text-white'>Corporate Viewpoint</h1>
                <p className="pt-6 lg:px-20 px-5 text-white lg:text-xl text-md">
                W. Apparels Ltd is among one of the most successful garment manufacturers in Bangladesh; a country with great potential in the field of garment-manufacturing. It started its journey in the year 1992. W. Apparels Ltd has passed over 17 successful years of accomplishment, aiming to lead the competitive knit/Woven/Non-Woven wear-organizations of Bangladesh. It has arduously reengineered each step of its value-chain to match the dynamism of the fashion market. W. Apparels Ltd has expanded its capacity, developed a skilled workforce and introduced integrated technologies, to remain globally up-to-date. It is truly an organization with a glorious past and a bright future.</p>  
                <div className='flex flex-row-reverse'> 
                  <button className='btn btn-ghost text-white font-bold mt-20 lg:me-5 md:me-5'>Meet Our Team
                  <span className=" w-12 transition-colors group-hover:bg-[#000066]">
                  <img src={arrow}></img>
                  </span>
                  </button>  
                </div>
      </div>
      
    </div>
      </div>
  );
};

export default CorporateViewpoint;

import React from 'react';
import img from '../images/factory_purpose/33333-1.jpg'

const CorporateViewpoint = () => {
  return (
    <div>
      <div className="hero lg:min-h-screen bg-red-50 px-20">
        <div className="hero-content flex-col lg:flex-row lg:items-center">
          <img src={img} className="w-2/5 rounded-lg shadow-2xl" />
          <div className='ps-20'>
            <h1 className="text-5xl text-primary  font-bold">Corporate Viewpoint</h1>
            <p className="py-6 text-xl">
              W. Apparels Ltd is among one of the most successful garment manufacturers in Bangladesh; a country with great potential in the field of garment-manufacturing. It started its journey in the year 1992. W. Apparels Ltd has passed over 17 successful years of accomplishment, aiming to lead the competitive knit/Woven/Non-Woven wear-organizations of Bangladesh. It has arduously reengineered each step of its value-chain to match the dynamism of the fashion market. W. Apparels Ltd has expanded its capacity, developed a skilled workforce and introduced integrated technologies, to remain globally up-to-date. It is truly an organization with a glorious past and a bright future.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateViewpoint;

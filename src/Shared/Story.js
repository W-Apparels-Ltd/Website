import React from 'react';
import img from '../images/factory_purpose/ourstory-300x225-1.jpg'

const Story = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-[#e5e4e2] px-20">
        <div className="hero-content flex-col lg:flex-row lg:items-center">
          <img src={img} className="w-2/5 rounded-lg shadow-2xl" />
          <div className='ps-20'>
            <h1 className="text-5xl text-primary font-bold">Our Story</h1>
            <p className="py-6 text-xl">Starting as W. Apparels in 1992 and further expanding into W. Apparels Limited in 2019, we are a garments based company maintaining a consistent contribution in readymade garments export. Our team comprises of well experienced promoters, quality control agents, machinists, commercial supervisors and production labor. Our goals are to maintain better foreign relations and establish a research intensive environment for garments products, maintaining consistent customer satisfaction and using updated machinery. Under the alliance of Bangladesh Garments Manufacturers and Exporters’ Association (BGMEA), we envision a sustainable future of RMG products using technology and a smooth international market.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;

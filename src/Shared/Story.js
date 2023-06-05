import React from 'react';
import img from '../images/factory_purpose/ourstory-300x225-1.jpg'
import pic from '../images/factory_purpose/1.jpg'

const Story = () => {
  return (
    <div>
      <div style={{
      backgroundImage:`linear-gradient(to bottom, rgba(135, 124, 201, 0.52), rgba(24, 22, 117, 0.73)), url(${pic})`,
    }}  className="hero min-h-screen px-20 mx-auto w-full bg-cover bg-fixed bg-center bg-no-repeat">
        <div className="flex justify-between items-center  text-white">
          
          <img src={img} className="w-1/2 mask mask-hexagon  shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300" />

          <div>
            <h1 className="text-5xl font-bold">Our Story</h1>
            <p className="py-6 text-xl">Starting as W. Apparels in 1992 and further expanding into W. Apparels Limited in 2019, we are a garments based company maintaining a consistent contribution in readymade garments export. Our team comprises of well experienced promoters, quality control agents, machinists, commercial supervisors and production labor. Our goals are to maintain better foreign relations and establish a research intensive environment for garments products, maintaining consistent customer satisfaction and using updated machinery. Under the alliance of Bangladesh Garments Manufacturers and Exporters’ Association (BGMEA), we envision a sustainable future of RMG products using technology and a smooth international market.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;

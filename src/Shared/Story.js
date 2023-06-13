import React from 'react';
import img from '../images/factory_purpose/ourstory-300x225-1.jpg'
import pic from '../images/factory_purpose/1.jpg'
import o2 from '../images/Our1 (1).jpg'
import o3 from '../images/our2 (1).jpg'

const Story = () => {
  return (
    <div id='aboutus'>
      <div style={{
      backgroundImage:`linear-gradient(to bottom, rgba(135, 124, 201, 0.52), rgba(24, 22, 117, 0.73)), url(${pic})`,
    }}  className="hero min-h-screen lg:px-20 px-5 mx-auto w-full bg-cover bg-fixed bg-center bg-no-repeat">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center  text-white">
          
          <div className='flex flex-col items-center'>

            <img src={img} className="w-44 h-44 lg:w-60 lg:h-60 object-cover relative lg:-right-[130px] lg:-bottom-[40px] mask mask-hexagon  shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 my-5 lg:my-0" />
            <img src={o2} className="w-44 h-44 lg:w-60 lg:h-60 object-cover mask mask-hexagon  shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300" />
            <img src={o3} className="w-44 h-44 lg:w-60 lg:h-60 object-cover relative lg:-right-[130px] lg:-top-[40px]  mask mask-hexagon  shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 my-5 lg:my-0" />
          </div>

          <div className='lg:w-3/5'>
            <h1 className="lg:text-5xl text-2xl md:text-3xl font-bold">Our Story</h1>
            <p className="py-6 lg:text-xl text-md">Starting as W. Apparels in 1992 and further expanding into W. Apparels Limited in 2019, we are a garments based company maintaining a consistent contribution in readymade garments export. Our team comprises of well experienced promoters, quality control agents, machinists, commercial supervisors and production labor. Our goals are to maintain better foreign relations and establish a research intensive environment for garments products, maintaining consistent customer satisfaction and using updated machinery. Under the alliance of Bangladesh Garments Manufacturers and Exporters’ Association (BGMEA), we envision a sustainable future of RMG products using technology and a smooth international market.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;

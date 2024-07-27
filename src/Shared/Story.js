import React from 'react';
import img from '../images/personnel/WhatsApp Image 2023-11-16 at 10.44.02_6e0b97c7 (1).jpg'
import pic from '../images/factory_purpose/1.jpg'
import o2 from '../images/imresizer-1706175361847.jpg'
import o3 from '../images/our2 (1).jpg'
import arrow from '../images/Untitled__1_-removebg-preview.png'
import { Link } from 'react-router-dom';
import pdf from '../pdf/WapparelsPDF.pdf'

const Story = () => {
  const downloadPdf = () => {
    fetch('WapparelsPDF.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'WapparelsPDF.pdf';
            alink.click();
        })
    })
}
  return (
    <div id='aboutus'>
      <div style={{
      backgroundImage:`linear-gradient(to bottom, rgba(135, 124, 201, 0.52), rgba(24, 22, 117, 0.73)), url(${pic})`,
    }}  className="hero min-h-screen lg:py-0 py-5 lg:px-20 px-5 mx-auto w-full bg-cover bg-fixed bg-center bg-no-repeat">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center  text-white font-Nunito">
          
          <div className='flex flex-col items-center'>

            <img src={img} className="w-44 h-44 lg:w-60 lg:h-60 object-cover relative lg:-right-[130px] lg:-bottom-[40px] mask mask-hexagon  shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300" />
            <div className='flex lg:hidden'>
            <img src={o3} className="w-40 h-40 md:w-48 md:h-48  lg:w-60 lg:h-60 object-cover relative -top-[30px] -left-[15px] mask mask-hexagon  shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300" />
            <img src={o2} className="w-40 h-40 md:w-48 md:h-48  lg:w-60 lg:h-60 object-cover relative -top-[30px] -right-[15px]  mask mask-hexagon  shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300" />
            </div>
            <div className='hidden lg:block'>
            <img src={o3} className="w-44 h-44 lg:w-60 lg:h-60 object-cover mask mask-hexagon  shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300" />
            <img src={o2} className="w-44 h-44 lg:w-60 lg:h-60 object-cover relative lg:-right-[130px] lg:-top-[40px]  mask mask-hexagon  shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 my-5 lg:my-0" />
            </div>
          </div>

          <div className='lg:w-3/5'>
            <h1 className="lg:text-5xl text-2xl md:text-3xl font-bold">Our Story</h1>
            <p className="py-6 lg:text-xl text-md text-justify">Starting as W. Apparels in 1992 and further expanding into W. Apparels Limited in 2019, we are a garments based company maintaining a consistent contribution in readymade garments export. Our team comprises of well experienced promoters, quality control agents, machinists, commercial supervisors and production labor. Our goals are to maintain better foreign relations and establish a research intensive environment for garments products, maintaining consistent customer satisfaction and using updated machinery. Under the alliance of Bangladesh Garments Manufacturers and Exporters’ Association (BGMEA), we envision a sustainable future of RMG products using technology and a smooth international market.</p>
            
            <div className='flex justify-end'>
          
            <Link  to={pdf} target='_blank' rel='noreferrer'
              className="group "
              
            >
              
              <button className='mb-12 lg:mb-0 text-white lg:ms-5 md:ms-5'>
                  <div className='flex items-center'>
                    <h1 className='text-md font-bold'>View Corporate Profile
                    <div className='bg-white h-[2px] w-0 group-hover:w-full transition-all duration-500'></div>
                    </h1>
                  
                    <img className='w-12' src={arrow}></img>
                  </div>
                  
                 
            </button> 
            </Link>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;

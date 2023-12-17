import React from 'react';
import img from '../images/personnel/WhatsApp Image 2023-11-16 at 10.44.02_6e0b97c7 (1).jpg'
import pic from '../images/factory_purpose/1.jpg'
import o2 from '../images/WhatsApp Image 2023-11-16 at 15.33.27_b1395d02.jpg'
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
              class="group relative flex select-none items-center gap-3 overflow-hidden rounded-lg bg-[#000066] py-3 px-7 pr-[72px] text-center align-middle text-sm font-bold uppercase text-white shadow-md shadow-light-blue-500/20 transition-all hover:shadow-lg active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-nonegroup relative flex select-none items-center gap-3 overflow-hidden rounded-lg bg-gradient-to-tr from-light-blue-900 to-sky-900 py-2 px-5 pr-[72px] text-center align-middle text-sm font-bold uppercase text-white shadow-md shadow-light-indigo-500/20 transition-all hover:shadow-lg hover:shadow-light-blue-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              View Corporate Profile
              <span className="absolute right-0 grid h-full w-12 place-items-center bg-[#00004d] transition-colors group-hover:bg-[#000066]">
                <img src={arrow}></img>
              </span>
            </Link>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;

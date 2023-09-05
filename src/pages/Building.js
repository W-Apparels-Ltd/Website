import React from 'react';
import sis1 from '../images/factory_purpose/888888.jpg'
import sis2 from '../images/factory_purpose/aftab-1.jpg'
import sis3 from '../images/factory_purpose/333333-1.jpg'
import building from '../images/factory_purpose/building.jpg'
import Nav2 from './Nav2';

const Building = () => {
  return (
    <>
    <Nav2></Nav2>
    <div style={{
      backgroundImage:`linear-gradient(to bottom, rgba(135, 124, 201, 0.52), rgba(24, 22, 117, 0.73)), url(${building})`,
    }}  className= "  mx-auto w-full bg-cover bg-fixed bg-center bg-no-repeat shadow-lg">
      
      <div>
          <div className='p-20 text-center'><h1 className='lg:text-5xl text-3xl text-white font-bold mt-5'>Buildings and Occupants</h1></div>
          
      </div>
      <div className=' bg-base-100'>
      <div className="hero min-h-screen bg-base-200 lg:px-10 px-0">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={building} className="lg:max-w-xl w-full rounded-lg shadow-2xl" />
                <div>
                  <h1 className="lg:text-4xl text-3xl  font-bold">W. apparels ltd.</h1>
                  <p className="py-6 text-justify">W. Apparels Ltd is among one of the most successful garment
                manufacturers in Bangladesh; a country with great potential in the field of
                garment-manufacturing. It started its journey in the year 1992. W. Apparels
                Ltd has passed over 17 successful years of accomplishment, aiming to
                lead the competitive knit/Woven/Non-Woven wear-organizations of
                Bangladesh. It has arduously reengineered each step of its value-chain to
                match the dynamism of the fashion market. W. Apparels Ltd has expanded
                its capacity, developed a skilled workforce and introduced integrated
                technologies, to remain globally up-to-date. It is truly an organization with a
                glorious past and a bright future.</p>
                  
                </div>
              </div>
            </div>
            <div className="hero min-h-screen bg-base-200 lg:px-10 px-0">
              <div className="hero-content flex-col lg:flex-row">
                <img src={sis1} className="lg:max-w-lg w-full rounded-lg shadow-2xl" />
                <div className='lg:ps-5'>
                  <h1 className="lg:text-4xl text-3xl  font-bold">Quality apparels ltd.</h1>
                  <p className="py-6 text-justify">Quality Apparels Ltd. stands tall as a 9-story, 100% export-oriented factory that
              commenced its operations in September 2019. Situated in Bangladesh, it has
              swiftly established itself as a compliant manufacturer of woven and knitwear
              garments.</p>
                  
                </div>
              </div>
            </div>
            <div className="hero min-h-screen bg-base-200 lg:px-10 px-0">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={sis3} className="lg:max-w-xl w-full rounded-lg shadow-2xl" />
                <div>
                  <h1 className="lg:text-4xl text-3xl  font-bold">3NA Fashion</h1>
                  <p className="py-6 text-justify">The industry boasts an impressive annual production capacity, churning
              out 2.8 million pieces of woven garments and 2.6 million pieces of
              knitwear. This substantial output underscores the factory&#39;s
              commitment to meeting market demands. Furthermore, the facility is
              outfitted with advanced and state-of-the-art equipment, ensuring
              efficiency and quality throughout the manufacturing process.</p>
                  
                </div>
              </div>
            </div>
    </div>
    </div>
    
    </>
  );
};

export default Building;
import React from 'react';
import img from '../images/factory_purpose/building.jpg'
import img1 from '../images/factory_purpose/888888.jpg'
import img2 from '../images/factory_purpose/333333-1.jpg'
import { Link } from 'react-router-dom';
import '../Shared/BuildingandOccupants.css'

const BuildingsandOccupants = () => {
  return (
    <div>
      <div  className="hero min-h-screen lg:px-20 px-5 mx-auto w-full bg-base-100">
        <div className="flex flex-col lg:items-end lg:flex-row-reverse lg:justify-between lg:items-center  text-primary">
          
          <div className='flex flex-col items-center'>

          <img src={img} className="w-44 h-44 lg:w-60 lg:h-60  object-cover relative lg:-left-[130px] lg:-bottom-[40px] mask mask-hexagon  shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 my-5 lg:my-0" />
          <img src={img1} className="w-44 h-44 lg:w-60 lg:h-60  object-cover mask mask-hexagon  shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300" />
          <img src={img2} className="w-44 h-44 lg:w-60 lg:h-60  object-cover relative lg:-left-[130px] lg:-top-[40px]  mask mask-hexagon  shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 my-5 lg:my-0" />
          </div>

          <div className='lg:w-3/5'>
            <h1 className="lg:text-5xl text-2xl md:text-3xl font-bold">Buildings and Occupants</h1>
            <p className="py-6 lg:text-xl text-md">W.Apparels New Generation Apparels is a compliant Woven/knitwear manufacturer based in Bangladesh and is a project of W.Apparels. The company was set up in 1992 to provide one stop manufacturing service to the fashion industry ensuring quality, reliability, sustainability and social responsibility. The founder is A.M Akhter Hossain who is a prominent business man in the country known for his ethical business practices. The industry has an yearly production capacity of 48,00,000 lac pice (4.8 million pieces) of knitwear and 36,00,000 lac pice (3.6 million pieces). The factory is well equipped with latest manufacturing.
            </p>
            <div className='mx-10 my-5 text-center lg:text-left'>
              <Link to='/building' className='arrow'>    
                  <span></span>
                  <span></span>
                  <span></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingsandOccupants;

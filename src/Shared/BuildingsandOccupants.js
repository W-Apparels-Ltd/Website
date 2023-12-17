import React from 'react';
import img from '../images/factory_purpose/building.jpg'
import img1 from '../images/factory_purpose/888888.jpg'
import img2 from '../images/factory_purpose/WhatsApp Image 2023-11-16 at 11.35.58_7ac0f51f (1).jpg'
import arrow from '../images/Untitled__1_-removebg-preview.png'
import { Link } from 'react-router-dom';
import { Button } from '@material-tailwind/react';

const BuildingsandOccupants = () => {
  return (
    <div>
      <div  className="hero min-h-screen py-5 lg:py-0 lg:px-20 px-5 mx-auto w-full bg-base-100 font-Nunito">
        <div className="flex flex-col lg:items-end lg:flex-row-reverse lg:justify-between lg:items-center  text-primary">
          
          <div className='flex flex-col items-center'>

            <img src={img} className="w-44 h-44 lg:w-60 lg:h-60  object-cover relative lg:-left-[130px] lg:-bottom-[40px] mask mask-hexagon  shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300" />
            <div className='flex lg:hidden'>
            <img src={img1} className="w-40 h-40 md:w-48 md:h-48  lg:w-60 lg:h-60  object-cover relative -top-[30px] -left-[15px] mask mask-hexagon  shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300" />
            <img src={img2} className="w-40 h-40 md:w-48 md:h-48  lg:w-60 lg:h-60  object-cover relative -top-[30px] -right-[15px]   mask mask-hexagon  shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 " />
            </div>
            <div className='hidden lg:block'>
            <img src={img1} className="w-44 h-44 lg:w-60 lg:h-60  object-cover mask mask-hexagon  shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300" />
            <img src={img2} className="w-44 h-44 lg:w-60 lg:h-60  object-cover relative lg:-left-[130px] lg:-top-[40px]  mask mask-hexagon  shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 my-5 lg:my-0" />
            </div>
          </div>

          <div className='lg:w-3/5'>
            <h1 className="lg:text-5xl text-2xl md:text-3xl font-bold">Buildings and Occupants</h1>
            <p className="py-6 lg:text-xl text-md ">W.Apparels is a new generation apparel company
                      standing as a reputable woven and knitwear
                      manufacturer located in Bangladesh, operating under the
                      umbrella of W Apparels Ltd. Established in 1992, our
                      primary objective has been to offer a comprehensive
                      manufacturing solution to the fashion industry,
                      characterized by unwavering commitment to quality,
                      dependability, sustainability, and social responsibility.
                      A.M. Akhter Hossain, the visionary founder of the
                      company, is a distinguished figure renowned for his
                      principled and ethical business acumen within the
                      country. <br/>
                      With an impressive annual production capacity, we
                      consistently craft 4.8 million pieces of knitwear and 3.6
                      million pieces of woven garments. Our advanced factory
                      is outfitted with state-of-the-art manufacturing
                      technology, enabling us to stay at the forefront of
                      innovation and efficiency.
            </p>
            <Link to='/building'>
            <button
              class="group relative flex select-none items-center gap-3 overflow-hidden rounded-lg bg-[#000066] py-3 px-7 pr-[72px] text-center align-middle text-sm font-bold uppercase text-white shadow-md shadow-light-blue-500/20 transition-all hover:shadow-lg active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-nonegroup relative flex select-none items-center gap-3 overflow-hidden rounded-lg bg-gradient-to-tr from-light-blue-900 to-sky-900 py-2 px-5 pr-[72px] text-center align-middle text-sm font-bold uppercase text-white shadow-md shadow-light-indigo-500/20 transition-all hover:shadow-lg hover:shadow-light-blue-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              View Infrastructure
              <span className="absolute right-0 grid h-full w-12 place-items-center bg-[#00004d] transition-colors group-hover:bg-[#000066]">
                <img src={arrow}></img>
              </span>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingsandOccupants;

import React from 'react';
import img from '../images/factory_purpose/1.jpg'
import img2 from '../images/factory_purpose/ourstory-300x225-1.jpg'
import img3 from '../images/factory_purpose/333333-1.jpg'

import '../Shared/Banner.css'
import { Button, Carousel, Typography } from '@material-tailwind/react';
const Banner = () => {
  return (
    <Carousel autoplay='true' loop='true'>

      <div className="relative w-full" >
        <img
          src={img}
          alt="image 2"
          className="h-[550px] w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl animate-bounce"
            >
              Quality over Mediocrity
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              In an industry driven by mass production, our commitment to quality sets us apart. We believe in prioritizing excellence over mediocrity, setting higher standards that redefine the RMG sector.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300' size="lg" color="white">
                Explore
              </Button>
              <Button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300' size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <img
          src={img2}
          alt="image 2"
          className="h-[550px] w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl animate-bounce"
            >
              Unlocking Potential: Creating Boundless Employment Opportunities
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              We are dedicated to empowering lives by providing meaningful employment opportunities. We understand the transformative power of work and believe in fostering an inclusive environment that embraces growth and development.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300' size="lg" color="white">
                Explore
              </Button>
              <Button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300' size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        <img
          src={img3}
          alt="image 2"
          className="h-[550px] w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl animate-bounce"
            >
              Empowering Local Businesses for a Thriving Community
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              We recognize the vital role that small businesses play in fostering economic growth, preserving unique craftsmanship, and nurturing a sense of community. By championing local businesses, we empower entrepreneurs, create employment opportunities, and cultivate a vibrant and sustainable ecosystem.             </Typography>
            <div className="flex justify-center gap-2">
              <Button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300' size="lg" color="white">
                Explore
              </Button>
              <Button className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300' size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>

    </Carousel>
  );
};

export default Banner;

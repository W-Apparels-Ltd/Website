import React from 'react';
import img from '../images/1.jpg'
import '../Shared/Banner.css'
import { Button, Carousel, Typography } from '@material-tailwind/react';
const Banner = () => {
  return (
    <Carousel autoplay='true' loop='true'>
      
      <div className="relative w-full" >
        <img
          src={img}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl animate-bounce"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that
              quality of air that emanation from old trees, that so
              wonderfully changes and renews a weary spirit.
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
          src={img}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl animate-bounce"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that
              quality of air that emanation from old trees, that so
              wonderfully changes and renews a weary spirit.
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
      
    </Carousel>
  );
};

export default Banner;
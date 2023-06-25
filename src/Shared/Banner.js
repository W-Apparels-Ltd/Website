import React from 'react';
import img from '../images/factory_purpose/1.jpg'
import img2 from '../images/factory_purpose/ourstory-300x225-1.jpg'
import img3 from '../images/factory_purpose/333333-1.jpg'
import img4 from '../images/inventory/products.jpg'

import { Button, Carousel, Typography } from '@material-tailwind/react';
import { Fade, Slide } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
const Banner = () => {
  
  return (
    <Carousel autoplay='true' loop='true' prevArrow={false} nextArrow={false}>

      <div className="relative w-full overflow-hidden" >
        <img
          src={img}
          alt="image 2"
          className="h-[650px] w-full object-cover"
          
        />
        <div className="absolute inset-0 grid h-full w-full place-content-end place-items-end bg-black/75">
          <div className=" md:w-2/4 text-right m-5 lg:m-20">
          
                  <Typography
                    variant="h1"
                    color="white"
                    className= "hidden lg:block mb-4 text-xl md:text-3xl lg:text-4xl"
                  >
                  
                  <Slide direction='left'>Quality over Mediocrity</Slide>
                  
                  </Typography>
                  <Typography
                    variant="h1"
                    color="white"
                    className= "lg:hidden mb-4 text-xl md:text-3xl lg:text-4xl"
                  >
                  
                  Quality over Mediocrity
                  
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="hidden lg:block  mb-12 opacity-80 text-md"
                  >
                    <Slide direction='right'>In an industry driven by mass production, our commitment to quality sets us apart. We believe in prioritizing excellence over mediocrity, setting higher standards that redefine the RMG sector.</Slide>
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="lg:hidden mb-12 opacity-80 text-md"
                  >
                    In an industry driven by mass production, our commitment to quality sets us apart. We believe in prioritizing excellence over mediocrity, setting higher standards that redefine the RMG sector.
                  </Typography>
                
          </div>
        </div>
      </div>
      <div className="relative w-full overflow-hidden">
        <img
          src={img2}
          alt="image 2"
          className="h-[650px] w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full lg:place-items-start place-items-end  lg:ps-20 p-5 bg-black/75">
          <div className="md:w-2/4 lg:w-2/4 ">
            <Typography
              variant="h1"
              color="white"
              className="hidden lg:block  mb-2 mt-20  text-xl md:text-3xl lg:text-4xl"
            >
              <Slide direction='left'>Unlocking Potential: Creating Boundless Employment Opportunities</Slide>
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="lg:hidden mb-2 mt-20  text-xl md:text-3xl lg:text-4xl"
            >
              Unlocking Potential: Creating Boundless Employment Opportunities
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="hidden lg:block  mb-12 opacity-80 text-md"
            >
              <Slide direction='right'>We are dedicated to empowering lives by providing meaningful employment opportunities. We understand the transformative power of work and believe in fostering an inclusive environment that embraces growth and development.</Slide>
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="lg:hidden mb-12 opacity-80 text-md"
            >
              We are dedicated to empowering lives by providing meaningful employment opportunities. We understand the transformative power of work and believe in fostering an inclusive environment that embraces growth and development.
            </Typography>
            </div>
            
        </div>
        
            
           
          
        
      </div>

      <div className="relative w-full overflow-hidden">
        <img
          src={img3}
          alt="image 2"
          className="h-[650px] w-full object-cover"
        />
        <div className=" absolute inset-0 grid h-full w-full md:place-items-center lg:place-items-center place-items-end bg-black/75">
          <div className=" md:w-3/4 text-center">
            <Typography
              variant="h1"
              color="white"
              className="hidden lg:block lg:mb-4 text-xl md:text-3xl lg:text-4xl"
            >
            <Fade cascade damping={0.01}>Empowering Local Businesses for a Thriving Community</Fade>
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="lg:hidden lg:mb-4 text-xl md:text-3xl lg:text-4xl"
            >
          Empowering Local Businesses for a Thriving Community
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="hidden lg:block  mb-12 opacity-80 text-sm p-5"
            >
             <Slide direction='right'>We recognize the vital role that small businesses play in fostering economic growth, preserving unique craftsmanship, and nurturing a sense of community. By championing local businesses, we empower entrepreneurs, create employment opportunities, and cultivate a vibrant and sustainable ecosystem. </Slide>
                 </Typography>
            <Typography
              variant="lead"
              color="white"
              className="lg:hidden mb-12 opacity-80 text-sm p-5"
            >
             We recognize the vital role that small businesses play in fostering economic growth, preserving unique craftsmanship, and nurturing a sense of community. By championing local businesses, we empower entrepreneurs, create employment opportunities, and cultivate a vibrant and sustainable ecosystem.
                 </Typography>
            
          </div>
        </div>
      </div>
      <div className="relative w-full overflow-hidden">
        <img
          src={img4}
          alt="image 2"
          className="h-[650px] w-full object-cover"
        />
        <div className=" absolute inset-0 grid h-full w-full md:place-items-center lg:place-items-center place-items-end bg-black/75">
          <div className=" md:w-3/4 text-center">
            <Typography
              variant="h1"
              color="white"
              className="hidden lg:block lg:mb-4 text-xl md:text-3xl lg:text-4xl"
            >
            <Fade cascade damping={0.01}>Empowering Local Businesses for a Thriving Community</Fade>
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="lg:hidden lg:mb-4 text-xl md:text-3xl lg:text-4xl"
            >
          Empowering Local Businesses for a Thriving Community
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="hidden lg:block opacity-80 text-sm p-5"
            >
             <Slide direction='right'>We recognize the vital role that small businesses play in fostering economic growth, preserving unique craftsmanship, and nurturing a sense of community. By championing local businesses, we empower entrepreneurs, create employment opportunities, and cultivate a vibrant and sustainable ecosystem. </Slide>
                 </Typography>
            <Typography
              variant="lead"
              color="white"
              className="lg:hidden opacity-80 text-sm p-5"
            >
             We recognize the vital role that small businesses play in fostering economic growth, preserving unique craftsmanship, and nurturing a sense of community. By championing local businesses, we empower entrepreneurs, create employment opportunities, and cultivate a vibrant and sustainable ecosystem.
                 </Typography>
            <Link className='btn btn-primary mb-12 lg:mb-0' to='/productgallery'>Product Gallery</Link>
            
          </div>
        </div>
      </div>

    </Carousel>
  );
};

export default Banner;

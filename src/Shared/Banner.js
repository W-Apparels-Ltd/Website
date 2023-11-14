import React from 'react';
import img from '../images/Certificates/s2.png'
import img2 from '../images/Certificates/slider.jpg'
import img4 from '../images/IMG_3291.JPG'
import img3 from '../images/IMG_3306.JPG'
import arrow from '../images/Untitled__1_-removebg-preview.png'

import { Button, Carousel, Typography } from '@material-tailwind/react';
import { Fade, Slide } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
const Banner = () => {
  
  return (
    <Carousel autoplayDelay={8000} autoplay='true' loop='true' prevArrow={false} nextArrow={false}>

      <div className="relative w-full overflow-hidden" >
        <img
          src={img}
          alt="image 2"
          className="h-screen w-full object-cover"
          
        />
        
        <div className="absolute inset-0 grid h-full w-full place-content-end place-items-end bg-black/70">
          <div className=" md:w-2/4 text-right m-5 lg:m-20">
          
                  <Typography
                    variant="h1"
                    color="white"
                    className= "hidden lg:block mb-4 text-xl md:text-3xl lg:text-4xl font-Nunito"
                  >
                  
                  <Slide direction='left'>Quality over Mediocrity</Slide>
                  
                  </Typography>
                  <Typography
                    variant="h1"
                    color="white"
                    className= "lg:hidden mb-4 text-xl md:text-3xl lg:text-4xl font-Nunito"
                  >
                  
                  Quality over Mediocrity
                  
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="hidden lg:block  mb-12 opacity-80 font-Nunito text-5md"
                  >
                    <Slide direction='right'>In an industry driven by mass production, our commitment to quality sets us apart. We believe in prioritizing excellence over mediocrity, setting higher standards that redefine the RMG sector.</Slide>
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="lg:hidden mb-12 opacity-80 font-Nunito text-5md"
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
          className="h-screen w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full lg:place-items-start place-items-end  lg:ps-20 p-5 bg-black/75">
          <div className="md:w-2/4 lg:w-2/4 ">
            <Typography
              variant="h1"
              color="white"
              className="hidden lg:block  mb-2 mt-36  text-xl md:text-3xl lg:text-4xl font-Nunito"
            >
              <Slide direction='left'>Unlocking Potential: Creating Boundless Employment Opportunities</Slide>
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="lg:hidden mb-2 mt-20  text-xl md:text-3xl lg:text-4xl font-Nunito"
            >
              Unlocking Potential: Creating Boundless Employment Opportunities
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="hidden lg:block  mb-12 opacity-80 font-Nunito text-5md"
            >
              <Slide direction='right'>We are dedicated to empowering lives by providing meaningful employment opportunities. We understand the transformative power of work and believe in fostering an inclusive environment that embraces growth and development.</Slide>
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="lg:hidden opacity-80 font-Nunito text-5md"
            >
              We are dedicated to empowering lives by providing meaningful employment opportunities. We understand the transformative power of work and believe in fostering an inclusive environment that embraces growth and development.
            </Typography>
            <Link className='mb-10' to='/career'>
            <button className='btn btn-ghost text-white lg:me-5 md:me-5'>Career
                  <span className=" w-12 transition-colors group-hover:bg-[#000066]">
                  <img src={arrow}></img>
                  </span>
            </button>
            </Link>  
            </div>
            
        </div>
        
            
           
          
        
      </div>

      <div className="relative w-full overflow-hidden">
        <img
          src={img3}
          alt="image 2"
          className="h-screen w-full object-cover"
        />
        <div className=" absolute inset-0 grid h-full w-full md:place-items-center lg:place-items-center place-items-end bg-black/60">
          <div className=" md:w-3/4 text-center">
            <Typography
              variant="h1"
              color="white"
              className="hidden lg:block lg:mb-4 text-xl md:text-3xl lg:text-4xl font-Nunito"
            >
            <Fade cascade damping={0.01}>Empowering Local Businesses for a Thriving Community</Fade>
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="lg:hidden lg:mb-4 text-xl md:text-3xl lg:text-4xl font-Nunito"
            >
          Empowering Local Businesses for a Thriving Community
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="hidden lg:block  mb-12 opacity-80 font-Nunito text-5md p-5"
            >
             <Slide direction='right'>We recognize the vital role that small businesses play in fostering economic growth, preserving unique craftsmanship, and nurturing a sense of community. By championing local businesses, we empower entrepreneurs, create employment opportunities, and cultivate a vibrant and sustainable ecosystem. </Slide>
                 </Typography>
            <Typography
              variant="lead"
              color="white"
              className="lg:hidden mb-12 opacity-80 font-Nunito text-5md p-5"
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
          className="h-screen w-full object-cover"
        />
        <div className=" absolute inset-0 grid h-full w-full md:place-items-center lg:place-items-center place-items-end bg-black/70">
          <div className=" md:w-3/4 text-center">
            <Typography
              variant="h1"
              color="white"
              className="hidden lg:block lg:mb-4 text-xl md:text-3xl lg:text-4xl font-Nunito"
            >
            UNVEILING VERSATILITY: ELEVATE YOUR WARDROBE WITH OUR DIVERSE THREADS - TOPS, BOTTOMS, SWEATERS AND BEYOND!
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="lg:hidden mb-4 text-xl md:text-3xl lg:text-4xl font-Nunito"
            >
          UNVEILING VERSATILITY: ELEVATE YOUR WARDROBE WITH OUR DIVERSE THREADS - TOPS, BOTTOMS, SWEATERS AND BEYOND!
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="hidden lg:block opacity-80 font-Nunito text-5md p-5"
            >
            We take pride in crafting a diverse collection that caters to every facet of your style. With a keen eye for detail and a passion for fashion, we offer a range of exquisite tops, bottoms, and quality garment that effortlessly complement your individuality. From chic and casual to sophisticated and trendy, our designs are tailored to make you stand out in any crowd                 </Typography>
            <Typography
              variant="lead"
              color="white"
              className="lg:hidden opacity-80 font-Nunito text-5md p-5"
            >
             We recognize the vital role that small businesses play in fostering economic growth, preserving unique craftsmanship, and nurturing a sense of community. By championing local businesses, we empower entrepreneurs, create employment opportunities, and cultivate a vibrant and sustainable ecosystem.
                 </Typography>
            <Link className=' ' to='/productgallery'>
            <button className='btn btn-ghost mb-12 lg:mb-0 text-white lg:me-5 md:me-5'>Product Gallery
                  <span className=" w-12 transition-colors group-hover:bg-[#000066]">
                  <img src={arrow}></img>
                  </span>
            </button> 
            </Link>
            
          </div>
        </div>
      </div>

    </Carousel>
  );
};

export default Banner;

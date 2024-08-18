import React from 'react';
import img from '../images/Certificates/s1.png'
import img1 from '../images/Certificates/s12.jpg'
import img4 from '../images/IMG_3291.JPG'
import img3 from '../images/IMG_3306.JPG'
import arrow from '../images/Untitled__1_-removebg-preview.png'
import banner3 from '../images/banner3.jpg'

import { Button, Carousel, Typography } from '@material-tailwind/react';
import { Fade, Slide } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
const Banner = () => {
  
  return (
    <Carousel autoplayDelay={9000} autoplay='true' loop='true' prevArrow={false} nextArrow={false}>

      <div className="relative w-full overflow-hidden" >
        <img
          src={img1}
          alt="image 2"
          className="h-screen w-full object-cover"
          
        />
        
        <div className="absolute inset-0 grid h-full w-full bg-black/30 lg:pb-16 md:pb-16 pb-16">
              <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-0 justify-items-center place-items-end  justify-center '>
                <div className='text-center  text-white font-Nunito hidden lg:block'>
                  <h1 className='font-bold text-4xl'>Let's Do Business <br/>
                  Together</h1>
                  <h1 className='text-3xl'>Our promise is to keep<br/>
                  strong commitments, best<br/>
                  quality and building good<br/>
                  relationships.</h1>
                </div>
                <div className='text-center  text-white font-Nunito'>
                  <h1 className='font-bold text-4xl mb-5'>Why choose us?</h1>
                  <div className='text-xl grid grid-cols-2  gap-4 justify-items-center items-center mb-4'>
                    <div className='bg-indigo-500 rounded-md py-1	px-3'><h1>30+ Years Of<br/>Experience</h1></div>
                    <div className='bg-indigo-500 rounded-md py-1	px-3'>Best Quality<br/>Products</div>
                    <div className='bg-indigo-500 rounded-md py-1	px-3'>Work with<br/>Sustainability</div>
                    <div className='bg-indigo-500 rounded-md py-1	px-3'>Maintain<br/>Consistency</div>
                    
                  </div>
                </div>
                
                <div className='text-center  text-white font-Nunito'>
                  <h1 className='font-bold text-4xl'>Get in touch!</h1>
                  <h1 className='text-xl'>+8801853340765<br/>+8801819274335<br/>
                  Email us: info@wapparels.com<br/>
                  Visit wapparels.com to learn more<br/>
                  about our industry<br/>
                  295/JA/4 Rayer Bazar,<br/>
                  Dhaka-1209, Bangladesh.<br/>
                  <div className='flex flex-row justify-center pt-1 '>

            <Link to='https://www.linkedin.com/company/w-apparels-ltd/'>
            <div className='mx-3'>
              <div className='flex justify-center'>
                <div><i className='fa fa-brands fa-linkedin bg-gray-700 text-white py-1 px-[5px] rounded'/></div>
              </div>
            </div >
            </Link>
            <Link to='https://www.facebook.com/profile.php?id=100063651540871'><div className='me-3'>
              <div className='flex justify-center'>
                <div><i className='fa fa-brands fa-facebook bg-gray-700 text-white py-1 px-[8px] rounded'/></div>
              </div>
            </div>
            </Link>
            <Link to='http://www.youtube.com/@w.apparelsltd.5425'>
            <div className='me-3'>
              <div className='flex justify-center'>
                <div><i className='fa fa-brands fa-youtube-play bg-gray-700 text-white py-1 px-[6px] rounded'/></div>
              </div>
            </div>
            </Link>

          </div>
                  </h1>
                </div>
              </div>
        </div>
      </div>
      <div className="relative w-full overflow-hidden" >
        <img
          src={img}
          alt="image 2"
          className="h-screen w-full object-cover"
          
        />
        
        <div className="absolute inset-0 grid h-full w-full place-content-end place-items-end bg-black/70">
          <div className=" md:w-2/4 text-right m-5 mb-20 lg:mb-10  lg:m-20">
          
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
                    className="hidden lg:block  mb-20 opacity-80 font-Nunito text-6md"
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
          src={img4}
          alt="image 2"
          className="h-screen w-full object-cover"
        />
        <div className=" absolute inset-0 grid h-full w-full md:place-items-center lg:place-items-center place-items-end bg-black/70">
          <div className=" md:w-3/4 mb-10 lg:mb-0 text-center">
            <Typography
              variant="h1"
              color="white"
              className="hidden lg:block lg:mb-4 text-xl md:text-3xl lg:text-4xl font-Nunito"
            >
            Unveiling Versatility: Elevate Your Wardrobe With Our Diverse Threads - Tops, Bottoms, Swaeaters And Beyond!
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className="lg:hidden mb-4 text-xl md:text-3xl lg:text-4xl font-Nunito"
            >
          Unveiling Versatility: Elevate Your Wardrobe With Our Diverse Threads - Tops, Bottoms, Swaeaters And Beyond!
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
            <Link className='group' to='/productgallery'>
            <button className='mb-12 lg:mb-0 text-white lg:ms-5 md:ms-5'>
                  <div className='flex items-center'>
                    <h1 className='text-md font-bold'>View Product
                    <div className='bg-white h-[2px] w-0 group-hover:w-full transition-all duration-500'></div>
                    </h1>
                  
                    <img className='w-12' src={arrow}></img>
                  </div>
                  
                 
            </button> 
            
            </Link>
            
          </div>
        </div>
      </div>
      <div className="relative w-full overflow-hidden">
        <img
          src={banner3}
          alt="image 2"
          className="h-screen w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full lg:place-items-start place-items-end  lg:ps-20 p-5 bg-black/75">
          <div className="md:w-2/4 mb-20 lg:mb-0 lg:w-2/4 ">
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
            <div>
            <Link className='group flex lg:justify-start justify-end' to='/career'>
            <button className='mb-12 lg:mb-0 text-white lg:ms-5 md:ms-5'>
                  <div className='flex items-center'>
                    <h1 className='text-md font-bold'>View Opportunities
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

      <div className="relative w-full overflow-hidden">
        <img
          src={img3}
          alt="image 2"
          className="h-screen w-full object-cover"
        />
        <div className=" absolute inset-0 grid h-full w-full md:place-items-center lg:place-items-center place-items-end bg-black/60">
          <div className=" md:w-3/4 mb-14 lg:mb-0 text-center">
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
      

    </Carousel>
  );
};

export default Banner;

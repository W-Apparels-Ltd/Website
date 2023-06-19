import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import client1 from '../images/clients/blueseven-removebg-preview.png'
import client2 from '../images/clients/hellenic_logo.png'
import client3 from '../images/clients/pep_and_co_logo.png'
import client4 from '../images/clients/woolworth_logo.png'
import client5 from '../images/clients/download__3_-removebg-preview.png'
import client6 from '../images/clients/southpole-removebg-preview.png'
import client7 from '../images/clients/LPP_LOGO_RGB-removebg-preview.png'
import client8 from '../images/clients/unnamed-removebg-preview (1).png'
import OurclientsPic from './OurclientsPic';

const OurClients = () => {
  const allimg=[
    {
      _id:1,
      img:client1
    },
    
    {
      _id:3,
      img:client3
    },
    {
      _id:4,
      img:client4
    },
    {
      _id:5,
      img:client5
    },
    {
      _id:6,
      img:client6
    },
    {
      _id:7,
      img:client7
    },
    {
      _id:8,
      img:client8
    },
  ]
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      partialVisibilityGutter: 40
    },
    desktop: {
      breakpoint: { max: 1024, min: 701 },
      items: 4,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 700, min: 464 },
      items: 2,
      partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30
    }
  };
  return (
    <div id='ourclients' className=' bg-base-100 '>
      <div>
        <div className='lg:p-15 text-center'><h1 className='lg:text-5xl text-2xl md:text-3xl font-bold text-primary'>Our clients</h1></div>
        <div className='my-20'>
            <Carousel responsive={responsive} 
            additionalTransfrom={0}
            arrows={false}
            autoPlay
            autoPlaySpeed={1000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect
            infinite
            itemClass=""
            keyBoardControl
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            
            swipeable>
               {
                allimg.map(item=>
                  <OurclientsPic key={item._id} item={item}
                  ></OurclientsPic>
                  )
               }
                
              
            </Carousel>
          </div>
      </div>
    </div>
  );
};

export default OurClients;

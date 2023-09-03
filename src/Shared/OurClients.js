import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import client1 from '../images/clients/logo-1-dark.png'
import client2 from '../images/clients/logo-2-dark.png'
import client3 from '../images/clients/logo-3-dark.png'
import client4 from '../images/clients/logo-4-dark.png'
import client5 from '../images/clients/logo-5-dark.png'
import client6 from '../images/clients/logo-6-dark.png'
import client7 from '../images/clients/logo-7-dark.png'
import client8 from '../images/clients/logo-8-dark.png'
import client9 from '../images/clients/logo-9-dark.png'
import client10 from '../images/clients/logo-10-dark.png'
import client11 from '../images/clients/logo-11-dark.png'
import OurclientsPic from './OurclientsPic';

const OurClients = () => {
  const allimg=[
    {
      _id:1,
      img:client1
    },
    {
      _id:1,
      img:client2
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
    {
      _id:8,
      img:client9
    },
    {
      _id:8,
      img:client10
    },
    {
      _id:8,
      img:client11
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
    <div id='ourclients' className=' bg-base-100 pt-20 pb-20  font-Nunito'>
      <div>
        <div className='text-center'><h1 className='lg:text-4xl text-2xl md:text-3xl font-bold text-primary'>Our clients</h1></div>
        <div className='my-5'>
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

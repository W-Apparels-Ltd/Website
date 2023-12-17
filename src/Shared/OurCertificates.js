import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import client1 from '../images/Certificates/1.jpg'
import client2 from '../images/Certificates/2.jpg'
import client3 from '../images/Certificates/3.jpg'
import client4 from '../images/Certificates/4.jpg'
import client5 from '../images/Certificates/5.jpg'
import client6 from '../images/Certificates/newacc200x190.png'
import client7 from '../images/Certificates/Screenshot-20231217-101300200x190.png'
import client8 from '../images/Certificates/newacc3200x190.png'
import OurCertificatesPic from './OurCertificatesPic';

const OurCertificates = () => {

    const allimg=[
      {
        _id:1,
        img:client1
      },
      {
        _id:2,
        img:client2
      },
      
      {
        _id:3,
        img:client3
      },
      {
        _id:4,
        img:client7
      },
      {
        _id:5,
        img:client5
      },
      {
        _id:6,
        img:client8
      },
      {
        _id:7,
        img:client6
      },
      {
        _id:8,
        img:client4
      },
     
    ]
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1024 },
        items: 4,
        partialVisibilityGutter: 40
      },
      desktop: {
        breakpoint: { max: 1024, min: 701 },
        items: 3,
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
      <div id='ourcertificates' className='pt-5 pb-20 bg-base-100 font-Nunito'>
        <div>
          <div className='lg:p-15 text-center'><h1 className='lg:text-4xl text-2xl md:text-3xl font-bold text-primary'>Accreditation</h1></div>
          <div>
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
                    <OurCertificatesPic key={item._id} item={item}
                    ></OurCertificatesPic>
                    )
                 }
                  
                
              </Carousel>
            </div>
        </div>
      </div>
  );
};

export default OurCertificates;
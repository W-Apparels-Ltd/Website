import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import product1 from '../images/inventory/111111-768x768.png'
import product2 from '../images/inventory/222222-1.png'
import product3 from '../images/inventory/2222222-removebg-preview.png'

const ProductSlider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 40
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
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
    <div className=' min-h-screen  bg-[#e5e4e2] lg:px-20'>  
      <div className='pb-20 '>
          <div className='p-20 text-center'><h1 className='text-5xl text-primary font-bold'>Apparel Products</h1></div>
          <div>
            <Carousel responsive={responsive} 
            additionalTransfrom={0}
            arrows
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
                <div className="card  bg-base-100 shadow-xl m-5 ">
                  <figure><img src={product1} alt="Shoes" /></figure>
                  <div className='m-5'>
                    <h2 className='font-bold'>Shoes!</h2>
                    <p className='mb-2'>If a dog chews shoes whose shoes does he choose?</p>
                    <div className='flex justify-end'>
                      <button className="btn btn-primary ">Inquire Now</button>
                    </div>
                  </div>
                </div>
                <div className="card  bg-base-100 shadow-xl  m-5 ">
                  <figure><img src={product2} alt="Shoes" /></figure>
                  <div className='m-5'>
                    <h2 className='font-bold'>Shoes!</h2>
                    <p className='mb-2'>If a dog chews shoes whose shoes does he choose?</p>
                    <div className='flex justify-end'>
                      <button className="btn btn-primary ">Inquire Now</button>
                    </div>
                  </div>
                </div>
                <div className="card  bg-base-100 shadow-xl m-5 ">
                  <figure><img src={product3} alt="Shoes" /></figure>
                  <div className='m-5'>
                    <h2 className='font-bold'>Shoes!</h2>
                    <p className='mb-2'>If a dog chews shoes whose shoes does he choose?</p>
                    <div className='flex justify-end'>
                      <button className="btn btn-primary ">Inquire Now</button>
                    </div>
                  </div>
                </div>
                <div className="card  bg-base-100 shadow-xl  m-5 ">
                  <figure><img src={product2} alt="Shoes" /></figure>
                  <div className='m-5'>
                    <h2 className='font-bold'>Shoes!</h2>
                    <p className='mb-2'>If a dog chews shoes whose shoes does he choose?</p>
                    <div className='flex justify-end'>
                      <button className="btn btn-primary ">Inquire Now</button>
                    </div>
                  </div>
                </div>
                
                
              
            </Carousel>
          </div>
          <div className='text-center mt-10'><a className='btn'>See More</a></div>
      </div>
    </div>
    
  );
};

export default ProductSlider;
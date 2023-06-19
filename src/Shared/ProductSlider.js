import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ProductItem from './ProductItem';

const ProductSlider = () => {
  
  const [product, setProduct]=useState([]);
  useEffect(()=>{
    fetch('https://wapparels-server.vercel.app/products')
    .then(res=>res.json())
    .then(data=> setProduct(data))
  },[])
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
    <div id='products' className=' min-h-screen  bg-[#e5e4e2] lg:px-20'>  
      <div className='pb-20 '>
          <div className='p-10 text-center'><h1 className='lg:text-5xl text-2xl md:text-3xl text-primary font-bold'>Apparel Products</h1></div>
          <div>
            <Carousel responsive={responsive} 
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={2000}
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
                product.map(item=>
                  <ProductItem key={item._id} item={item}
                  ></ProductItem>
                  )
               }
                
              
            </Carousel>
          </div>
          <div className='text-center mt-10'><a className='btn btn-primary'>Product Gallery</a></div>
      </div>
    </div>
    
  );
};

export default ProductSlider;
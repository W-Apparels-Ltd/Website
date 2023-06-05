import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import product1 from '../images/inventory/111111-768x768.png'
import product2 from '../images/inventory/222222-1.png'
import product3 from '../images/inventory/2222222-removebg-preview.png'
import product4 from '../images/inventory/3 (1).jpg'
import product5 from '../images/inventory/3 (2).jpg'
import product6 from '../images/inventory/3 (3).jpg'
import product7 from '../images/inventory/3 (4).jpg'
import product8 from '../images/inventory/3 (5).jpg'
import ProductItem from './ProductItem';

const ProductSlider = () => {
  const img=[
    {
      _id:"01",
      img:product1,
      name:'product',
      des: 'product details'
      
    },
    {
      _id:"02",
      img:product2,
      name:'product',
      des: 'product details'
    },
    {
      _id:"03",
      img:product3,
      name:'product',
      des: 'product details'
    },
    {
      _id:"04",
      img:product4,
      name:'product',
      des: 'product details'
    },
    {
      _id:"05",
      img:product5,
      name:'product',
      des: 'product details'
    },
    {
      _id:"06",
      img:product6,
      name:'product',
      des: 'product details'
    },
    {
      _id:"07",
      img:product7,
      name:'product',
      des: 'product details'
    },
    {
      _id:"08",
      img:product8,
      name:'product',
      des: 'product details'
    },
  ]
  const [product, setProduct]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/products')
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
               {
                img.map(item=>
                  <ProductItem key={item._id} item={item}
                  ></ProductItem>
                  )
               }
                
              
            </Carousel>
          </div>
          <div className='text-center mt-10'><a className='btn'>See More</a></div>
      </div>
    </div>
    
  );
};

export default ProductSlider;
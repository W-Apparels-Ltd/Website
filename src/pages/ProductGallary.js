import React from 'react';
import bg from '../images/IMG_3304.JPG'
import { useState } from 'react';
import { useEffect } from 'react';
import ProductItem from '../Shared/ProductItem';
import Nav2 from './Nav2';
import Footer from './Footer';

const ProductGallary = () => {
  const [product, setProduct]=useState([]);
  useEffect(()=>{
    fetch('https://wapparels-server-eosin.vercel.app/products')
    .then(res=>res.json())
    .then(data=> setProduct(data))
  },[])
  return (
    <>
    <Nav2></Nav2>
    <div style={{
      backgroundImage:` url(${bg})`,
    }}  className= "  mx-auto w-full bg-cover bg-fixed bg-center bg-no-repeat shadow-lg ">  
      <div className='bg-black/60'>
          <div className='pt-20 pb-20 text-center'><h1 className='lg:text-4xl md:text-3xl text-2xl text-white font-bold pt-10'>Welcome to Product Gallery</h1></div>
          
      </div>
      <div className=' rounded-xl '>
      <div className='bg-base-200 '>
        <div className=' grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 p-10'>

        {
                 product.map(item=>
                  <ProductItem key={item._id} item={item}
                  ></ProductItem>
                  )
               }

        </div>
          
      </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default ProductGallary;
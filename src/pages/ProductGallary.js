import React from 'react';
import bg from '../images/factory_purpose/1.jpg'
import { useState } from 'react';
import { useEffect } from 'react';
import ProductItem from '../Shared/ProductItem';

const ProductGallary = () => {
  const [product, setProduct]=useState([]);
  useEffect(()=>{
    fetch('https://wapparels-server.vercel.app/products')
    .then(res=>res.json())
    .then(data=> setProduct(data))
  },[])
  return (
    <div style={{
      backgroundImage:`linear-gradient(to bottom, rgba(135, 124, 201, 0.52), rgba(24, 22, 117, 0.73)), url(${bg})`,
    }}  className= "  mx-auto w-full bg-cover bg-fixed bg-center bg-no-repeat shadow-lg">  
      <div>
          <div className='p-20 text-center'><h1 className='lg:text-4xl md:text-3xl text-2xl text-white font-bold mt-5'>Welcome to Product Gallery</h1></div>
          
      </div>
      <div className='lg:mt-20 mt-5 rounded-xl'>
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
  );
};

export default ProductGallary;
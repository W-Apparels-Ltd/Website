import React from 'react';
import product1 from '../images/111111-768x768.png'
import product2 from '../images/222222-1.png'
import product3 from '../images/2222222.jpg'

const Product = () => {
  return (
    <div className=' min-h-screen  bg-red-50 lg:px-20'>  
      <div className='pb-20 bg-red-50'>
          <div className='p-20 text-center'><h1 className='text-5xl text-primary font-bold'>Apparel Products</h1></div>
          <div className='carousel p-4 space-x-5 '>
          <div className="card w-1/3 bg-base-100 shadow-xl carousel-item ">
            <figure><img src={product1} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary ">Inquiry Now</button>
              </div>
            </div>
          </div>
          <div className="card w-1/3 bg-base-100 shadow-xl carousel-item">
            <figure><img src={product2} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Inquiry Now</button>
              </div>
            </div>
          </div>
          <div className="card w-1/3 bg-base-100 shadow-xl carousel-item">
            <figure><img src={product3} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Inquiry Now</button>
              </div>
            </div>
          </div>
          <div className="card w-1/3 bg-base-100 shadow-xl carousel-item">
            <figure><img src={product3} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn">Inquiry Now</button>
              </div>
            </div>
          </div>
          
          </div>
          <div className='text-center mt-10'><a className='btn'>See More</a></div>
      </div>
    </div>
  );
};

export default Product;
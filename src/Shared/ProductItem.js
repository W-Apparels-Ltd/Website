import React from 'react';

const ProductItem = ({item}) => {
  return (
                <div className="card  bg-base-100 shadow-xl m-5 ">
                  <figure ><img src={item.img} alt="Shoes" /></figure>
                  <div className='m-5'>
                    <h2 className='font-bold'>{item.name}</h2>
                    <p className='mb-2'>{item.description}</p>
                    <div className='flex justify-end'>
                      <button className="btn btn-primary ">Inquire Now</button>
                    </div>
                  </div>
                </div>
  );
};

export default ProductItem;
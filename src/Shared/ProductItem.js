import React from 'react';
import { Link } from 'react-router-dom';


const ProductItem = ({item}) => {
  return (
                <div className="card bg-base-100 shadow-xl m-5 ">
                  <figure >
                  <img className='object-contain h-[220px]' src={item.img[1]} alt="Shoes" />
                  </figure>
                  <div className='mb-5 text-center'>
                    <h2 className='font-bold'>{item.label}</h2>
                    <p className='mb-2'>Size: {item.size}</p>
                    <div>
                      <Link to={`/${item._id}`}>
                        <button className="btn btn-primary btn-sm">Inquire Now</button>
                      </Link>
                    </div>
                  </div>
                </div>
  );
};

export default ProductItem;
import React from 'react';

const ProductDetailsImgs = ({pic}) => {
    return (
        <>
            <img className='h-12 border-2 rounded p-1 mb-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 cursor-pointer' src={pic}/>
        </>
    );
};

export default ProductDetailsImgs;
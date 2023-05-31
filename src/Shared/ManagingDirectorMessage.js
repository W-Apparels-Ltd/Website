import React from 'react';
import Dr from '../images/400md-300x300-1.png'

const ManagingDirectorMessage = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-red-50 px-20 py-10">
         
          <div className='text-center'>
            <h1 className="text-4xl font-bold">Managing Director Message</h1>
            <div className='grid justify-items-center mt-10'><img className='rounded-lg' src={Dr} alt="" /></div>
            <p className="py-6 text-xl">W. Apparels Ltd. is a 100% export oriented versatile clothing Industry. We have exclusive expertise producing all kinds of garments and merchandise at a competitive price. Our trade is mainly involved in mass-production of finished textile products as aclothing industry, generalized according to anthropometric studies, made from many differentfabrics andyarns. <a className='text-blue-700 underline'>Read More</a></p>
            <div className='text-end text-2xl italic'><p>– Managing Director, W. Apparels Ltd.</p></div>
          </div>
      </div>
    </div>
  );
};

export default ManagingDirectorMessage;
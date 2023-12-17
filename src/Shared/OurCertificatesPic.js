import React from 'react';

const OurCertificatesPic = ({item}) => {
  return (
    <div className='flex justify-center py-10'>
      <img className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 hover: duration-300' src={item.img} alt="" />
    </div>
  );
};

export default OurCertificatesPic;
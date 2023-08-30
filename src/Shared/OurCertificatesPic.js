import React from 'react';

const OurCertificatesPic = ({item}) => {
  return (
    <div className='flex justify-center'>
      <img className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300' src={item.img} alt="" />
    </div>
  );
};

export default OurCertificatesPic;
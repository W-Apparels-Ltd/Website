import React from 'react';

const OurCertificatesPic = ({item}) => {
  return (
    <div className='flex justify-center'>
      <img src={item.img} alt="" />
    </div>
  );
};

export default OurCertificatesPic;
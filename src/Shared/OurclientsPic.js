import React from 'react';

const OurclientsPic = ({item}) => {
  return (
    <div className='mx-20'>
      <img  src={item.img} alt="" />
    </div>
  );
};
export default OurclientsPic;
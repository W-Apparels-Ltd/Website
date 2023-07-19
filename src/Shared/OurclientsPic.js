import React from 'react';

const OurclientsPic = ({item}) => {
  return (
    <div className='flex justify-center'>
      <img src={item.img} alt="" />
    </div>
  );
};
export default OurclientsPic;
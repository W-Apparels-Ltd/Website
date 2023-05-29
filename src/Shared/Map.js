import React from 'react';

const Map = () => {
  return (
    
    <div className='bg-base-200'>
      <div className='p-5 text-center'><h1 className='text-3xl font-bold'>Location</h1></div>
      <iframe width="100%" height="500px" id="gmap_canvas" src="https://maps.google.com/maps?q=W apparels&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    </div>
  );
};

export default Map;
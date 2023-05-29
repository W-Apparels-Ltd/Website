import React from 'react';
import dir from '../images/400director-300x300-1.png'

const MessagefromtheDirector = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-red-50 px-20 py-10">
         
          <div className='text-center'>
            <h1 className="text-4xl font-bold">Director Message</h1>
            <div className='grid justify-items-center mt-10'><img className='rounded-lg' src={dir} alt="" /></div>
            <p className="py-6 text-xl">W.Apparels Ltd is a New Generation Apparels is a diversified compliant garments manufacturer based in.  
             <a className='text-blue-700 underline'> Read more...</a></p>
            <div className='text-end text-2xl italic'><p>– Director, W. Apparels Ltd.</p></div>
          </div>
      </div>
    </div>
  );
};

export default MessagefromtheDirector;
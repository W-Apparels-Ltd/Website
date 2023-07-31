import React from 'react';
import pic from '../images/factory_purpose/1.jpg'

const SafetyMeasures = () => {
    return (
        <div style={{
            backgroundImage:`linear-gradient(to bottom, rgba(135, 124, 201, 0.52), rgba(24, 22, 117, 0.73)), url(${pic})`,
          }}  className= "  mx-auto w-full bg-cover bg-fixed bg-center bg-no-repeat shadow-lg">
            
            <div>
                <div className='p-20 text-center'><h1 className='lg:text-5xl text-3xl text-white font-bold mt-5'>Safety Measures</h1></div>
                
            </div>
            <div className=' bg-base-100 lg:px-20'>
            <div className='p-10'>
              <></>
            </div>
          </div>
          </div>
    );
};

export default SafetyMeasures;
import React from 'react';
import pic from '../images/factory_purpose/1.jpg'
import Dr from '../images/personnel/team-1.png'
import D1 from '../images/personnel/team-2.png'
import D2 from '../images/personnel/team-3-removebg-preview.jpg'
import D3 from '../images/personnel/team-4.jpg'


const MeetTheTeam = () => {
  return (
    <div style={{
      backgroundImage:`linear-gradient(to bottom, rgba(135, 124, 201, 0.52), rgba(24, 22, 117, 0.73)), url(${pic})`,
    }}  className= "  mx-auto w-full bg-cover bg-fixed bg-center bg-no-repeat shadow-lg">  
      <div>
          <div className='p-20 text-center'><h1 className='text-5xl text-white font-bold'>The Team of W Apparels Ltd.</h1></div>
          
      </div>
      <div className='mt-20 rounded-xl'>
          <div className='bg-base-200 '>
          <div className=" bg-base-200 px-20 pt-20">
         
              <div className='text-center'>
                <h1 className="text-4xl font-bold">Managing Director</h1>
                <div className='grid justify-items-center mt-10'>
                    <img className='w-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={Dr} alt="" />
                </div>
                <div className='my-4'>
                  <h1 className="text-3xl font-bold">Akhter Hossain</h1>
                  <p className="text-xl">At last but not the least we wish a friendly global business relationship in days to come.</p>
                </div>
               
              </div>
          </div>
          <div className="bg-base-200 px-20 pt-10">
              <div className='text-center'>
              <h1 className="text-4xl font-bold">Directors</h1>
              </div>
              <div className='flex justify-around lg:ms-10'>
                <div className='text-center m-5'>
                  
                  <div className='grid justify-items-center mt-10'>
                      <img className='w-44 h-44 object-cover rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={D1} alt="" />
                  </div>
                  <div className='my-4'>
                    <h1 className="text-3xl font-bold">MD Zahirul Islam</h1>
                    <p className="text-xl">we never compromise in quality and deadlines.</p>
                  </div>
                </div>
                <div className='text-center m-5'>
                  
                  <div className='grid justify-items-center mt-10'>
                      <img className='w-44 h-44 object-cover rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={D2} alt="" />
                  </div>
                  <div className='my-4'>
                    <h1 className="text-3xl font-bold">MD Zahirul Islam</h1>
                    <p className="text-xl">we never compromise in quality and deadlines.</p>
                  </div>
                </div>
                <div className='text-center m-5'>
                  
                  <div className='grid justify-items-center mt-10'>
                      <img className='w-44 h-44 object-cover rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={D3} alt="" />
                  </div>
                  <div className='my-4'>
                    <h1 className="text-3xl font-bold">Sharif Raihan Hemon</h1>
                    <p className="text-xl">Vivamus motestues phasellus enim sed orci eu pharetra.</p>
                  </div>
                </div>
              </div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
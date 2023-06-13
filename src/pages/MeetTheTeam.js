import React from 'react';
import pic from '../images/factory_purpose/1.jpg'
import Dr from '../images/personnel/team-1.png'
import D1 from '../images/personnel/team-2.png'
import D2 from '../images/personnel/team-3-removebg-preview.jpg'
import D3 from '../images/personnel/team-4.jpg'
import NS from '../images/personnel/NS.jpeg'


const MeetTheTeam = () => {
  return (
    <div style={{
      backgroundImage:`linear-gradient(to bottom, rgba(135, 124, 201, 0.52), rgba(24, 22, 117, 0.73)), url(${pic})`,
    }}  className= "  mx-auto w-full bg-cover bg-fixed bg-center bg-no-repeat shadow-lg">  
      <div>
          <div className='p-20 text-center'><h1 className='lg:text-5xl text-3xl text-white font-bold mt-5'>The Team of W Apparels Ltd.</h1></div>
          
      </div>
      <div className='lg:mt-20 mt-10 rounded-xl'>
          <div className='bg-base-200 '>
          <div className=" bg-base-200 px-10 pt-20">
            <div className='text-center'>
              <h1 className="lg:text-4xl text-3xl font-bold">Managing Director</h1>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols justify-items-center justify-center  m-10'>
              <div className='text-center'>
                  
                  <div className='grid justify-items-center mt-10'>
                      <img className='w-48 h-48 object-cover rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={NS} alt="" />
                  </div>
                  <div className='my-4'>
                    <h1 className="lg:text-4xl text-2xl md:text-3xl font-bold">Nigher Sultana</h1>
                    <p className="text-xl">At last but not the least we wish a friendly global business relationship in days to come.</p>
                  </div>
                
                </div>
              <div className='text-center'>
                  
                  <div className='grid justify-items-center mt-10'>
                      <img className='w-48 h-48 object-cover rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={Dr} alt="" />
                  </div>
                  <div className='my-4'>
                    <h1 className="lg:text-4xl text-2xl md:text-3xl font-bold">Akhter Hossain</h1>
                    <p className="text-xl">At last but not the least we wish a friendly global business relationship in days to come.</p>
                  </div>
                
                </div>
            </div>
          </div>
          <div className="bg-base-200 px-10 pt-10">
              <div className='text-center'>
              <h1 className="text-4xl font-bold">Directors</h1>
              </div>
              <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols justify-items-center justify-center  lg:ms-10'>
                <div className='text-center m-5'>
                  
                  <div className='grid justify-items-center mt-10'>
                      <img className='w-44 h-44 object-cover rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={D1} alt="" />
                  </div>
                  <div className='my-4'>
                    <h1 className="lg:text-4xl text-2xl md:text-3xl font-bold">MD Zahirul Islam</h1>
                    <p className="text-xl">we never compromise in quality and deadlines.</p>
                  </div>
                </div>
                <div className='text-center m-5'>
                  
                  <div className='grid justify-items-center mt-10'>
                      <img className='w-44 h-44 object-cover rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={D2} alt="" />
                  </div>
                  <div className='my-4'>
                    <h1 className="lg:text-4xl text-2xl md:text-3xl font-bold">Naushin Adnin</h1>
                    <p className="text-xl">we never compromise in quality and deadlines.</p>
                  </div>
                </div>
                <div className='text-center m-5'>
                  
                  <div className='grid justify-items-center mt-10'>
                      <img className='w-44 h-44 object-cover rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={D3} alt="" />
                  </div>
                  <div className='my-4'>
                    <h1 className="lg:text-4xl text-2xl md:text-3xl font-bold">Sharif Raihan Hemon</h1>
                    <p className="text-xl">Vivamus motestues phasellus enim sed orci eu pharetra.</p>
                  </div>
                </div>
              </div>
          </div>
          <div className="bg-base-200 px-10 pt-10">
              <div className='text-center'>
              <h1 className="lg:text-4xl text-2xl md:text-3xl font-bold">Corporate Staff</h1>
              </div>
              <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 justify-items-center justify-center lg:ms-10'>
              <div className='text-center m-5'>
                  
                <div className='grid justify-items-center mt-10'>
                      <img className='w-44 h-44 object-cover rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={NS} alt="" />
                  </div>
                  <div className='my-4'>
                    <h1 className="text-xl lg:text-3xl  font-bold">Name</h1>
                    <p className="text-xl">Designation</p>
                  </div>
                </div>
              <div className='text-center m-5'>
                  
                <div className='grid justify-items-center mt-10'>
                      <img className='w-44 h-44 object-cover rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={NS} alt="" />
                  </div>
                  <div className='my-4'>
                    <h1 className="text-xl lg:text-3xl font-bold">Name</h1>
                    <p className="text-xl">Designation</p>
                  </div>
                </div>
              <div className='text-center m-5'>
                  
                <div className='grid justify-items-center mt-10'>
                      <img className='w-44 h-44 object-cover rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={NS} alt="" />
                  </div>
                  <div className='my-4'>
                    <h1 className="text-xl lg:text-3xl font-bold">Name</h1>
                    <p className="text-xl">Designation</p>
                  </div>
                </div>
              <div className='text-center m-5'>
                  
                <div className='grid justify-items-center mt-10'>
                      <img className='w-44 h-44 object-cover rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={NS} alt="" />
                  </div>
                  <div className='my-4'>
                    <h1 className="text-xl lg:text-3xl font-bold">Name</h1>
                    <p className="text-xl">Designation</p>
                  </div>
                </div>
              <div className='text-center m-5'>
                  
                <div className='grid justify-items-center mt-10'>
                      <img className='w-44 h-44 object-cover rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={NS} alt="" />
                  </div>
                  <div className='my-4'>
                    <h1 className="text-xl lg:text-3xl font-bold">Name</h1>
                    <p className="text-xl">Designation</p>
                  </div>
                </div>
              <div className='text-center m-5'>
                  
                <div className='grid justify-items-center mt-10'>
                      <img className='w-44 h-44 object-cover rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={NS} alt="" />
                  </div>
                  <div className='my-4'>
                    <h1 className="text-xl lg:text-3xl font-bold">Name</h1>
                    <p className="text-xl">Designation</p>
                  </div>
                </div>
              <div className='text-center m-5'>
                  
                <div className='grid justify-items-center mt-10'>
                      <img className='w-44 h-44 object-cover rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={NS} alt="" />
                  </div>
                  <div className='my-4'>
                    <h1 className="text-xl lg:text-3xl font-bold">Name</h1>
                    <p className="text-xl">Designation</p>
                  </div>
                </div>
              <div className='text-center m-5'>
                  
                <div className='grid justify-items-center mt-10'>
                      <img className='w-44 h-44 object-cover rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={NS} alt="" />
                  </div>
                  <div className='my-4'>
                    <h1 className="text-xl lg:text-3xl font-bold">Name</h1>
                    <p className="text-xl">Designation</p>
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
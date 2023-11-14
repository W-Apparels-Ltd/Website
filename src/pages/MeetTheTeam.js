import React from 'react';
import pic from '../images/IMG_.JPG'
import Dr from '../images/personnel/team-1.png'
import D1 from '../images/personnel/team-2.png'
import D2 from '../images/personnel/team-3-removebg-preview.jpg'
import D3 from '../images/personnel/team-4.jpg'
import NS from '../images/OIP.jpg'
import CS1 from '../images/personnel/IMG_2447(1) (1)-min.jpg'
import CS2 from '../images/personnel/IMG_2437(2) (1)-min.jpg'
import CS7 from '../images/personnel/Ashraf.jpg'
import CS8 from '../images/personnel/last.jpg'
import CS9 from '../images/knn.jpg'
import CS10 from '../images/personnel/bashar.jpg'
import AM from '../images/personnel/AM.jpg'
import Sujan from '../images/personnel/Sujan.jpg'
import alamin from '../images/personnel/Al-ameen.jpg'
import Nav2 from './Nav2';


const MeetTheTeam = () => {
  return (
    <div style={{
      backgroundImage:` url(${pic})`,
    }}  className= "  mx-auto w-full bg-cover bg-fixed bg-bottom bg-no-repeat shadow-lg font-Nunito">  
      <Nav2></Nav2>
      <div>
          <div className='pb-24 pt-20 text-center bg-black/50'><h1 className='lg:text-5xl text-3xl text-white font-bold mb-20'>Meet Our Leaders</h1></div>
          
      </div>
      <div className=' rounded-xl'>
          <div className='bg-base-200 '>
          <div className=" bg-base-200 px-10 pt-10">
            <div className='text-center'>
              <h1 className="lg:text-4xl text-3xl font-bold">Chairman</h1>
            </div>
            <div className='grid  grid-cols justify-items-center justify-center  m-5'>
              <div className='text-center'>
                  
                  
                  <div className='my-2'>
                    <h1 className="lg:text-4xl text-2xl md:text-3xl italic text-gray-700 font-bold">Nigher Sultana</h1>
                    <p className="text-xl">At last but not the least we wish a friendly global business relationship in days to come.</p>
                  </div>
                
                </div>
              
            </div>
          </div>
          <div className=" bg-base-200 px-10 pt-5">
            <div className='text-center'>
              <h1 className="lg:text-4xl text-3xl font-bold">Managing Director</h1>
            </div>
            <div className='grid  grid-cols justify-items-center justify-center  m-5'>
              
              <div className='text-center'>
                  
                  <div className='grid justify-items-center mt-5'>
                      <img className='w-48 h-48 object-cover rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={Dr} alt="" />
                  </div>
                  <div className='my-4'>
                    <h1 className="lg:text-4xl text-2xl md:text-3xl font-bold">Akhter Hossain</h1>
                    <p className="text-xl">At last but not the least we wish a friendly global business relationship in days to come.</p>
                  </div>
                
                </div>
            </div>
          </div>
          <div className="bg-base-200  pt-10">
              <div className='text-center'>
              <h1 className="text-4xl font-bold">Directors</h1>
              </div>
              <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols justify-items-center justify-center'>
                <div className='text-center m-5'>
                  
                  <div className='grid justify-items-center mt-10'>
                      <img className='w-44 h-44 object-cover rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={D1} alt="" />
                  </div>
                  <div className='my-4'>
                    <h1 className="lg:text-3xl text-2xl md:text-3xl font-bold">MD Zahirul Islam</h1>
                    <p className="text-xl text-gray-700 font-bold">Operation & Admin</p>
                    <p>zahir@wapparels.com</p>
                  </div>
                </div>
                <div className='text-center m-5'>
                  
                  <div className='grid justify-items-center mt-10'>
                      <img className='w-44 h-44 object-cover rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={D2} alt="" />
                  </div>
                  <div className='my-4'>
                    <h1 className="lg:text-3xl text-2xl md:text-3xl font-bold">Naushin Adnin</h1>
                    <p className="text-xl text-gray-700 font-bold">Administration & Marketing</p>
                    <p>adnin@wapparels.com</p>
                  </div>
                </div>
                <div className='text-center m-5'>
                  
                  <div className='grid justify-items-center mt-10'>
                      <img className='w-44 h-44 object-cover rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={D3} alt="" />
                  </div>
                  <div className='my-4'>
                    <h1 className="lg:text-3xl text-2xl md:text-3xl font-bold">Sharif Rayhan Hemon</h1>
                    <p className="text-xl text-gray-700 font-bold">Sourcing, Planning & Merchandising</p>
                    <p>hemon@qualityapparels.com</p>
                  </div>
                </div>
              </div>
          </div>
          <div className="bg-base-200 pt-10">
              <div className='text-center'>
              <h1 className="lg:text-4xl text-2xl md:text-3xl font-bold">Corporate Staff</h1>
              </div>
              <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 justify-items-center justify-center'>
              <div className='text-center m-5'>
                  
                <div className='grid justify-items-center mt-10'>
                      <img className='w-44 h-44 object-cover rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={CS1} alt="" />
                  </div>
                  <div className='my-4'>
                    <h1 className="text-xl lg:text-3xl  font-bold">Anwar Hossain Dipu</h1>
                    <p className="text-xl font-bold text-gray-700">GM-HR-Admin</p>
                    <p className="text-xl">Compliance & Commercial</p>
                    <p>dipu@qualityapparels.com</p>
                  </div>
                </div>
              <div className='text-center m-5'>
                  
                <div className='grid justify-items-center mt-10'>
                      <img className='w-44 h-44 object-cover rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={CS2} alt="" />
                  </div>
                  <div className='my-4'>
                    <h1 className="text-xl lg:text-3xl font-bold">Md. Fakhrul Islam</h1>
                    <p className="text-xl font-bold text-gray-700">Adviser</p>
                    <p className="text-xl">Commercial, Banking, Finance & Training</p>
                    <p>mfislam@wapparels.com</p>
                  </div>
                </div>
              
              <div className='text-center m-5'>
                  
                <div className='grid justify-items-center mt-10'>
                      <img className='w-44 h-44 object-cover rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={alamin} alt="" />
                  </div>
                  <div className='my-4'>
                    <h1 className="text-xl lg:text-3xl font-bold">Al-amin</h1>
                    <p className="text-xl font-bold text-gray-700">Manager</p>
                    <p className="text-xl">Merchandising</p>
                    <p>al-amin@qualityapparels.com</p>
                  </div>
                </div>
                <div className='text-center m-5'>
                  
                  <div className='grid justify-items-center mt-10'>
                        <img className='w-44 h-44 object-cover rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={Sujan} alt="" />
                    </div>
                    <div className='my-4'>
                      <h1 className="text-xl lg:text-3xl font-bold">Sujan Mahmud</h1>
                      <p className="text-xl font-bold text-gray-700">Manager</p>
                      <p className="text-xl">Merchandising</p>
                      <p>sujan@wapparels.com</p>
                    </div>
                  </div>
              <div className='text-center m-5'>
                  
                <div className='grid justify-items-center mt-10'>
                      <img className='w-44 h-44 object-cover rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={AM} alt="" />
                  </div>
                  <div className='my-4'>
                    <h1 className="text-xl lg:text-3xl font-bold">Muhammad Abdullah</h1>
                    <p className="text-xl font-bold text-gray-700">Sr. Commercial Officer</p>
                    <p className="text-xl">Department of Commercial</p>
                    <p>abdullah@wapparels.com</p>
                  </div>
                </div>
              <div className='text-center m-5'>
                  
                <div className='grid justify-items-center mt-10'>
                      <img className='w-44 h-44 object-cover rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={CS9} alt="" />
                  </div>
                  <div className='my-4'>
                    <h1 className="text-xl lg:text-3xl font-bold">Md.Kanon Mazumder</h1>
                    <p className="text-xl font-bold text-gray-700">Sr.Commercial officer (Import)</p>
                    <p className="text-xl">Department of Commercial</p>
                    <p>kanon@wapparels.com</p>
                  </div>
                </div>
              <div className='text-center m-5'>
                  
                <div className='grid justify-items-center mt-10'>
                      <img className='w-44 h-44 object-cover rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={CS7} alt="" />
                  </div>
                  <div className='my-4'>
                    <h1 className="text-xl lg:text-3xl font-bold">Ashraful Islam</h1>
                    <p className="text-xl font-bold text-gray-700">Sr. Commercial Officer</p>
                    <p className="text-xl">Department of Commercial</p>
                    <p>import@wapparels.com</p>
                  </div>
                </div>
              <div className='text-center m-5'>
                  
                <div className='grid justify-items-center mt-10 '>
                      <img className='w-44 h-44 object-cover rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={CS10} alt="" />
                  </div>
                  <div className='my-4'>
                    <h1 className="text-xl lg:text-3xl font-bold">Mahmud Ibne Bashar</h1>
                    <p className="text-xl font-bold text-gray-700">Sr. Accounts Officer</p>
                    <p className="text-xl">Accounts & Finance</p>
                  </div>
                </div>
              <div className='text-center m-5'>
                  
                <div className='grid justify-items-center mt-10 '>
                      <img className='w-44 h-44 object-cover rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' src={CS8} alt="" />
                  </div>
                  <div className='my-4'>
                    <h1 className="text-xl lg:text-3xl font-bold">Md. Ripan Hasan</h1>
                    <p className="text-xl font-bold text-gray-700">Manager</p>
                    <p className="text-xl">Industrial Engineering</p>
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
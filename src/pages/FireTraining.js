import React from 'react';
import pic from '../images/FireAndSafety/fire2.jpg'
import pic1 from '../images/FireAndSafety/fire1.jpg'
import pic2 from '../images/FireAndSafety/fire3.jpg'


const FireTraining = () => {
    return (
        <div style={{
            backgroundImage:`linear-gradient(to bottom, rgba(135, 124, 201, 0.52), rgba(24, 22, 117, 0.73)), url(${pic})`,
          }}  className= "  mx-auto w-full bg-cover bg-fixed bg-center bg-no-repeat shadow-lg">
            
            <div>
                <div className='p-20 text-center'><h1 className='lg:text-5xl text-3xl text-white font-bold mt-5'>Fire Training</h1></div>
                
            </div>
            <div className=' bg-base-100'>
            <div className="hero min-h-screen bg-base-200 lg:px-10 px-0">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={pic} className="lg:max-w-xl w-full rounded-lg shadow-2xl" />
                <div>
                  <h1 className="lg:text-5xl text-3xl  font-bold">Box Office News!</h1>
                  <p className="py-6 text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  
                </div>
              </div>
            </div>
            <div className="hero min-h-screen bg-base-200 lg:px-10 px-0">
              <div className="hero-content flex-col lg:flex-row">
                <img src={pic1} className="lg:max-w-lg w-full rounded-lg shadow-2xl" />
                <div className='lg:ps-5'>
                  <h1 className="lg:text-5xl text-3xl  font-bold">Box Office News!</h1>
                  <p className="py-6 text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  
                </div>
              </div>
            </div>
            <div className="hero min-h-screen bg-base-200 lg:px-10 px-0">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={pic2} className="lg:max-w-xl w-full rounded-lg shadow-2xl" />
                <div>
                  <h1 className="lg:text-5xl text-3xl  font-bold">Box Office News!</h1>
                  <p className="py-6 text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                  
                </div>
              </div>
            </div>
          </div>
          </div>
    );
};

export default FireTraining;
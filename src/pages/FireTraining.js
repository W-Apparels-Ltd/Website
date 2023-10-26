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
              <div>
                <img src={pic1} className="lg:max-w-xl w-full rounded-lg shadow-2xl" />
                <h1 className='text-center text-gray-700'>image caption</h1>
                </div>
                <div className='w-1/2'>
                  <h1 className="lg:text-5xl text-3xl  font-bold">Fire Training</h1>
                  <p className="py-6 text-justify">In our garments industry, fire safety is a paramount concern, and we take proactive measures to
ensure the well-being of our employees. Central to our safety strategy is the organization of regular fire
training sessions that occur throughout the year. These sessions are designed to not only raise
awareness of fire hazards within the workplace but also to educate our staff on how to respond
effectively in the event of a fire emergency.</p>
                  
                </div>
              </div>
            </div>
            <div className="hero min-h-screen bg-base-200 lg:px-10 px-0">
              <div className="hero-content flex-col lg:flex-row">
              <div>
                <img src={pic2} className="lg:max-w-xl w-full rounded-lg shadow-2xl" />
                <h1 className='text-center text-gray-700'>image caption</h1>
                </div>
                <div className='lg:ps-5 w-1/2'>
                  <h1 className="lg:text-5xl text-3xl  font-bold"></h1>
                  <p className="py-6 text-justify">Our comprehensive fire training program covers a spectrum of essential topics. First and
foremost, employees are thoroughly trained on the proper usage of fire extinguishers, equipping them
with the skills needed to respond efficiently should a fire occur. In addition, our staff is educated on
essential safety procedures to follow during a fire emergency, instilling a culture of preparedness.</p>
                  
                </div>
              </div>
            </div>
            <div className="hero min-h-screen bg-base-200 lg:px-10 px-0">
              <div className="hero-content flex-col lg:flex-row-reverse">
              <div>
                <img src={pic1} className="lg:max-w-xl w-full rounded-lg shadow-2xl" />
                <h1 className='text-center text-gray-700'>image caption</h1>
                </div>
                <div className='w-1/2'>
                  <h1 className="lg:text-5xl text-3xl  font-bold"></h1>
                  <p className="py-6 text-justify">To provide early warnings of fire hazards, we have strategically installed smoke alarms in key
areas of our facility. Understanding the critical importance of knowing evacuation routes and
procedures, we emphasize these aspects to ensure that our employees are well-prepared to navigate to
safety in the event of a fire.</p>
                  
                </div>
              </div>
            </div>
            <div className="hero min-h-screen bg-base-200 lg:px-10 px-0">
              <div className="hero-content flex-col lg:flex-row">
              <div>
                <img src={pic2} className="lg:max-w-xl w-full rounded-lg shadow-2xl" />
                <h1 className='text-center text-gray-700'>image caption</h1>
                </div>
                <div className='w-1/2'>
                  <h1 className="lg:text-5xl text-3xl  font-bold"></h1>
                  <p className="py-6 text-justify">Customer input was valued, and safety concerns and recommendations from customers were integrated
into the safety measures to ensure alignment with their expectations.</p>
                  
                </div>
              </div>
            </div>
            <div className="hero min-h-screen bg-base-200 lg:px-10 px-0">
              <div className="hero-content flex-col lg:flex-row-reverse">
              <div>
                <img src={pic1} className="lg:max-w-xl w-full rounded-lg shadow-2xl" />
                <h1 className='text-center text-gray-700'>image caption</h1>
                </div>
                <div className='w-1/2'>
                  <h1 className="lg:text-5xl text-3xl  font-bold"></h1>
                  <p className="py-6 text-justify">To further minimize fire risks, we&#39;ve implemented a strict no-smoking policy within our industry,
thus preventing potential fire hazards related to smoking materials. Our dedication to safety extends to
the correct usage of portable air conditioners, which is included in our fire safety training.</p>
                  
                </div>
              </div>
            </div>
            <div className="hero min-h-screen bg-base-200 lg:px-10 px-0">
              <div className="hero-content flex-col lg:flex-row">
              <div>
                <img src={pic2} className="lg:max-w-xl w-full rounded-lg shadow-2xl" />
                <h1 className='text-center text-gray-700'>image caption</h1>
                </div>
                <div className='w-1/2'>
                  <h1 className="lg:text-5xl text-3xl  font-bold"></h1>
                  <p className="py-6 text-justify">In addition to these measures, our employees are trained to identify potential fire hazards,
evaluate the associated risks, and implement measures to either reduce, remove, or protect against
these risks. This holistic approach to fire safety encompasses both prevention and preparedness.</p>
                  
                </div>
              </div>
            </div>
            <div className="hero min-h-screen bg-base-200 lg:px-10 px-0">
              <div className="hero-content flex-col lg:flex-row-reverse">
              <div>
                <img src={pic1} className="lg:max-w-xl w-full rounded-lg shadow-2xl" />
                <h1 className='text-center text-gray-700'>image caption</h1>
                </div>
                <div className='w-1/2'>
                  <h1 className="lg:text-5xl text-3xl  font-bold"></h1>
                  <p className="py-6 text-justify">To ensure that our safety measures remain effective, we conduct regular reviews and ongoing
monitoring. We are committed to maintaining a secure and hazard-free working environment for our
employees. To reinforce fire safety awareness and continue striving for a risk-free working environment,
we have established a dedicated fire safety cell that conducts training sessions, reviews activities, and
stays informed about relevant fire-related laws and regulations. This commitment to fire safety is a
fundamental part of our mission to provide a secure and supportive workplace for our employees.</p>
                  
                </div>
              </div>
            </div>
          </div>
          </div>
    );
};

export default FireTraining;
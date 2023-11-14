import React, { useEffect } from 'react';
import pic from '../images/FireAndSafety/fire3.jpg'
import pic1 from '../images/FireAndSafety/fire1.jpg'
import pic2 from '../images/FireAndSafety/fire3.jpg'

const SafetyMeasures = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return (
        <div style={{
            backgroundImage:`linear-gradient(to bottom, rgba(135, 124, 201, 0.52), rgba(24, 22, 117, 0.73)), url(${pic})`,
          }}  className= "  mx-auto w-full bg-cover bg-fixed bg-bottom bg-no-repeat shadow-lg">
            
            <div>
                <div className='p-20 text-center'><h1 className='lg:text-5xl text-3xl text-white font-bold mt-5'>Safety Measures</h1></div>
                
            </div>
            <div className=' bg-base-100'>
            <div className="hero min-h-screen bg-base-200 lg:px-10 px-0">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                < img src={pic} className="lg:max-w-xl w-full rounded-lg shadow-2xl" />
                <h1 className='text-center text-gray-700'>image caption</h1>
                </div>
              
                <div className='lg:w-1/2'>
                  <h1 className="lg:text-5xl text-3xl  font-bold">Safety Measures</h1>
                  <p className="py-6 text-justify">In the latter half of 2021, W Apparels Ltd significantly bolstered its safety measures to effectively
address potential risks and reduce the impact of fire-related incidents. These measures were designed
to cover a spectrum of safety aspects, encompassing organizational, technical, and individual
precautions within the garments industry. First and foremost, emergency preparedness received a high priority. To ensure quick responses to any
crisis, first aid boxes, fire extinguishers, and emergency lights were strategically positioned throughout
the facility, including on every floor, exit paths, and near exit doors. Fire safety was another central
concern, with the installation of fire alarms, clearly marked exit signs, and the practice of keeping exit
doors open during factory operations.</p>
                  
                </div>
              </div>
            </div>
            <div className="hero min-h-screen bg-base-200 lg:px-10 px-0">
              <div className="hero-content flex-col lg:flex-row">
                <div>
                <img src={pic1} className="lg:max-w-lg w-full rounded-lg shadow-2xl" />
                <h1 className='text-center text-gray-700'>image caption</h1>
                </div>
                
                <div className='lg:ps-5 lg:w-1/2'>
                  <h1 className="lg:text-5xl text-3xl  font-bold"></h1>
                  <p className="py-6 text-justify">Personnel awareness and training were essential components of the safety strategy. Employees were
consistently reminded to remain vigilant, wear appropriate attire, use the right tools for their tasks, and
undergo proper training in safe lifting techniques. Additionally, special attention was given to machine
safety, particularly regarding sewing machines, with workers provided protective devices and clear
instructions on their usage. Customer input was valued, and safety concerns and recommendations from customers were integrated
into the safety measures to ensure alignment with their expectations</p>
                  
                </div>
              </div>
            </div>
            <div className="hero min-h-screen bg-base-200 lg:px-10 px-0">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                <img src={pic2} className="lg:max-w-xl w-full rounded-lg shadow-2xl" />
                <h1 className='text-center text-gray-700'>image caption</h1>
                </div>

                <div className='lg:w-1/2'>
                  <h1 className="lg:text-5xl text-3xl  font-bold"></h1>
                  <p className="py-6 text-justify">This comprehensive approach to safety, encompassing fire safety, first aid, emergency preparedness,
and thorough employee training, underscores the commitment of W Apparels Ltd to foster a secure
work environment that prioritizes the well-being of its staff and the quality and reliability of its products.</p>
                  
                </div>
              </div>
            </div>
            
            
          </div>
          </div>
    );
};

export default SafetyMeasures;
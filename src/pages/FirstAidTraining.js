import React from 'react';
import pic from '../images/FireAndSafety/fire1.jpg'
import pic1 from '../images/factory_purpose/a1.jpg'
import pic2 from '../images/factory_purpose/a2.jpg'
import { useEffect } from 'react';
import Nav2 from './Nav2';
import Footer from './Footer';

const FirstAidTraining = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return (
      <>
      <Nav2></Nav2>
        <div style={{
            backgroundImage:`linear-gradient(to bottom, rgba(135, 124, 201, 0.52), rgba(24, 22, 117, 0.60)), url(${pic})`,
          }}  className= "  mx-auto w-full bg-cover bg-fixed bg-center bg-no-repeat shadow-lg">
            
            <div>
                <div className='p-20 text-center'><h1 className='lg:text-5xl text-3xl text-white font-bold mt-5'>First Aid Training</h1></div>
                 
            </div>
            <div className=' bg-base-100'>
            <div className="hero min-h-screen bg-base-200 lg:px-10 px-0">
              <div className="hero-content flex-col lg:flex-row-reverse">
              <div>
                <img src={pic1} className="lg:max-w-xl w-full rounded-lg shadow-2xl" />
                <h1 className='text-center text-gray-700'>Healing Hands: First Aid Training Moments at W. Apparels Ltd.</h1>
                </div>
                <div className='lg:w-1/2'>
                  <h1 className="lg:text-5xl text-3xl  font-bold">First Aid Training</h1>
                  <p className="py-6 text-justify">Ever since the inception of our garments industry, we have prioritized the well-being of our employees
by establishing comprehensive first aid facilities. These facilities have been integral to our safety
protocols, with first aid boxes strategically placed on each floor, stocked with a variety of essential
medicines and medical supplies. This accessibility ensures that immediate medical assistance is available
when needed. To further enhance our medical response capabilities, we have also entered into separate agreements
with medical college hospitals. These collaborations enable us to provide specialized care in acute
situations, ensuring that our employees receive the highest level of medical attention, should it be
necessary. </p>
                  
                </div>
              </div>
            </div>
            <div className="hero min-h-screen bg-base-200 lg:px-10 px-0">
              <div className="hero-content flex-col lg:flex-row">
              <div>
                <img src={pic2} className="lg:max-w-xl w-full rounded-lg shadow-2xl" />
                <h1 className='text-center text-gray-700'>Emergency Ready: First Aid Drills in Action.</h1>
                </div>
                <div className='lg:ps-5 lg:w-1/2'>
                  <h1 className="lg:text-5xl text-3xl  font-bold"></h1>
                  <p className="py-6 text-justify">Central to our safety measures is the implementation of first aid training for our staff. This training
equips our everyday workers with the knowledge and skills required to respond effectively to a medical
emergency, bridging the gap until more qualified medical assistance arrives. First aid training
encompasses a range of vital skills and procedures, allowing individuals to respond to injuries and
perform basic emergency medical care. Some of the key aspects of first aid training include the ability to assess a situation quickly and calmly,
ensuring the safety of both the casualty and the responder. This includes understanding whether the
injured person is in any immediate danger and taking measures to protect them from harm. Preventing
infection is another crucial element of the training, emphasizing the importance of maintaining a sterile
environment when administering first aid. Additionally, our training instills the ability to arrange for
further assistance or medical help when required, ensuring that our employees are well-prepared to
handle a variety of emergency situations.</p>
                  
                </div>
              </div>
            </div>
            <div className="hero min-h-screen bg-base-200 lg:px-10 px-0">
              <div className="hero-content flex-col lg:flex-row-reverse">
              <div>
                <img src={pic1} className="lg:max-w-xl w-full rounded-lg shadow-2xl" />
                <h1 className='text-center text-gray-700'>Response Readiness: First Aid Training at W. Apparels Ltd.</h1>
                </div>
                <div className='lg:w-1/2'>
                  <h1 className="lg:text-5xl text-3xl  font-bold"></h1>
                  <p className="py-6 text-justify">In summary, our commitment to first aid facilities and training within our garments industry is a
testament to our dedication to the safety and well-being of our employees. These measures, including
accessible first aid supplies and partnerships with medical college hospitals, along with comprehensive
training, empower our staff to respond effectively in times of medical emergencies, ultimately creating a
safer and more secure working environment.</p>
                  
                </div>
              </div>
            </div>
           
            
            
          </div>
          </div>
          <Footer></Footer>
          </>
    );
};

export default FirstAidTraining;
import React from 'react';
import pic from '../images/Childcare/IMG_3395.jpg'
import pic1 from '../images/Childcare/IMG_3405-removebg-preview.jpg'
import pic2 from '../images/Childcare/IMG_3395.jpg'
import { useEffect } from 'react';
import Nav2 from './Nav2';
import Footer from './Footer';

const ChildCare = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return (
      <>
      <Nav2></Nav2>
        <div style={{
          backgroundImage:`linear-gradient(to bottom, rgba(135, 124, 201, 0.52), rgba(24, 22, 117, 0.73)), url(${pic})`,
        }}  className= "  mx-auto w-full bg-cover bg-fixed bg-bottom bg-no-repeat shadow-lg">
            
            <div>
                <div className='p-20 text-center'><h1 className='lg:text-5xl text-3xl text-white font-bold mt-5'>Child Care</h1></div>
                
            </div>
            <div className=' bg-base-100'>
            <div className="hero min-h-screen bg-base-200 lg:px-10 px-0">
              <div className="hero-content flex-col lg:flex-row-reverse">
              <div>
                <img src={pic1} className="lg:max-w-xl w-full rounded-lg shadow-2xl" />
                <h1 className='text-center text-gray-700'>Kids at Heart: Child Care Moments.</h1>
                </div>
                <div className='lg:w-1/2'>
                  <h1 className="lg:text-5xl text-3xl  font-bold">Child Care</h1>
                  <p className="py-6 text-justify">As a company, we recognize the significant benefits of establishing childcare facilities within our
garment factories to enhance the well-being of our employees, especially those who are parents.
To achieve this, we follow a structured approach. First and foremost, we take the initiative to gain a comprehensive understanding of the specific
needs and preferences of our workforce through surveys or interviews. This valuable insight
informs the design and offerings of our childcare facility, making it more tailored to our
employees&#39; requirements. Next, we ensure the allocation of a safe and suitable space within our factory premises for the
childcare facility. We take every measure to ensure it complies with all safety standards and
regulations. Simultaneously, we employ qualified staff with the necessary training and
experience to manage the facility, creating a secure and nurturing environment for the children.</p>
                  
                </div>
              </div>
            </div>
            <div className="hero min-h-screen bg-base-200 lg:px-10 px-0">
              <div className="hero-content flex-col lg:flex-row">
              <div>
                <img src={pic2} className="lg:max-w-xl w-full rounded-lg shadow-2xl" />
                <h1 className='text-center text-gray-700'>Little Joys: W. Apparels Ltd.'s Child Care.</h1>
                </div>
                <div className='lg:ps-5 lg:w-1/2'>
                  <h1 className="lg:text-5xl text-3xl  font-bold"></h1>
                  <p className="py-6 text-justify">Incorporating educational and recreational activities into the facility is a key priority for us. We
cater to different age groups by including play areas, learning materials, and activities that
promote both physical and cognitive development. Additionally, we prioritize meeting the
nutritional needs of the children, with a focus on serving nutritious meals and snacks while
accommodating any dietary restrictions or allergies. We consider health and safety measures vital for the well-being of the children. Implementing
protocols to prevent the spread of diseases and ensuring the overall safety of children is
paramount in our approach. Maintaining open communication with parents and caregivers is one of our ongoing
commitments. We conduct regular feedback sessions to continuously improve the quality of our
childcare services, ensuring that we remain responsive to the needs and preferences of our
employees and their children.</p>
                  
                </div>
              </div>
            </div>
            <div className="hero min-h-screen bg-base-200 lg:px-10 px-0">
              <div className="hero-content flex-col lg:flex-row-reverse">
              <div>
                <img src={pic1} className="lg:max-w-xl w-full rounded-lg shadow-2xl" />
                <h1 className='text-center text-gray-700'>Growing Together: Tiny Tales at W. Apparels Ltd.</h1>
                </div>
                <div className='lg:w-1/2'>
                  <h1 className="lg:text-5xl text-3xl  font-bold"></h1>
                  <p className="py-6 text-justify">Lastly, we emphasize the regular evaluation of the effectiveness of our childcare facility. We
make necessary improvements based on feedback and evolving needs through an iterative
process. This ensures that our childcare facilities consistently serve the best interests of our
employees and their children.</p>
                  
                </div>
              </div>
            </div>
            
            
            
            
            
          </div>
          </div>
          <Footer></Footer>
          </>
    );
};

export default ChildCare;
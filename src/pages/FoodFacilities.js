import React from 'react';
import pic from '../images/factory_purpose/1.jpg'
import pic1 from '../images/Canteen/IMG_3377.jpg'
import pic2 from '../images/Canteen/IMG_3382.jpg'
import pic3 from '../images/Canteen/IMG_3385.jpg'
const FoodFacilities = () => {
    return (
        <div style={{
            backgroundImage:`linear-gradient(to bottom, rgba(135, 124, 201, 0.52), rgba(24, 22, 117, 0.73)), url(${pic})`,
          }}  className= "  mx-auto w-full bg-cover bg-fixed bg-center bg-no-repeat shadow-lg">
            
            <div>
                <div className='p-20 text-center'><h1 className='lg:text-5xl text-3xl text-white font-bold mt-5'>Food Facilities</h1></div>
            </div>
            <div className=' bg-base-100'>
            <div className="hero min-h-screen bg-base-200 lg:px-10 px-0">
              <div className="hero-content flex-col lg:flex-row-reverse">
              <div>
                <img src={pic1} className="lg:max-w-xl w-full rounded-lg shadow-2xl" />
                <h1 className='text-center text-gray-700'>image caption</h1>
                </div>
                <div className='lg:w-1/2'>
                  <h1 className="lg:text-5xl text-3xl  font-bold">Food Facilities</h1>
                  <p className="py-6 text-justify">At our garment factories, we recognize the positive impact of establishing food facilities
on employee satisfaction and productivity. We&#39;ve taken deliberate steps to ensure that our food
facilities meet the diverse needs and preferences of our workforce.<br/>
First and foremost, we prioritize regulatory compliance to adhere to local regulations and
health codes. This commitment ensures that our food facilities consistently meet food safety
standards and legal requirements.<br/>
In terms of infrastructure and space, we allocate a dedicated area equipped with modern
amenities, including cooking equipment, refrigeration, and comfortable seating arrangements
with tables and chairs. This thoughtful allocation creates a welcoming environment for our
employees.
</p>
                  
                </div>
              </div>
            </div>
            
            
            <div className="hero min-h-screen bg-base-200 lg:px-10 px-0">
              <div className="hero-content flex-col lg:flex-row">
              <div>
                <img src={pic2} className="lg:max-w-xl w-full rounded-lg shadow-2xl" />
                <h1 className='text-center text-gray-700'>image caption</h1>
                </div>
                <div className='lg:w-1/2'>
                  <h1 className="lg:text-5xl text-3xl  font-bold"></h1>
                  <p className="py-6 text-justify">Hygiene and safety are of paramount importance to us. We maintain stringent hygiene
practices to uphold cleanliness and prevent contamination. Regular inspections and training
sessions on food handling practices are conducted to guarantee the highest standards of safety
and quality.<br/>
Our menu planning is driven by a commitment to diversity and nutrition. We cater to the
preferences and dietary needs of our employees, providing a range of options that are both
delicious and wholesome.<br/>
We also invest in a well-trained and experienced staff to manage our food facilities. Our
team possesses the necessary expertise in food preparation and service to ensure a high standard
of quality.
</p>
                  
                </div>
              </div>
            </div>
            
            
            <div className="hero min-h-screen bg-base-200 lg:px-10 px-0">
              <div className="hero-content flex-col lg:flex-row-reverse">
              <div>
                <img src={pic3} className="lg:max-w-xl w-full rounded-lg shadow-2xl" />
                <h1 className='text-center text-gray-700'>image caption</h1>
                </div>
                <div className='lg:w-1/2'>
                  <h1 className="lg:text-5xl text-3xl  font-bold"></h1>
                  <p className="py-6 text-justify">Efficiency is key in our approach. We&#39;ve implemented an effective system for timely
food preparation and service to accommodate the busy schedules of our workers, ensuring they
have convenient access to nutritious meals.<br/>
To continuously improve our offerings and services, we&#39;ve established a feedback
mechanism. This allows our employees to provide suggestions and comments, which we value
greatly, as they guide us in making enhancements to the food facility.<br/>
Finally, we actively promote healthy eating habits among our employees. We encourage
nutritious food choices and provide information on the benefits of a balanced diet, fostering a
culture of well-being within our garment factories.</p>
                  
                </div>
                
                
              </div>
            </div>
            
            
          </div>
          </div>
    );
};

export default FoodFacilities;
import React from 'react';
import fb from '../images/584ac2d03ac3a570f94a666d.png'
import li from '../images/inss-removebg-preview.png'
import ins from '../images/Insss-removebg-preview.png'

const Contact = () => {
  return (
    
      <div className=" bg-base-200 p-20 ">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-primary">Contact Us</h1>
            <p className="pt-6">W. Apparels Ltd. 
            295 JA/ 4 Rayer Bazar, Dhaka 1209<br />
            Phone: +8802 9181198,<br /> Email: info@wapparels.com 
            </p>      
            <div className='font-bold'><h1>Follow us on:</h1></div>      
            <div className='flex flex-row my-4'>

            <div className='me-3'>
              <div className='flex justify-center'>
                <img className='w-15 h-5 ' src={li} alt="" />
              </div>
              <h1 className='font-bold'>Linkedin</h1>
            </div >
            <div className='me-3'>
              <div className='flex justify-center'>
                <img className='w-15 h-5 ' src={fb} alt="" />
              </div>
              <h1 className='font-bold'>facebook</h1>
            </div>
            <div className='me-3'>
              <div className='flex justify-center'>
                <img className='w-15 h-5 ' src={ins} alt="" />
              </div>
              <h1 className='font-bold'>Instagram</h1>
            </div>
            

            </div>
            <div className='me-12'>
            <iframe className='w-[500px] h-[300px]' id="gmap_canvas" src="https://maps.google.com/maps?q=W apparels&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
            
            

          </div>
          <div className="card flex-shrink-0 lg:w-1/2 w-full max-w-xl shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                </label>
                <input type="text" placeholder="name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Subject</span>
                </label>
                <input type="text" placeholder="subject" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Message</span>
                </label>
                <textarea className="textarea textarea-bordered" placeholder="message"></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    
  );
};

export default Contact;
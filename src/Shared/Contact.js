import React from 'react';
import { useState } from 'react';

import { Link } from 'react-router-dom';
import Thankyoumodal from '../modal/Thankyoumodal';
import ErrorModal from '../modal/ErrorModal';


const Contact = () => {
  const [open,setOpen]=useState(false);
  const [openError,setOpenError]=useState(false);
  const handleClick=()=>{
    setOpen(false);
  }
  const handleClickError=()=>{
    setOpenError(false);
  }
  const handleSubmit=event=>{
    event.preventDefault();
    const form = event.target;
    const name=form.name.value;
    const email =form.email.value;
    const subject=form.subject.value;
    const message =form.message.value;

    const emaildata={
      name,
      email,
      subject,
      message
    }
    console.log(emaildata);
    
    console.log(emaildata);
    fetch('https://wapparels-server.vercel.app/contactus',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(emaildata)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.status===201){
        console.log('mail sent');
        setOpen(!open);
      }
      else{
        console.log('error');
        setOpenError(!openError);
      }
      
    })
    form.reset();
  } 
  return (

    <div id='contactus' className=" bg-base-200 lg:p-20 font-Nunito">
      <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-start">
        <div className="p-5 lg:p-0 lg:text-left">
          <h1 className="lg:text-5xl text-2xl md:text-3xl font-bold text-primary">Contact Us</h1>
          <p className="pt-6">W. Apparels Ltd.
            295 JA/ 4 Rayer Bazar, Dhaka 1209<br />
            Phone: +8802 9181198,<br /> Email: info@wapparels.com
          </p>
          <div className='font-bold'><h1>Follow us on:</h1></div>
          <div className='flex flex-row my-4 '>

            <Link to='https://www.linkedin.com/company/w-apparels-ltd/'>
            <div className='mx-3'>
              <div className='flex justify-center'>
                <div><i className='fa fa-brands fa-linkedin bg-gray-700 text-white py-1 px-[5px] rounded'/></div>
              </div>
            </div >
            </Link>
            <Link to='https://www.facebook.com/profile.php?id=100063651540871'><div className='me-3'>
              <div className='flex justify-center'>
                <div><i className='fa fa-brands fa-facebook bg-gray-700 text-white py-1 px-[8px] rounded'/></div>
              </div>
            </div>
            </Link>
            <Link>
            <div className='me-3'>
              <div className='flex justify-center'>
                <div><i className='fa fa-brands fa-instagram bg-gray-700 text-white py-1 px-[6px] rounded'/></div>
              </div>
            </div>
            </Link>

          </div>
          <div className='lg:me-12 '>
            <iframe className='
            w-full h-[100px]
            lg:w-[550px] lg:h-[300px] mb-5' id="gmap_canvas" src="https://maps.google.com/maps?q=W apparels&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          </div>


        </div>
        <div className="card flex-shrink-0 lg:w-1/2 w-[90%] max-w-xl shadow-2xl bg-base-100 mb-5">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input name='name' type="text" className="input input-bordered"  required/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input name='email' type="text"  className="input input-bordered" required/>

            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Subject</span>
              </label>
              <input name='subject' type="text" className="input input-bordered" required/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Message</span>
              </label>
              <textarea name='message' className="textarea textarea-bordered" required></textarea>
            </div>
            <div className="form-control mt-6">
              <input type='submit' value='Send Message' className="btn btn-primary"></input>
            </div>
          </form>
        </div>
      </div>
      <Thankyoumodal open={open} handleClick={handleClick}/>
      <ErrorModal openError={openError} handleClickError={handleClickError}/>
    </div>


  );
};

export default Contact;

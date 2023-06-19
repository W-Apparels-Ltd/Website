import React from 'react';
import fb from '../images/584ac2d03ac3a570f94a666d.png'
import li from '../images/inss-removebg-preview.png'
import ins from '../images/Insss-removebg-preview.png'
import { toast } from 'react-toastify';


const Contact = () => {
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
        toast.success('Successfully Sent!', {
          position: toast.POSITION.TOP_RIGHT
      });
      }
      else{
        console.log('error');
        toast.error('Please try again!', {
          position: toast.POSITION.TOP_RIGHT
      });
      }
      
    })
    form.reset();
  }
  return (

    <div id='contactus' className=" bg-base-200 lg:p-20">
      <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-start">
        <div className="p-5 lg:p-0 lg:text-left">
          <h1 className="lg:text-5xl text-2xl md:text-3xl font-bold text-primary">Contact Us</h1>
          <p className="pt-6">W. Apparels Ltd.
            295 JA/ 4 Rayer Bazar, Dhaka 1209<br />
            Phone: +8802 9181198,<br /> Email: info@wapparels.com
          </p>
          <div className='font-bold'><h1>Follow us on:</h1></div>
          <div className='flex flex-row my-4 '>

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
          <div className='lg:me-12 '>
            <iframe className='
            w-[250px] h-[100px]
            lg:w-[550px] lg:h-[300px] mb-5' id="gmap_canvas" src="https://maps.google.com/maps?q=W apparels&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          </div>


        </div>
        <div className="card flex-shrink-0 lg:w-1/2 w-full max-w-xl shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input name='name' type="text" placeholder="name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input name='email' type="text" placeholder="email" className="input input-bordered" />

            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Subject</span>
              </label>
              <input name='subject' type="text" placeholder="subject" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Message</span>
              </label>
              <textarea name='message' className="textarea textarea-bordered" placeholder="message"></textarea>
            </div>
            <div className="form-control mt-6">
              <input type='submit' value='Send Message' className="btn btn-primary"></input>
            </div>
          </form>
        </div>
      </div>
    </div>


  );
};

export default Contact;

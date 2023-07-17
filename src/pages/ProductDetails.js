import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Thankyoumodal from '../modal/Thankyoumodal';
import bg from '../images/factory_purpose/1.jpg'
import { Flip } from 'react-awesome-reveal';
import Nav2 from './Nav2';

const ProductDetails = () => {
  const {_id,label,fabrictype,size,img}= useLoaderData();
  const handleSubmit=event=>{
    event.preventDefault();
    const form = event.target;
    const name=form.name.value;
    const email =form.email.value;
    const message =form.message.value;
    const emaildata={
      name,
      email,
      message,
      label,
      fabrictype,
      size,
      img
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
        
      }
      else{
        console.log('error');
        
      }
      
    })
    form.reset();

  }
  return (
    <>
    <Nav2></Nav2>
    <div
    style={{
      backgroundImage:` url(${bg})`,
    }}  
    className="relative  mx-auto w-full bg-cover font-Nunito ">
      <div className='absulate text-white bg-black/75'>
      <div className='text-center pt-5 lg:py-5'>
        <h1 className="text-3xl font-bold mt-8">Product Details</h1>
      </div>
      <div className='flex flex-col lg:flex-row lg:justify-around lg:items-start'>
          <div>
              <div className='flex justify-center'>
                <Flip><img className='w-80' src={img} alt="" /></Flip>
              </div>
              <div className='flex justify-center'>
                
                  
                  <div><h1 className='text-3xl font-bold'>{label}</h1></div>
              </div>

              
              <div className='flex justify-center'>
             
                  <div class="card-body">
                    <h2 >LABLE: {label}</h2>
                    <h2 >FABRIC: {fabrictype}</h2>
                    <h2 >Size: {size}</h2>   
                  </div>
              
              </div>
              
          </div>
      
          <div className="card flex-shrink-0 lg:w-1/2 w-full max-w-xl shadow-2xl bg-base-100 text-black">
            
            <form onSubmit={handleSubmit}  className='card-body'>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Fabrictype</span>
              </label>
              <input type="text" name='fabrictype' defaultValue={fabrictype} disabled placeholder="Full Name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input type="text" name='name'  className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input type="text" name='email' className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Message</span>
              </label>
              <textarea type="textarea" name='message' className="textarea textarea-bordered" />
            </div>
            <input htmlFor="my_modal_6"  className="w-full btn btn-primary" type='submit' value='InQUIRE'/>
            
            
            </form>
            </div>
            
        </div>
        <Thankyoumodal/>
      </div>
      
    </div>
    </>
  );
};

export default ProductDetails;
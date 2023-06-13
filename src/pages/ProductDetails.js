import React from 'react';
import { Fade, Flip, Slide, Zoom } from 'react-awesome-reveal';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Thankyoumodal from '../modal/Thankyoumodal';
import bg from '../images/factory_purpose/1.jpg'

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
    <div
    style={{
      backgroundImage:` url(${bg})`,
    }}  
    className="relative  mx-auto w-full bg-cover  ">
      <div className='absulate text-white bg-black/75'>
      <div className='text-center py-10'>
        <h1 className="text-4xl font-bold mt-8">Product Details</h1>
      </div>
      <div className='flex flex-col lg:flex-row lg:justify-around lg:items-start'>
          <div>
              <div className='flex justify-center'>
                <Flip><img className='w-80' src={img} alt="" /></Flip>
              </div>
              <div className='flex justify-center'>
                
                  
                  <Zoom><div><h1 className='text-3xl font-bold'>{label}</h1></div></Zoom>
              </div>

              <Slide>
              <div className='flex justify-center'>
                <div class="card w-72">
                  <div class="card-body">
                    <h2 class="card-title">LABLE: {label}</h2>
                    <h2 class="card-title">FABRIC: {fabrictype}</h2>
                    <h2 class="card-title">Size: {size}</h2>
                    
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                  </div>
                </div>
              </div>
              </Slide>
          </div>
      
          <div className="card flex-shrink-0 lg:w-1/2 w-full max-w-xl shadow-2xl bg-base-100 text-black">
            
            <form onSubmit={handleSubmit}  className='card-body'>
            
            <input type="text" name='fabrictype' defaultValue={fabrictype} disabled placeholder="Full Name" className="input w-full m-3" />
            <input type="text" name='name' placeholder="Name" className="input input-bordered  w-full m-3" />
            <input type="text" name='email' placeholder="email" className="input input-bordered  w-full m-3" />
            <textarea type="textarea" name='message' placeholder="Message" className="textarea textarea-bordered  w-full m-3" />
            <input htmlFor="my_modal_6"  className="w-full btn" type='submit' value='InQUIRE'/>
            
            
            </form>
            </div>
            
        </div>
        <Thankyoumodal/>
      </div>
      
    </div>
  );
};

export default ProductDetails;
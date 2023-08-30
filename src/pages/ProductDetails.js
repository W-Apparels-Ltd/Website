import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Thankyoumodal from '../modal/Thankyoumodal';
import bg from '../images/factory_purpose/1.jpg'
import Nav2 from './Nav2';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import ErrorModal from '../modal/ErrorModal';

const ProductDetails = () => {
  const {_id,label,fabrictype,size,img}= useLoaderData();
  const [open,setOpen]=useState(false);
  const [openError,setOpenError]=useState(false);
  const [pic,setPic]=useState(img[0]);
  const handleClick=()=>{
    setOpen(false);
  }
  const handleClickError=()=>{
    setOpenError(false);
  }
  const changePic=img=>{
    setPic(img);
  }
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
    fetch('https://wapparels-server.vercel.app/inquiry',{
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
    <>
    <Nav2></Nav2>
    <div
    style={{
      backgroundImage:` url(${bg})`,
    }}  
    className="relative  mx-auto w-full bg-cover font-Nunito ">
      <div className='absulate text-white bg-black/75'>
        
      <div className='text-center pt-10 lg:py-5'>
        <h1 className="text-3xl font-bold mt-8">Product Details</h1>
      </div>
      <div className='flex flex-col items-center lg:flex-row lg:justify-around lg:items-start'>
          <div>
              <div className='flex lg:flex-row flex-col justify-center'>
                
                  <div className='flex lg:flex-col flex-row my-5 lg:my-0'>

                      <img className='mr-2 lg:mr-0 h-12 w-18 border-2 rounded p-1 mb-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 cursor-pointer' onClick={()=>changePic(img[0])} src={img[0]}/>
                      <img className='h-12 w-18 border-2 rounded p-1 mb-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300 cursor-pointer' onClick={()=>changePic(img[1])} src={img[1]}/>
                  </div>
                
              <TransformWrapper>
                <TransformComponent>
                <img className='h-80' src={pic} alt="" />
                </TransformComponent>
              </TransformWrapper>
                
              </div>
              <div className='text-center lg:ms-12'>
                
                  
                  <div><h1 className='text-3xl font-bold'>{label}</h1></div>
              </div>

              
              <div className='flex justify-center lg:ms-5'>
             
                  <div class="card-body">
                    
                    <h2 >FABRIC: {fabrictype}</h2>
                    <h2 >Size: {size}</h2>   
                  </div>
              
              </div>
              
          </div>
      
          <div className="card flex-shrink-0 lg:w-1/2 w-[90%] max-w-xl shadow-2xl bg-base-100 text-black mb-5 lg:mb-0">
            
            <form onSubmit={handleSubmit} className='card-body'>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Fabrictype</span>
              </label>
              <select className="select select-bordered" required>
                <option disabled selected>Select One</option>
                <option>100 % Viscose, 125 gsm</option>
                <option>100% Cotton, Thin Twill</option>
                <option>100 % Cotton , 4.5 oz</option>
                <option>100 % Cotton</option>
                <option>70% Cotton, 29% Polyester, 1% Elastane, denim</option>
                <option>100 % Viscose</option>
                <option>100 % Cotton, twill</option>
                
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input type="text" name='name'  className="input input-bordered"  required/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input type="text" name='email' className="input input-bordered" required/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Message</span>
              </label>
              <textarea type="textarea" name='message' className="textarea textarea-bordered" required/>
            </div>
            <input className="w-full btn btn-primary" type='submit' value='SEND INQUIRY'/>
            
            
            </form>
            
            </div>
            
        </div>
        
          <Thankyoumodal open={open} handleClick={handleClick}/>
          <ErrorModal openError={openError} handleClickError={handleClickError}/>
        
      </div>
      
    </div>
    </>
  );
};

export default ProductDetails;
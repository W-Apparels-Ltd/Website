import React, { useState } from 'react';
import career from '../images/career.jpg'
import ErrorModal from '../modal/ErrorModal';
import SubmitModal from '../modal/SubmitModal';
import axios from "axios";
import Nav2 from './Nav2';

const CareerForm2 = () => {
    const [open,setOpen]=useState(false);
    const [openError,setOpenError]=useState(false);
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    const saveFile = (e) => {
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    };
    const uploadFile = async (e) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("fileName", fileName);
      try {
        const res = await axios.post(
          "https://wapp-server.onrender.com/upload",
          formData
        );
        console.log(res);
      } catch (ex) {
        console.log(ex);
      }
    };
    const handleClick=()=>{
      setOpen(false);
    }
    const handleClickError=()=>{
      setOpenError(false);
    }
    const handleSubmit=event=>{
      event.preventDefault();
      const form = event.target;
      const cover=form.coverletter.value;
    
      const firstname=form.firstname.value;
      const lastname =form.lastname.value; 
      const email=form.email.value;
      const phone=form.phone.value;
      const streetaddress=form.streetaddress.value;
      const city=form.city.value;
      const region=form.region.value;
      const postalcode=form.postalcode.value;
      
    
        
          const careerForm={
            cover,
            firstname,
            phone,
            lastname,
            email,
            streetaddress,
            city,
            region,
            postalcode
          }
          console.log(careerForm);
          fetch('https://wapp-server.onrender.com/career',{
            
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(careerForm)
            
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
      <div style={{
        backgroundImage:`linear-gradient(to bottom, rgba(135, 124, 201, 0.52), rgba(24, 22, 117, 0.73)), url(${career})`,
      }}  className= "  mx-auto w-full bg-cover bg-fixed bg-center bg-no-repeat shadow-lg font-Nunito">  
        <div>
            <div className='p-20 text-center'><h1 className='lg:text-5xl text-3xl text-white font-bold mt-5'>View Current Openings</h1></div>
            
        </div>
        <div className='mt-20  bg-base-200 lg:p-20 p-10'>
           <div>
              <div className='text-center lg:pt-10 pt-5 mb-2'><h1 className='lg:text-3xl text-xl font-bold leading-6 text-gray-900'>Commercial Manager</h1></div>
              <div >
                <h1 className='text-md font-bold leading-6 text-gray-900 mb-1'>Responsibilities & Context:</h1>
                <p className='mb-2 p-4'>The applicants should have experience in the following business area(s): Garments (WovenOuterwear will get advantage) For smooth and timely import & export operations,
communication between the bank, shipper/suppliers, shipping line, forwarder, C&F agency,
customs, and transportation is required.</p>

                <h1 className='text-md font-bold leading-6 text-gray-900 mb-1'>Job Summary:</h1>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Ensure Preparing of all export documents as per buyer's requirement and follow up of
export independently for buyers. </p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Ensure preparing all export documents on time. </p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Ensure preparing and renewal all kind of Company Certificates from government authorities.</p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Hand over the shipping documents, L/C, and other related documents, and keep an eye
on the customs assessment, port, and agent fees for clearing the item. </p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Liaison with Bank, EPB, Shipping Line, Forwarding Agents and others organization
related to export and import documentation. </p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Having sound knowledge of Clearing & Forwarding (C&F), Customs Bond rules &
regulations etc.</p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Organize Import documents to release Import consignment in time. </p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Ensure Collecting Bill of Lading on time & submitting export documents to forwarding
agent or Bank to Bank. </p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Follow up Export payment and report to management, If found any delay payment, Push
to buyer release.</p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Contact the unit head, government bodies, or bankers for the collecting of transaction
supporting documents, such as vouchers, SRO circulars, and policies, in order to ensure
that the imposed rules and laws are followed. Assist in the settlement of quarries, as
well as the application for the renewal of import-related licenses and certificates. </p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Detailed understanding of all Customs, BGMEA, BOI, Bank, and Custom House importrelated activities.</p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Ensure to Prepare & submit Utilization Declaration from respective authorities which are
required to Export goods</p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Preparing L/C Closing statement & report to management. </p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Ensure managing yearly Customs Audit claims independently.</p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Must be experienced in Export -Import and Banking. </p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Mainly look after the entire export and import related other activities. </p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Regularly monitoring & tracking various stages of Export as well as payment follow-up. </p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Should have Clear knowledge of current rules & regulations of Customs, UCPDC- 600,
HS Code, and Inco terms. </p>
                  </div>
                </div>
                
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Ensure handing over relevant documents to Operations for transportation of goods and
materials to and from ports</p>
                  </div>
                </div>
                <div className='flex items-start mb-8'>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Perform any other tasks as assigned by the management from time to time. </p>
                  </div>
                </div>
                
              </div>
              <h1 className='text-md font-bold leading-6 text-gray-900 mb-1'>Additional Requirements:</h1>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Educational Qualification : Master degree in any discipline. </p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Experience : 10 to 15 Years. </p>
                  </div>
                </div>
                <div className='flex items-start mb-8'>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Age: 35 to 45 years.</p>
                  </div>
                </div>
                <div className='flex items-start mb-8'>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>The applicants should have experience in the business area(s) of Woven Garments.
Strong communication, persuasion and presentation skills, both written and oral English
Should be a good team leader Ability to handle multiple tasks at a time</p>
                  </div>
                </div>
                
              <h1 className='text-md font-bold leading-6 text-gray-900 mb-1'>Compensation & Other Benefits:</h1>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Mobile bill </p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Lunch</p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Salary Review: Yearly </p>
                  </div>
                </div>
                <div className='flex items-start mb-8'>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Festival Bonus: 2 </p>
                  </div>
                </div>
                
              <h1 className='text-md font-bold leading-6 text-gray-900 mb-1 '>Salary- Negotiable</h1>
              <h1 className='text-md font-bold leading-6 text-gray-900 mb-1'>Employment Status:</h1>
              <p className='text-md ms-4'>Full-time</p>
              <h1 className='text-md font-bold leading-6 text-gray-900 mb-1'>Gender:</h1>
              <p className='text-md ms-4'>Only Male</p>
              <h1 className='text-md font-bold leading-6 text-gray-900 mb-1'>Job Location:</h1>
              <p className='text-md ms-4'>West Dhanmondi. Dhaka.</p>
              <p className='text-md ms-4'>Mail to- <a href='mailto:moinrassel@gmail.com'>moinrassel@gmail.com</a> </p>
              
  
              <div>
              <form onSubmit={handleSubmit}>
        <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12"></div>
  
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
  
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="firstname"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="lastname"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    name="phone"
                    type="phone"
                    autoComplete="phone"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
             
  
              <div className="col-span-full">
                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="streetaddress"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-2">
                <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-2">
                <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="postalcode"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
  
        </div>
        <div className="border-b border-gray-900/10 pb-12">
            
            
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
             
  
              
  
  
              <div className="col-span-3">
                <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                  Upload your CV
                </label>
                  <input type="file"  onChange={saveFile} class="mt-5 file-input file-input-primary file-input-bordered w-full max-w-xs" />
  
              </div>
              <div className="col-span-3">
                <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                  Upload your Cover letter
                </label>
                  <input type="file"  onChange={saveFile} class="mt-5 file-input file-input-primary file-input-bordered w-full max-w-xs" />
  
              </div>
              <div className="col-span-full">
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                  Cover Letter
                </label>
                <div className="mt-2">
                  <textarea
                    id="coverletter"
                    name="coverletter"
                    rows={3}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">Write only body part of your cover letter.</p>
              </div>
            </div>
          </div>
  
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button onClick={uploadFile}
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Apply
          </button>
        </div>
          </form>
              </div>
           </div>  
        </div>
        <SubmitModal open={open} handleClick={handleClick}/>
        <ErrorModal openError={openError} handleClickError={handleClickError}/>
        
      </div>
      </>
    );
  };

export default CareerForm2;
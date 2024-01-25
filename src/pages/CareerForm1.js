import React, { useState } from 'react';
import career from '../images/career.jpg'
import ErrorModal from '../modal/ErrorModal';
import SubmitModal from '../modal/SubmitModal';
import axios from "axios";
import Nav2 from './Nav2';

const CareerForm1 = () => {
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
              <div className='text-center lg:pt-10 pt-5 mb-2'><h1 className='lg:text-3xl text-xl font-bold leading-6 text-gray-900'>Compliance Manager</h1></div>
              <div >
                <h1 className='text-md font-bold leading-6 text-gray-900 mb-1'>Responsibilities & Context:</h1>
                <p className='mb-2 p-4'>The applicants should have experience in the following business area(s): Garments
                (Woven- Outerwear will get advantage) For smooth and timely compliance operations,
                communication between the all stakeholders is required.<br/>
                Developing, implementing and managing an organization’s compliance standard. </p>

                <h1 className='text-md font-bold leading-6 text-gray-900 mb-1'>Job Summary:</h1>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Preparing and presenting clear and concise compliance reports to the Board.</p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Interacting with regulators on compliance issues. </p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Coordinating efforts related to audits, reviews, and examinations. </p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Prepare and keep the documentation related to audit and compliance. </p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Assist in developing, implementing, maintaining and reviewing of company
                    policies, rules and regulations in compliance with all applicable employment laws
                    and regulations. </p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>To monitor the floor for checking all kinds of compliance issues. </p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>To motivate the employees for maintaining all kind of personal safety.</p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Train up all employees on all safety awareness issue; maintain all kinds of training records.</p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>To aware the employees regarding health and safety issues. </p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Ensure the factories are compliance with social ethics & health and safety requirements, etc. </p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>To find out the non-compliance issues by the daily monitoring & internal audit in
the factory. Conduct internal audit in the light of Labor Law, Factory Rules,
buyers COC & other national & international legal instruments. </p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Monitor compliance certification BSCI, SEDEX, NEXT, INDITEX, PRIMEMARK,
ACCORD & Alliance etc. and handle their different audits with requirements.  </p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Maintain and implement Accord/Alliance (fire, electrical & structural) standard for
creating a safe working place.  </p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Communicate, maintain, handle and implement all social audits whether buyer &
certification/membership audit as, BSCI,BEPI,OCS, GOTS, SEDEX,OEKOTEX,
RSC, etc.</p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Maintain every compliance mechanism/tools internally; through weekly, monthly
and yearly comparative statistical report & tools. </p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Give Suggestions to the management regarding several important
pronouncement and decisions of Law & other COC. </p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Conduct in house training for all employees on OH&S, EMS, Fire Safety,
Grievance etc. as advised by factory management.</p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>To adopt, maintain and implement environmental, chemical standard as, Higg
Index for the sake of the organization in a sustainable manner etc. </p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Conduct internal H&S and Environmental assessments in a regular interval.</p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Review and update all legal documents/certificate/license time to time by
communicating with the specific authorities. </p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Checking routine wise checklist and make report.  </p>
                  </div>
                </div>
                <div className='flex items-start mb-8'>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Update to management all compliance reports in regular interval etc.  </p>
                  </div>
                </div>
                
              </div>
              <h1 className='text-md font-bold leading-6 text-gray-900 mb-1'>Experience:</h1>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div >
                    <p className='text-md'>Min 10 years’ experience in a compliance/operations based role </p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div >
                    <p className='text-md'>Solid understanding of risk and compliance principles and frameworks. </p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div >
                    <p className='text-md'>Demonstrated stakeholder engagement experience. </p>
                  </div>
                </div>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div className='mb-8'>
                    <p className='text-md'>Strong commercial acumen and ability to understand the impact of regulatory
changes on the business. </p>
                  </div>
                </div>
                
              <h1 className='text-md font-bold leading-6 text-gray-900 mb-1'>Educational Requirements:</h1>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div className='mb-8'>
                    <p className='text-md'>Master degree in any discipline </p>
                  </div>
                </div>
                <h1 className='text-md font-bold leading-6 text-gray-900 mb-1'>Additional Requirements :</h1>
                <div className='flex items-start '>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>Age 35 to 45 years  </p>
                  </div>
                </div>
                <div className='flex items-start mb-8'>
                  <div className="badge badge-xs mx-5 my-1.5"></div>
                  <div>
                    <p className='text-md'>The applicants should have experience in the compliance area(s) of Woven
Garments. Strong communication, persuasion and presentation skills, both written
and oral English Should be a good, team leader ability to handle multiple tasks at
a time. </p>
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

export default CareerForm1;
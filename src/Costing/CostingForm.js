import React, { useState } from 'react';
import costing from '../images/costing.jpg'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import SearchBar from './SearchBar';
import { v4 as uuidv4 } from 'uuid';

const CostingForm = () => {
  const [title,settitle]=useState([]);
  const [success,setsuccess]=useState(false);
  const[list,setlist]=useState([]);
  const [CM,setCM]=useState('0');
  const [sum,setSum]=useState('0');
  let c=1;
  const handleCalculate=event=>{
    event.preventDefault();
    const form = event.target;
    const quantity=form.quantity.value;
    const price=form.price.value;
    let total = parseFloat(quantity)* parseFloat(price);
    console.log(total);
    let totalsum=parseFloat(sum)+ parseFloat(total);
    setSum(totalsum);
    const newList = list.concat({id: uuidv4(),quantity,price,total,name:title.title});
    setlist(newList);
    form.reset();
  }
  const handleChange=event=>{
    event.preventDefault();
    const result= (parseFloat(event.target.value)* 12)-parseFloat(sum);
    setCM(result);
  }
  
  const data=[
    {
      title:'Shell Fabric with 5%',
    },
    {
      title:'Sewing Thread Zipper',
    },
    {
      title:'Main Label',
    },
    {
      title:'Size Label',
    },
    {
      title:'Care Label',
    },
    {
      title:'Add Care Label',
    },
    {
      title:'Name Label',
    },
    {
      title:'Hangtag',
    },
    {
      title:'Price Stiker',
    },
    {
      title:'Box Stiker',
    },
    {
      title:'Poly',
    },

  ]
  return (
    <div style={{
      backgroundImage:`linear-gradient(to bottom, rgba(135, 124, 201, 0.52), rgba(24, 22, 117, 0.73)), url(${costing})`,
    }}  className= "  mx-auto w-full bg-cover bg-fixed bg-center bg-no-repeat shadow-lg">
      <div>
          <div className='p-20 text-center'><h1 className='text-5xl text-white font-bold mt-5'>Costing</h1></div>
      </div>
      <div className='mt-20 bg-base-100 lg:p-20 p-10'>
      <div>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Costing Form</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Buyer name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Style no/order no
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Art no
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Size
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Quantity
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Fabric Description
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Item's Description with Consumption</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Please input details carefully.</p>
          <SearchBar setsuccess={setsuccess} settitle={settitle} data={data} placeholder="Enter a item Name..."  ></SearchBar>
          

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

          {
            success && 
            <div className="col-span-full">
              <form onSubmit={handleCalculate} className='flex items-center'>
                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                  {title.title}
                </label>
                <div className="ms-2">
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-md md:leading-6"
                  />
                </div>
                <div><p className='ms-1'>Kg/Dzn <span className='font-medium text-md ms-2'>X</span></p></div>
                <div className="ms-2">
                  <input
                    type="number"
                    name="price"
                    id="price"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-md md:leading-6"
                  />
                </div>
                <div><p className='ms-1'>/Yds</p></div>
                <input type='submit' value='ADD'  className='ms-2 btn btn-primary btn-sm'/>
              </form>
            </div>
          }

  
          </div>
        </div>

      </div>
      
        
          <div className="border-b border-gray-900/10 pb-12">
          <div className='overflow-x-auto'>
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>

                  
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {list.map((item,i) => (
                  <tr className="bg-base-200">
                  <th>{++i}</th>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>US ${item.total}</td>
                  </tr>
                ))}
                
               
              </tbody>
            </table>
          </div>
              <div className='flex justify-between mt-5'>
                <div className='flex items-center'>
                    <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                            FOB:
                    </label>
                    <div className="ms-2">
                      <input
                        type="number"
                        name="fob"
                        id="fob"
                        onChange={handleChange}
                        autoComplete="address-level2"
                        className="block w-full rounded-md border-2 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-md md:leading-6"
                      />
                  </div>
                  
              </div>
              <div className='text-xl font-bold'>
                    <h1>Total Costing: <span className='text-[green]'>US ${CM}</span></h1>
              </div>
          </div>
            
          </div>

        
        
      

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
        
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
        </div>
      </div>
    </div>
  );
};

export default CostingForm;
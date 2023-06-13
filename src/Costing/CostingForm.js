import React from 'react';
import costing from '../images/costing.jpg'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

const CostingForm = () => {
  return (
    <div style={{
      backgroundImage:`linear-gradient(to bottom, rgba(135, 124, 201, 0.52), rgba(24, 22, 117, 0.73)), url(${costing})`,
    }}  className= "  mx-auto w-full bg-cover bg-fixed bg-center bg-no-repeat shadow-lg">
      <div>
          <div className='p-20 text-center'><h1 className='text-5xl text-white font-bold mt-5'>Costing</h1></div>
      </div>
      <div className='mt-20 bg-base-100 lg:p-20 p-10'>
      <form>
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

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

          

            <div className="col-span-full">
              <div className='flex items-center'>
                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                  Fabric-1: Shell febric with 5% -
                </label>
                <div className="ms-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div><p className='ms-1'>Kg/Dzn <span className='font-medium text-md ms-2'>X</span></p></div>
                <div className="ms-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div><p className='ms-1'>/Yds <span className='font-medium text-md'>=</span></p></div>
                <div className='ms-2 text-md font-medium'><label>US $ 15.25</label></div>
              </div>
            </div>
            <div className="col-span-full">
              <div className='flex items-center'>
                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                  Sewing Thread Zipper-
                </label>
                <div className="ms-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div><p className='ms-1'>Mtr/Dzn <span className='font-medium text-md ms-2'>X</span></p></div>
                <div className="ms-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div><p className='ms-1'>/Cone <span className='font-medium text-md'>=</span></p></div>
                <div className='ms-2 text-md font-medium'><label>US $ 15.25</label></div>
              </div>
            </div>
            <div className="col-span-full">
              <div className='flex items-center'>
                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                  Main Label -
                </label>
                <div className="ms-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div><p className='ms-1'>Yds <span className='font-medium text-md ms-2'>X</span></p></div>
                <div className="ms-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div><p className='ms-1'>/Yds <span className='font-medium text-md'>=</span></p></div>
                <div className='ms-2 text-md font-medium'><label>US $ 15.25</label></div>
              </div>
            </div>
            <div className="col-span-full">
              <div className='flex items-center'>
                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                  Size label -
                </label>
                <div className="ms-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div><p className='ms-1'>Yds <span className='font-medium text-md ms-2'>X</span></p></div>
                <div className="ms-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div><p className='ms-1'>/Yds <span className='font-medium text-md'>=</span></p></div>
                <div className='ms-2 text-md font-medium'><label>US $ 15.25</label></div>
              </div>
            </div>
            <div className="col-span-full">
              <div className='flex items-center'>
                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                  Care label -
                </label>
                <div className="ms-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div><p className='ms-1'>Dzn <span className='font-medium text-md ms-2'>X</span></p></div>
                <div className="ms-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div><p className='ms-1'>/Dzn <span className='font-medium text-md'>=</span></p></div>
                <div className='ms-2 text-md font-medium'><label>US $ 15.25</label></div>
              </div>
            </div>
            <div className="col-span-full">
              <div className='flex items-center'>
                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                  Add Care label -
                </label>
                <div className="ms-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div><p className='ms-1'>Dzn <span className='font-medium text-md ms-2'>X</span></p></div>
                <div className="ms-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div><p className='ms-1'>/Dzn <span className='font-medium text-md'>=</span></p></div>
                <div className='ms-2 text-md font-medium'><label>US $ 15.25</label></div>
              </div>
            </div>
            <div className="col-span-full">
              <div className='flex items-center'>
                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                  Hangtag -
                </label>
                <div className="ms-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div><p className='ms-1'>Dzn <span className='font-medium text-md ms-2'>X</span></p></div>
                <div className="ms-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div><p className='ms-1'>/Dzn <span className='font-medium text-md'>=</span></p></div>
                <div className='ms-2 text-md font-medium'><label>US $ 15.25</label></div>
              </div>
            </div>
            <div className="col-span-full">
              <div className='flex items-center'>
                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                  Name label -
                </label>
                <div className="ms-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div><p className='ms-1'>Dzn <span className='font-medium text-md ms-2'>X</span></p></div>
                <div className="ms-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div><p className='ms-1'>/Dzn <span className='font-medium text-md'>=</span></p></div>
                <div className='ms-2 text-md font-medium'><label>US $ 15.25</label></div>
              </div>
            </div>
            <div className="col-span-full">
              <div className='flex items-center'>
                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                  Price Sticker -
                </label>
                <div className="ms-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div><p className='ms-1'>Dzn <span className='font-medium text-md ms-2'>X</span></p></div>
                <div className="ms-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div><p className='ms-1'>/Dzn <span className='font-medium text-md'>=</span></p></div>
                <div className='ms-2 text-md font-medium'><label>US $ 15.25</label></div>
              </div>
            </div>
            <div className="col-span-full">
              <div className='flex items-center'>
                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                  Box Sticker -
                </label>
                <div className="ms-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div><p className='ms-1'>Dzn <span className='font-medium text-md ms-2'>X</span></p></div>
                <div className="ms-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div><p className='ms-1'>/Dzn <span className='font-medium text-md'>=</span></p></div>
                <div className='ms-2 text-md font-medium'><label>US $ 15.25</label></div>
              </div>
            </div>
            <div className="col-span-full">
              <div className='flex items-center'>
                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                  Poly -
                </label>
                <div className="ms-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div><p className='ms-1'>Dzn <span className='font-medium text-md ms-2'>X</span></p></div>
                <div className="ms-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div><p className='ms-1'>/Dzn <span className='font-medium text-md'>=</span></p></div>
                <div className='ms-2 text-md font-medium'><label>US $ 15.25</label></div>
              </div>
            </div>
            <div className="col-span-full">
              <div className='flex items-center'>
                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                  Cartoon -
                </label>
                <div className="ms-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div><p className='ms-1'>Dzn <span className='font-medium text-md ms-2'>X</span></p></div>
                <div className="ms-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div><p className='ms-1'>/Dzn <span className='font-medium text-md'>=</span></p></div>
                <div className='ms-2 text-md font-medium'><label>US $ 15.25</label></div>
              </div>
            </div>
            
          
          </div>
        </div>

      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Calculate
        </button>
      </div>
        </form>
      </div>
    </div>
  );
};

export default CostingForm;
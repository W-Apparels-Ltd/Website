import React, { useRef, useState } from 'react';
import costing from '../images/costing.jpg'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import SearchBar from './SearchBar';
import { v4 as uuidv4, v5 as uuidv5 } from 'uuid';
import logo from '../images/wapparels_logo.jpeg';
import ReactToPrint from 'react-to-print';
import Select from 'react-select';




const CostingForm = () => {
  const [title,settitle]=useState([]);
  const [success,setsuccess]=useState(false);
  const[list,setlist]=useState([]);
  const [CM,setCM]=useState('0');
  const [sum,setSum]=useState('0');
  const [fob,setfob]=useState('0');
  const ref=useRef();

  const [Buyername,setBuyername]=useState('');
  const [StyleNo,setStyleNo]=useState('');
  const [ArtNo,setArtNo]=useState('');
  const [SizeNo,setSizeNo]=useState('');
  const [Quantity,setQuantity]=useState('');
  const [FD,setFD]=useState('');

  const [selectedOptions, setSelectedOptions] = useState('');
  const [fabricview,setfabricview]=useState(true);
  const [fabriccost,setfabriccost]=useState('');
 
  
  const handleCalculate=event=>{
    event.preventDefault();
    const form = event.target;
    const quantity=form.quantity.value;
    const price=form.price.value;
    let total = parseFloat(quantity)* parseFloat(price);
    console.log(total);
    let totalsum=parseFloat(sum)+ parseFloat(total);
    setSum(totalsum);
    const newList = list.concat({id:uuidv4(),quantity,price,total,name:title.title});
    setlist(newList);
    if(CM===""){
      CM=0;
    }
    const result= (totalsum+parseFloat(CM))/12;

    setfob(result.toFixed(2));
    form.reset();
  }
  const Buyer=event=>{
    event.preventDefault();
    setBuyername(event.target.value);
  }
  const style=event=>{
    event.preventDefault();
    setStyleNo(event.target.value);
  }
  const art=event=>{
    event.preventDefault();
    setArtNo(event.target.value);
  }
  const size=event=>{
    event.preventDefault();
    setSizeNo(event.target.value);
  }
  const quantity=event=>{
    event.preventDefault();
    setQuantity(event.target.value);
  }
  const fabric=event=>{
    event.preventDefault();
    setFD(event.target.value);
  }
  const handleCalculateInstant=event=>{
    event.preventDefault();
    const form = event.target;
    const quantity='--';
    let price=form.price.value;
    let total = parseFloat(price);
    price='--';
    console.log(total);
    let totalsum=parseFloat(sum)+ parseFloat(total);
    setSum(totalsum);
    const newList = list.concat({id:uuidv4(),quantity,price,total,name:title.title});
    setlist(newList);
    if(CM===""){
      CM=0;
    }
    const result= (totalsum+parseFloat(CM))/12;

    setfob(result.toFixed(2));
    form.reset();
  }
  const handleChange=event=>{
    event.preventDefault();
    if(event.target.value!=""){
      setCM(event.target.value);
      const result= (parseFloat(event.target.value)+parseFloat(sum))/12;
      setfob(result.toFixed(2));
    }
    else{
      setfob(parseFloat(sum)/12);
    }
    
  }
  const handledelete=(id,total,name)=>{
    
    if(selectedOptions.label===name){
      setfabricview(true);
      
    }
    if(sum===""){
      sum=0;
    }
    if(CM===""){
      CM=0;
    }
    const s=parseFloat(sum).toFixed(2)-total;
    const f = (parseFloat(s)+parseFloat(CM))/12;
    
    setSum(s);
    setfob(f.toFixed(2));
    console.log(CM);
    const list1 = list.filter(e => e.id !== id);
    setlist(list1);
    
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

  const optionList = [
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
    { value: "yellow", label: "Yellow" },
    { value: "blue", label: "Blue" },
    { value: "white", label: "White" }
  ];

  // Function triggered on selection
  function handleSelect(data) {
    setSelectedOptions(data);
  }
  const handleFabric=event=>{
    event.preventDefault();
    const form = event.target;
    const quantity='--';
    let price=form.price.value;
    let total = parseFloat(price);
    setfabriccost(total);
    price='--';
    console.log(total);
    let totalsum=parseFloat(sum)+ parseFloat(total);
    setSum(totalsum);
    const newList = list.concat({id:uuidv4(),quantity,price,total,name:selectedOptions.label});
    setlist(newList);
    if(CM===""){
      CM=0;
    }
    const result= (totalsum+parseFloat(CM))/12;

    setfob(result.toFixed(2));
    setfabricview(false);

  }
  
  
  
  return (
    <div style={{
      backgroundImage:`linear-gradient(to bottom, rgba(135, 124, 201, 0.52), rgba(24, 22, 117, 0.73)), url(${costing})`,
    }}  className= "divcontents  mx-auto w-full bg-cover bg-fixed bg-center bg-no-repeat shadow-lg ">
      <div>
          <div className='p-20 text-center'><h1 className='text-5xl text-white font-bold mt-5'>Costing</h1></div>
      </div>
      <div className='mt-20 bg-base-100 lg:p-20 p-10 relative z-0'>
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
                  onChange={Buyer}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  onChange={style}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  onChange={art}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  onChange={size}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  onChange={quantity}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  onChange={fabric}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-center font-semibold leading-7 text-[green]">Item's Details</h2>
          <p className="mt-1 text-center text-sm leading-6 text-gray-600">Please input details carefully.</p>

         <div className='flex flex-col lg:flex-row justify-between '>
         <SearchBar setsuccess={setsuccess} settitle={settitle} data={data} placeholder="Enter An Accessory Name..."  ></SearchBar>
          {fabricview &&
            <div>
            <Select className='w-56 mt-8'
            options={optionList}
            placeholder="Select a Fabric"
            value={selectedOptions}
            onChange={handleSelect}
            isSearchable={true}
            
            />
            <form onSubmit={handleFabric}>
              <input
              type="number"
              name="price"
              id="quantity"
              step="any"
              placeholder="Enter the Price of Fabric"
              autoComplete="address-level2"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-md md:leading-6 mt-1"
              required
              />
              <input type='submit' value='ADD'  className=' btn btn-primary btn-sm mt-1 w-full'/>
            </form>
            </div>
          }
         </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">

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
                    step="any"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-md md:leading-6"
                    required
                  />
                </div>
                <div><p className='ms-1'>Kg/Dzn <span className='font-medium text-md ms-2'>X</span></p></div>
                <div className="ms-2">
                  <input
                    type="number"
                    name="price"
                    id="price"
                    step="any"
                    required
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-md md:leading-6"
                  />
                </div>
                <div><p className='ms-1'>Dollar</p></div>
                <input type='submit' value='ADD'  className='ms-2 btn btn-primary btn-sm'/>
              </form>
              <form onSubmit={handleCalculateInstant} className='flex items-center mt-2'>
                <div><p className='text-sm font-medium me-2'>OR instant price add</p></div>
                <div>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    step="any"
                    required
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:text-md md:leading-6"
                  />
                </div>
                <div><p className='ms-1'>Dollar</p></div>
                <input type='submit' value='ADD'  className='ms-2 btn btn-primary btn-sm'/>
              </form>
            </div>
          }

  
          </div>
        </div>

      </div>
      
        
          <div className="border-b border-gray-900/10 pb-12">
          <div className='overflow-x-auto '>
            <table className="table table-compact w-full z-0">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                  <th></th>

                  
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {list.map((item,i) => (
                  <tr className="bg-base-200">
                  <th>{++i}</th>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>US ${item.price}</td>
                  <td>US ${item.total.toFixed(2)}</td>
                  <td><button onClick={()=>handledelete(item.id,item.total,item.name)} className='btn btn-sm btn-primary'>delete</button></td>
                  </tr>
                ))}
                
               
              </tbody>
            </table>
          </div>
              <div className='flex lg:flex-row md:flex-row flex-col justify-between mt-5'>
                <div className='flex items-center'>
                    <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                            CM:
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
              <div className='text-xl font-bold mt-4 lg:mt-0 md:mt-0'>
                    <h1>FOB: <span className='text-[green]'>US ${fob}</span></h1>
              </div>
          </div>
            
          </div>

        
        
      

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
          
        <ReactToPrint
        trigger={()=>
          <button
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
        }
        content={()=> ref.current}
        />
      </div>
      {/*pdf*/}
      <div className='hidden'>
        <div className='m-10' ref={ref}>
          <div className='flex justify-center'><img className='w-20 rounded-full' src={logo}></img></div>
          <div className='text-center text-2xl font-bold'>W.Apparels Ltd.</div>
          <div className='text-center text-xl font-bold m-5 '>--Fast Costing--</div>
          <table className='w-full table table-auto border-2 border-black'>
            <tbody>
              <tr>
                <th >BuyerName</th>
                <td >{Buyername}</td>
                <th >Style no/Order no</th>
                <td >{StyleNo}</td>
              </tr>
              <tr>
                <th >Art no</th>
                <td >{ArtNo}</td>
                <th >Size</th>
                <td >{SizeNo}</td>
              </tr>
              <tr>
                <th >Quantity</th>
                <td >{Quantity}</td>
                <th >Fabric Des</th>
                <td >{FD}</td>
              </tr>
            </tbody>
          </table>

          <table className='w-full table border-2 border-black mt-5'>
            <tbody>
              <tr className='border-2 border-black '>
                <th>Fabric Cost</th>
                <td>US ${fabriccost}</td>
              </tr>
              <tr className='border-2 border-black '>
                <th>Accessory Cost</th>
                <td>US ${sum}</td>
              </tr>
              <tr className='border-2 border-black '>
                <th>CM</th>
                <td>US ${CM}</td>
              </tr>
            </tbody>
          </table>
          <div className='m-5 font-bold text-right'>FOB: US ${fob}</div>
        </div>
      </div>
      {/*pdf*/}
            
        </div>
      </div>
    </div>
  );
};

export default CostingForm;
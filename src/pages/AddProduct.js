import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import pic from '../images/factory_purpose/1.jpg'

const AddProduct = () => {
  const imgHostingKey="61ae2968344a1e59d2019f4122660661";
  
  
  const handleSubmit=event=>{
    event.preventDefault();
    const form = event.target;
    const label= form.label.value;
    const fabrictype=form.fabrictype.value;
    const size=form.size.value;
    let images=[],c=0;

    for (let img = 0; img < 2; img++) {
      const image=form.pic.files[img];
      console.log(image);
      const formData=new FormData();
      formData.append('image',image);
      const url=`https://api.imgbb.com/1/upload?key=${imgHostingKey}`;
      fetch(url,{
        method:'POST',
        body: formData
      })
      .then(res=>res.json())
      .then(imgData=>{
        console.log(imgData.data.url);
        let link=imgData.data.url;
        images[img]=link;
        console.log(images);
        c++;
        if(c===2){
          const item={
            label,
            fabrictype,
            
            size,
            img:images
          };
          console.log(item)
          fetch('https://wapparels-server.vercel.app/products',{
            method:'POST',
            headers:{
              'content-type':'application/json',
            },
            body:JSON.stringify(item)
          })
          .then(res=>res.json())
          .then(result=>{console.log(result);
            form.reset();
            toast.success('Successfully Added!', {
              position: toast.POSITION.TOP_RIGHT
            });
            c=0;
          }
          );
          
        }
        
      })
    }
    
    
    
  }
  return (
    <div style={{
      backgroundImage:`linear-gradient(to bottom, rgba(135, 124, 201, 0.52), rgba(24, 22, 117, 0.73)), url(${pic})`,
    }}  className= "  mx-auto w-full bg-cover bg-fixed bg-center bg-no-repeat shadow-lg">
      
      <div>
          <div className='p-20 text-center'><h1 className='lg:text-5xl text-3xl text-white font-bold mt-5'>Add Product</h1></div>
          
      </div>
      <div className=' bg-base-100'>
      <div className='p-2'>
      <div className='flex justify-center items-center'>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200 my-10">
      <form onSubmit={handleSubmit}  className="card-body">
      <div className='text-center'>
        <h1 className='text-2xl font-bold'>Add New Product</h1>
      </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Label</span>
          </label>
          <input type="text" name='label' placeholder="Label" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Fabric Type</span>
          </label>
          <input type="text" name='fabrictype'  placeholder="Fabric Type" className="input input-bordered"  required/>
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Size</span>
          </label>
          <input type="text" name='size'  placeholder="Size" className="input input-bordered"  required/>
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Upload a Picture</span>
          </label>
          <input name='pic' type="file" class="file-input file-input-bordered w-full max-w-xs" multiple/>
        
        </div>
        <div className="form-control mt-6">
          <input type='submit'value='ADD NOW' className="btn btn-accent"/>
        </div>
        
      </form>
    </div>
    <ToastContainer/>
    </div>
      </div>
    </div>
    </div>
    
    

  );
};

export default AddProduct;
import React, { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import pic from '../images/factory_purpose/1.jpg';

const IMAGE_UPLOAD_TIMEOUT_MS = 30000;
const PRODUCT_CREATE_TIMEOUT_MS = 15000;
const REQUIRED_IMAGE_COUNT = 2;
const MAX_IMAGE_SIZE_BYTES = 10 * 1024 * 1024;

const requestJson = async (url, options) => {
  const response = await fetch(url, options);
  const responseText = await response.text();

  let data = {};

  if (responseText) {
    try {
      data = JSON.parse(responseText);
    } catch {
      throw new Error(`Server returned an invalid response (${response.status}).`);
    }
  }

  if (!response.ok) {
    throw new Error(data.message || data.error?.message || `Request failed with status ${response.status}.`);
  }

  return data;
};

const AddProduct = () => {
  const imgHostingKey = '61ae2968344a1e59d2019f4122660661';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const activeRequestRef = useRef(null);

  useEffect(() => {
    return () => {
      activeRequestRef.current?.abort();
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const form = event.currentTarget;
    const files = Array.from(form.elements.pic.files || []);

    if (files.length !== REQUIRED_IMAGE_COUNT) {
      toast.error('Please select exactly two product images.', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    const invalidFile = files.find((file) => !file.type.startsWith('image/') || file.size > MAX_IMAGE_SIZE_BYTES);

    if (invalidFile) {
      toast.error('Each file must be an image and no larger than 10 MB.', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    const controller = new AbortController();
    activeRequestRef.current = controller;
    setIsSubmitting(true);

    try {
      const imageTimeoutId = window.setTimeout(() => controller.abort(), IMAGE_UPLOAD_TIMEOUT_MS);
      let images;

      try {
        images = await Promise.all(files.map(async (image) => {
          const formData = new FormData();
          formData.append('image', image);

          const imageData = await requestJson(
            `https://api.imgbb.com/1/upload?key=${imgHostingKey}`,
            {
              method: 'POST',
              body: formData,
              signal: controller.signal,
            }
          );

          const imageUrl = imageData?.data?.url;

          if (!imageUrl) {
            throw new Error('Image upload did not return a valid URL.');
          }

          return imageUrl;
        }));
      } finally {
        window.clearTimeout(imageTimeoutId);
      }

      const item = {
        label: form.elements.label.value.trim(),
        fabrictype: form.elements.fabrictype.value.trim(),
        size: form.elements.size.value.trim(),
        img: images,
      };

      const productTimeoutId = window.setTimeout(() => controller.abort(), PRODUCT_CREATE_TIMEOUT_MS);

      try {
        await requestJson('https://wapparels-server.vercel.app/products', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(item),
          signal: controller.signal,
        });
      } finally {
        window.clearTimeout(productTimeoutId);
      }

      form.reset();
      toast.success('Successfully Added!', {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      if (error.name === 'AbortError') {
        toast.error('Request timed out. Please try again.', {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        console.error('Product submission failed:', error);
        toast.error('Failed to add product. Please try again.', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } finally {
      if (activeRequestRef.current === controller) {
        activeRequestRef.current = null;
      }

      setIsSubmitting(false);
    }
  };

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
      <form onSubmit={handleSubmit} className="card-body">
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
          <input type="text" name='fabrictype' placeholder="Fabric Type" className="input input-bordered" required/>
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Size</span>
          </label>
          <input type="text" name='size' placeholder="Size" className="input input-bordered" required/>
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Upload a Picture</span>
          </label>
          <input name='pic' type="file" className="file-input file-input-bordered w-full max-w-xs" accept="image/*" multiple required/>
        
        </div>
        <div className="form-control mt-6">
          <button type='submit' className="btn btn-accent" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <span className="loading loading-spinner loading-sm" aria-hidden="true"></span>
                ADDING...
              </>
            ) : 'ADD NOW'}
          </button>
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

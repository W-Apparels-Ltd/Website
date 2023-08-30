import React from 'react';

const SubmitModal = ({open,handleClick}) => {
    return (
        <>
    
    {open && 
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" onClick={handleClick}>
 
    <div className="fixed inset-0 bg-opacity-75 transition-opacity"></div>
  
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center items-center sm:p-0">
        
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all  my-8 w-full max-w-sm">
            <div className="bg-base-200 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div>
                <div className='flex justify-center mb-2'>
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg class="h-8 w-8 text-blue-900"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M5 12l5 5l10 -10" /></svg>
                </div>
                </div>
                <div className="mt-3 sm:ml-4 sm:mt-0 sm:text-left">
                  <h3 className="text-base text-center font-semibold leading-6 text-gray-900" id="modal-title">Application Sent Successfully</h3>
                  <div className="mt-2">
                    <p className="text-sm text-center text-gray-800">“Thank you, your application has been received. You can expect to hear back from us within the next 24-48 hours”</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
  </div>
    }
    </>
    );
};

export default SubmitModal;
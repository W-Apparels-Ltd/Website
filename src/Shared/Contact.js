import React from 'react';

const Contact = () => {
  return (
    
      <div className="hero min-h-screen bg-base-200 px-20">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Contact Us</h1>
            <p className="py-6">W. Apparels Ltd. 
            295 JA/ 4 Rayer Bazar, Dhaka 1209<br />
            Phone: +8802 9181198,<br /> Email: info@wapparels.com</p>            
            "Discover the power of connection. Reach out to us today and let us embark on a journey of collaboration, where possibilities unfold and dreams become reality."
          </div>
          <div className="card flex-shrink-0 lg:w-1/2 w-full max-w-xl shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                </label>
                <input type="text" placeholder="name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Subject</span>
                </label>
                <input type="text" placeholder="subject" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Message</span>
                </label>
                <textarea className="textarea textarea-bordered" placeholder="message"></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    
  );
};

export default Contact;
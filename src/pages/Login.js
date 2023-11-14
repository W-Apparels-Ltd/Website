import React from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className='h-[600px] flex justify-evenly items-center'>
      <div>
      </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
      <form  className="card-body">
      <div className='text-center'>
        <h1 className='text-2xl font-bold'>Login</h1>
      </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password'  placeholder="password" className="input input-bordered"  required/>
          <label className="label">
            <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type='submit'value='LOGIN' className="btn btn-accent"/>
        </div>
        <div className='text-center text-sm'>
          <p>New to W. Apparels Ltd.? <Link to='/signup' className='text-blue-900'>Create new account</Link></p>
        </div>
        <div className='text-center'><h1 className='text-md font-bold'>OR</h1></div>
        <div className="form-control mt-3">
          <button className="btn btn-outline btn-accent">CONTINUE WITH GOOGLE</button>
        </div>
      </form>
    </div>

    </div>
  );
};

export default Login;
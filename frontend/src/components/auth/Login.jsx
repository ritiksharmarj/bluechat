import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeClosed } from '@phosphor-icons/react';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);

  // Password visibility handler
  const passwordShowHandler = () => setShow(!show);

  // Form Submit Handler
  const submitHandler = () => {};

  return (
    <>
      <div className='flex-1'></div>

      <div className='w-full sm:w-[400px] flex-1 border border-gray-300 rounded-lg p-4 sm:p-10 shadow-lg bg-white'>
        <div className='flex justify-center mb-2 xl:hidden'>
          <Link to='/'>
            <img
              src='/favicon.svg'
              alt='Bluechat Logo'
              loading='lazy'
              className='w-10'
            />
          </Link>
        </div>
        <h2 className='text-xl font-medium text-center mb-8'>
          Log in to Bluechat
        </h2>

        <div className='my-6'>
          <button className='flex w-full justify-center rounded-lg bg-indigo-50 p-2.5 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-100 outline-none'>
            Login as Guest
          </button>
          <p className='text-center my-4 text-gray-600'>or</p>
        </div>

        <form className='space-y-4' action='#'>
          {/* Email address */}
          <div>
            <label htmlFor='email' className='block mb-2 text-sm font-medium'>
              Email Address
            </label>
            <input
              type='email'
              id='email'
              onChange={(e) => setEmail(e.target.value)}
              className='bg-gray-50 border-0 text-sm rounded-lg block w-full p-2.5 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 outline-none'
              placeholder='name@company.com'
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor='password'
              className='block mb-2 text-sm font-medium'
            >
              Password
            </label>
            <div className='relative flex items-center'>
              <input
                type={show ? 'text' : 'password'}
                id='password'
                onChange={(e) => setPassword(e.target.value)}
                className='bg-gray-50 border-0 text-sm rounded-lg block w-full p-2.5 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 outline-none'
                placeholder='••••••••'
                required
              />
              <button
                type='button'
                aria-label='view-password'
                onClick={passwordShowHandler}
                className='absolute right-0 px-2.5 cursor-pointer text-gray-600 hover:text-gray-900'
              >
                {show ? <Eye /> : <EyeClosed />}
              </button>
            </div>
          </div>

          <div>
            <button
              type='submit'
              onClick={submitHandler}
              className='flex w-full justify-center rounded-lg bg-indigo-600 p-2.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 outline-none'
            >
              Log In
            </button>
          </div>
        </form>
      </div>

      <div className='mt-12 flex-1'>
        <p className='text-sm text-gray-600 text-center'>
          Not a member?
          <Link to='/signup' className='font-semibold ml-1'>
            Join Bluechat
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;

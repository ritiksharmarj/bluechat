import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeClosed } from '@phosphor-icons/react';

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [avatar, setAvatar] = useState();
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
        <h2 className='text-xl font-medium text-center mb-8'>Join Bluechat</h2>

        <form className='space-y-4' action='#'>
          {/* Full Name */}
          <div>
            <label htmlFor='name' className='block mb-2 text-sm font-medium'>
              Full Name
            </label>
            <input
              type='text'
              id='name'
              onChange={(e) => setName(e.target.value)}
              className='bg-gray-50 border-0 text-sm rounded-lg block w-full p-2.5 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 outline-none'
              placeholder='e.g. Bonnie Green'
              required
            />
          </div>

          {/* Email Address */}
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

          {/* Upload Avatar */}
          <div>
            <label
              htmlFor='file_input'
              className='block mb-2 text-sm font-medium'
            >
              Upload Avatar
            </label>
            <input
              type='file'
              id='file_input'
              accept='image/png, image/jpeg, image/jpg'
              className='bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full outline-none file:bg-indigo-50 file:hover:bg-indigo-100 file:text-indigo-600 file:p-2.5 file:border-0 file:mr-3'
            />
          </div>

          {/* Signup Button */}
          <div>
            <button
              type='submit'
              onClick={submitHandler}
              className='flex w-full justify-center rounded-lg bg-indigo-600 p-2.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-500'
            >
              Join Bluechat
            </button>
          </div>
        </form>
      </div>

      <div className='mt-12 flex-1'>
        <p className='text-sm text-gray-600 text-center'>
          Already have an account?
          <Link to='/login' className='font-semibold ml-1'>
            Log In
          </Link>
        </p>
      </div>
    </>
  );
};

export default Signup;

import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
      <div className='w-full sm:w-[400px] border border-gray-300 rounded-lg p-4 sm:p-10 shadow-lg bg-white'>
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
          <div>
            <label htmlFor='name' className='block mb-2 text-sm font-medium'>
              Full name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              className='bg-gray-50 border-0 text-sm rounded-lg block w-full p-2.5 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 outline-none'
              placeholder='e.g. Bonnie Green'
              required
            />
          </div>

          <div>
            <label htmlFor='email' className='block mb-2 text-sm font-medium'>
              Email address
            </label>
            <input
              type='email'
              name='email'
              id='email'
              className='bg-gray-50 border-0 text-sm rounded-lg block w-full p-2.5 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 outline-none'
              placeholder='name@company.com'
              required
              autoComplete='email'
            />
          </div>

          <div>
            <label
              htmlFor='password'
              className='block mb-2 text-sm font-medium'
            >
              Password
            </label>
            <input
              type='password'
              name='password'
              id='password'
              className='bg-gray-50 border-0 text-sm rounded-lg block w-full p-2.5 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 outline-none'
              placeholder='••••••••'
              required
              autoComplete='current-password'
            />
          </div>

          <div>
            <label
              htmlFor='file_input'
              className='block mb-2 text-sm font-medium'
            >
              Upload avatar
            </label>
            <input
              type='file'
              name='file_input'
              id='file_input'
              className='bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full outline-none file:bg-gray-900 file:text-white file:p-2.5 file:border-0 file:mr-3'
            />
          </div>

          <div>
            <button
              type='submit'
              className='flex w-full justify-center rounded-lg bg-indigo-600 p-2.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-500'
            >
              Join Bluechat
            </button>
          </div>
        </form>
      </div>

      <div className='mt-12'>
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

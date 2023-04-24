import { Link } from 'react-router-dom';

const Login = () => {
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
            <button
              type='submit'
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

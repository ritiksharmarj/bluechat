import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <div className='w-full flex gap-8 items-center justify-center h-screen'>
        <Link to='/login'>
          <button className='flex justify-center rounded-md bg-indigo-50 px-3 py-1.5 text-sm font-medium leading-6 text-indigo-600 shadow-sm hover:bg-indigo-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-50'>
            Log In
          </button>
        </Link>

        <Link to='/signup'>
          <button className='flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
            Join Bluechat
          </button>
        </Link>
      </div>
    </>
  );
};

export default HomePage;

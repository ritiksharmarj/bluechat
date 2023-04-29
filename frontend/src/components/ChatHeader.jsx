import { MagnifyingGlass, Bell } from '@phosphor-icons/react';
import logo from '../assets/bluechat-logo-black.svg';
import { Link } from 'react-router-dom';

const ChatHeader = () => {
  return (
    <div
      id='chat-header'
      className='col-span-2 h-fit w-full p-3 border-b lg:px-5'
    >
      <div className='flex items-center justify-between'>
        <div className='w-60'>
          <button className='flex items-center gap-2 rounded-lg bg-indigo-50 p-2.5 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-100 outline-none'>
            {<MagnifyingGlass size={20} />} <span>Search User</span>
          </button>
        </div>

        <div>
          <Link to='/'>
            <img src={logo} alt='Bluechat' loading='lazy' className='h-10' />
          </Link>
        </div>

        <div className='flex items-center gap-6 w-60 justify-end'>
          <button className='flex items-center gap-2 rounded-lg bg-indigo-50 p-2.5 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-100 outline-none'>
            {<Bell size={20} />}
          </button>

          <div>
            <img
              src='http://res.cloudinary.com/devritik/image/upload/v1682536809/jznqflj0uqbxbaxj16e5.jpg'
              alt=''
              className='w-10 h-10 rounded-lg object-cover cursor-pointer outline-none'
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;

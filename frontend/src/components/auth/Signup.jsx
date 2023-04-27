import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Eye,
  EyeClosed,
  WarningCircle,
  CheckCircle,
  XCircle,
} from '@phosphor-icons/react';
import { animateSpin, toastCustom } from '../Craft';
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [avatar, setAvatar] = useState();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Password visibility handler
  const passwordShowHandler = () => setShow(!show);

  // Uploading the avatar
  const postDetails = (selectedAvatar) => {
    setLoading(true);

    // If user don't select avatar
    if (selectedAvatar === undefined) {
      toastCustom(
        'Please select an image',
        <WarningCircle size={24} />,
        '#4f46e5',
        '#eef2ff'
      );
      setLoading(false);
      return;
    }

    // If user select avatar (png, jpeg, jpg) upload it to cloudinary
    if (
      selectedAvatar.type === 'image/png' ||
      selectedAvatar.type === 'image/jpeg' ||
      selectedAvatar.type === 'image/jpg'
    ) {
      const formData = new FormData();
      formData.append('file', selectedAvatar);
      formData.append('upload_preset', 'bluechat');

      fetch(import.meta.env.VITE_CLOUDINARY_API_BASE_IMAGE_UPLOAD_URL, {
        method: 'POST',
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          setAvatar(data.url.toString());
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          throw error;
        });
    } else {
      toastCustom(
        'Please select jpg, jpeg or png!',
        <WarningCircle size={24} />,
        '#4f46e5',
        '#eef2ff'
      );
      setLoading(false);
      return;
    }
  };

  // Form Submit Handler
  const submitHandler = async () => {
    setLoading(true);

    // If any of the fields don't have value
    if (!name || !email || !password) {
      toastCustom(
        'Please fill all the fields!',
        <WarningCircle size={24} />,
        '#4f46e5',
        '#eef2ff'
      );
      setLoading(false);
      return;
    }

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/signup`,
        {
          name,
          email,
          password,
          avatar,
        },
        {
          headers: {
            'Content-type': 'application/json',
          },
        }
      );

      toastCustom(
        'Registration Successful.',
        <CheckCircle size={24} />,
        '#16a34a',
        '#f0fdf4'
      );

      // Store data to local storage for later use
      localStorage.setItem('userInfo', JSON.stringify(data));
      setLoading(false);

      // Redirect to "chats" page
      navigate('/chats');
    } catch (error) {
      toastCustom(
        'Error Occured!',
        <XCircle size={24} />,
        '#dc2626',
        '#fef2f2'
      );
      setLoading(false);
      throw error;
    }
  };

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

        <form className='space-y-4'>
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
            <label htmlFor='avatar' className='block mb-2 text-sm font-medium'>
              Upload Avatar
            </label>
            <input
              type='file'
              id='avatar'
              accept='image/png, image/jpg, image/jpeg'
              onChange={(e) => postDetails(e.target.files[0])}
              className='bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full outline-none file:bg-indigo-50 file:hover:bg-indigo-100 file:text-indigo-600 file:p-2.5 file:border-0 file:mr-3 cursor-pointer'
            />
          </div>

          {/* Signup Button */}
          <div>
            <button
              type='submit'
              disabled={loading}
              onClick={submitHandler}
              className='flex w-full justify-center rounded-lg bg-indigo-600 p-2.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-500'
            >
              {loading ? animateSpin() : 'Join Bluechat'}
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

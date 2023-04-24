import { Link } from 'react-router-dom';
import Signup from '../../components/auth/Signup';
import logo from '../../assets/bluechat-logo-black.svg';

const SignupPage = () => {
  return (
    <>
      <section className='flex w-full'>
        <aside
          className='h-screen p-20 hidden xl:block xl:w-[600px]'
          style={{
            backgroundImage:
              'url(https://dqy38fnwh4fqs.cloudfront.net/website/onboarding-bg.webp)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <div className='flex flex-col justify-between items-start h-full'>
            <div>
              <div className='flex justify-start'>
                <Link to='/'>
                  <img
                    src={logo}
                    alt='Bluechat'
                    loading='lazy'
                    className='h-10'
                  />
                </Link>
              </div>
              <h1 className='text-[56px] font-normal mt-20 leading-tight'>
                Professional Networking, Reimagined!
              </h1>
            </div>

            <div className='flex items-center'>
              <span className='text-sm font-noraml ml-4'>
                Join 21000+ peers.
              </span>
            </div>
          </div>
        </aside>

        <main className='bg-stone-50 w-full h-screen p-4 py-10 sm:p-20 flex flex-col justify-between items-center flex-1 overflow-y-scroll'>
          {<Signup />}
        </main>
      </section>
    </>
  );
};

export default SignupPage;

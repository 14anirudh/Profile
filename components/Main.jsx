import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-[#003140]'>
            Hi, I&#39;m <span className='text-[#D92065]'> Anirudh</span>
          </h1>
          <h1 className='py-2 text-[#003140]'>A Software Developer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I’m focused on building responsive front-end web applications while
            learning back-end technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/gautamanirudh/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:bg-[#0B66C3] ease-in duration-300'>
                <FaLinkedinIn size={20} />
              </div>
            </a>
            <a
              href='https://github.com/14anirudh'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:bg-gray-500 ease-in duration-300'>
                <FaGithub size={20} />
              </div>
            </a>
            <a href="mailto:anirudhgautam987@gmail.com">
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:bg-[#EB4235] ease-in duration-300' mailto>
                <AiOutlineMail size={20} />
              </div>
            </a>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:bg-[#D92065] ease-in duration-300'>
                <BsFillPersonLinesFill size={20} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

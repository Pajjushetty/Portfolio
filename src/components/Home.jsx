import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import ProfilePic from '../assets/Profilepic.jpg';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Prajwal Shetty
        </h1>


        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
        <div className=' absolute top-50 right-10  mr-12 mb-12  lg:mr-0 lg:w-1/'>
          <img
            src={ProfilePic}
            alt='Profile'
            className='rounded-full w-60 h-60 object-cover float-right'
          />
        </div>

      </div>
    </div>
  );
};

export default Home;

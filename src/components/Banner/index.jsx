import React from 'react';
import './index.css';

function Banner({ img, text }) {
  return (
    <div className='p-2 relative h-auto pt-0'>
      <img
        className='filter object-cover blur-sm vh w-full text-center'
        src={img}
        alt='banner'
      />
      <p className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white font-semibold centered outline banner-header'>
        {text}
      </p>
      <hr className='relative -top-2.5' />
    </div>
  );
}

export default Banner;

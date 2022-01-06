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
      <p className='text-5xl sm:text-5xl md:text-6xl lg:text-9xl text-white font-semibold centered outline banner-head'>
        {text}
      </p>
    </div>
  );
}

export default Banner;

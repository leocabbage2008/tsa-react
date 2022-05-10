import React from 'react';
import './index.css';
import empty from '../../empty.webp';

function Banner({ img, text }) {
  return (
    <div className='p-2 relative h-auto pt-0'>
      <img
        className='p-0 lazyload object-cover banner w-full brightness-90'
        src={empty}
        data-srcset={img}
        alt='banner'
      />
      <p className='banner-text center'>
        {text}
      </p>
    </div>
  );
}

export default Banner;

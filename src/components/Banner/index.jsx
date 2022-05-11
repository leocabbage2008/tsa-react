import React from 'react';
import './index.css';
import empty from '../../empty.webp';

function Banner({ img, text }) {
  return (
    <div className='relative pt-0 pb-3.5'>
      <img
        className='lazyload object-cover banner w-full'
        src={empty}
        data-srcset={img}
        alt='banner'
      />
      <p className='banner-text center'>{text}</p>
    </div>
  );
}

export default Banner;

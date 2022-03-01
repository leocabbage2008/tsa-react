import React from 'react';
import './index.css';
// import empty from '../../empty.webp';
import { Image } from '@imageengine/react';

function Banner({ img, text }) {
  return (
    <div className='p-2 relative h-auto pt-0'>
      {/* <img
        className='lazyload filter object-cover vh w-full text-center brightness-90'
        src={empty}
        data-srcset={img}
        alt='banner'
        width='300'
        height='400'
      /> */}
      <Image
        className='filter object-cover vh w-full text-center brightness-90'
        src={img}
        alt='banner'
        width='300'
        height='400'
        directives={{ noOptimization: false, sharpess: 100 }}
      />
      <p className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white font-semibold centered outline banner-header'>
        {text}
      </p>
      <hr className='relative -top-2.5' />
    </div>
  );
}

export default Banner;

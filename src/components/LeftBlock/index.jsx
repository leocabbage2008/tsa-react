import React, { useEffect, useRef } from 'react';
import empty from '../../empty.webp';

function LeftBlock({ img, title, children }) {
  const leftBlock = useRef(null);
  useEffect(() => {
    if (leftBlock) {
      leftBlock.current.setAttribute('style', 'background-color:#2f2f2f');
    }
  }, []);
  return (
    <div
      className='inherit-background my-3 lg:grid grid-cols-5 lg:grid-column grid-row justify-center'
      ref={leftBlock}
    >
      <div className='col-start-1 col-end-4 sm:mx-14 mx-6 mt-6'>
        <h3 className='lg:pt-0 pt-10'>{title}</h3>
        <p className='text-2xl mb-10'>{children}</p>
      </div>
      <img
        className='w-full blockimg lazyload object-cover mx-auto col-start-4 col-end-6'
        src={empty}
        data-src={img}
        alt='Block'
      />
    </div>
  );
}

export default LeftBlock;

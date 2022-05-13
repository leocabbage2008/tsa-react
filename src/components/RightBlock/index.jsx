import React from 'react';
import empty from '../../empty.webp';

function RightBlock({ img, title, children }) {
  return (
    <div className='my-3 lg:grid grid-cols-5 lg:grid-column grid-row justify-center'>
      <div className='col-start-3 col-end-6 sm:mx-14 mx-6 mt-6'>
        <h3 className='lg:pt-0 pt-10'>{title}</h3>
        <p className='text-2xl mb-10'>{children}</p>
      </div>
      <img
        className='w-full blockimg lazyload object-cover mx-auto col-start-1 col-end-3 row-start-1 row-end-1'
        src={empty}
        data-src={img}
        alt='Block'
      />
    </div>
  );
}

export default RightBlock;

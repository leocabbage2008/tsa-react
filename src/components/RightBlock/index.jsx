import React from 'react';

function RightBlock({ img, title, children, bg = 'rgba(0,0,0,0)' }) {
  return (
    <div
      className='my-3 lg:grid grid-cols-5 lg:grid-column grid-row justify-center'
      style={bg && { backgroundColor: bg }}
    >
      <img
        className='lg:x-0 mx-auto px-1 h-full col-start-1 col-end-3'
        src={img}
        alt='Block Image'
      />
      <div className='content col-start-3 col-end-6'>
        <h3 className='flex justify-end'>{title}</h3>
        <p className='sm:mx-14 mt-6 text-2xl'>{children}</p>
      </div>
    </div>
  );
}

export default RightBlock;

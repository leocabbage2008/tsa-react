import React from 'react';

function LeftBlock({ img, title, children, bg = 'rgba(0,0,0,0)' }) {
  return (
    <div
      className='my-3 lg:grid grid-cols-5 lg:grid-column grid-row justify-center'
      style={bg && { backgroundColor: bg }}
    >
      <div className='content col-start-1 col-end-4'>
        <h3>{title}</h3>
        <p className='sm:mx-14 mt-6 text-2xl'>{children}</p>
      </div>
      <img
        className='lg:x-0 mx-auto px-1 h-full col-start-4 col-end-6'
        src={img}
        alt='Block'
      />
    </div>
  );
}

export default LeftBlock;

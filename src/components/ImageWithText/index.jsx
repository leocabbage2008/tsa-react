import React from 'react';
import './index.css';
export default function ImageWithText({img, text}) {
  return(
    <div className='p-2 mt-0.5 relative'>
      <img className='filter blur-md object-cover homie w-full' src={img} alt='banner'/>
      <div className='flex'>
        <p className='text-red-700 text-5xl m-auto'>{text}</p>
      </div>
    </div>
  );
}
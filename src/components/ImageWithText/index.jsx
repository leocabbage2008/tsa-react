import React from 'react';
import './index.css';
export default function ImageWithText({img, text}) {
  return(
    <div className=''>
    <img className='filter blur-md object-cover homie w-full' src={img} alt='image'/>
    <h1 className='text-5xl text-white text-center relative inset-x-0 bottom-56'>{text}</h1>
    </div>
  );
}
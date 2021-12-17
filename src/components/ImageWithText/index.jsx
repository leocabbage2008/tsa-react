import React from 'react';
export default function ImageWithText({img, text}) {
  return(
    <>
    <img className='blur-lg' src={img} alt='' />
    <h1 className='text-3xl text-white header text-center relative bottom-20'>{text}</h1>
    </>
  );
}
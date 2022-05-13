import React from 'react';
import './index.css';

export default function Directions({ directions }) {
  return (
    <div className='mt-10'>
      <h1 className='text-xl'>Directions:</h1>
      <ol className='ml-3 space-y-5 directions'>
        {directions.map((v, i) => (
          <li className='flex' key={i}>
            <div className='num-circle rounded-full flex justify-center items-center px-2'>
              {i + 1}
            </div>
            <span className='direction text-xl'>{v.direction}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

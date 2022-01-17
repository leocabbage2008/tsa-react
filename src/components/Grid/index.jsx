import Card from '../Card';
import React from 'react';

export default function Grid({ cards }) {
  return (
    <div className='container my-12 mx-auto md:px-12'>
      <div className='flex flex-wrap -mx-1 lg:-mx-4 justify-center'>
        {cards.map((v, i) => (
          <Card
            src={v.src}
            title={v.title}
            text={v.text}
            className='my-1 px-0 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3'
            key={i}
            i={i}
          />
        ))}
      </div>
    </div>
  );
}

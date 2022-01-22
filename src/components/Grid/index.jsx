import Card from '../Card';
import React from 'react';

export default function Grid({ cards }) {
  return (
    <>
      {cards.map((v, i) => (
        <Card
          src={v.src}
          title={v.title}
          time={v.time}
          text={v.text}
          className='my-1 px-0 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3'
          key={i}
        />
      ))}
    </>
  );
}

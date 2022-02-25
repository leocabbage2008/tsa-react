import Card from '../Card';
import React from 'react';

export default function Grid({ cards, className = '' }) {
  return (
    <>
      {cards.map((v, i) => (
        <Card
          src={v.src}
          title={v.title}
          time={v.time}
          text={v.text}
          className={className}
          key={i}
        />
      ))}
    </>
  );
}

import React from 'react';
import './index.css';

export default function Directions({ directions }) {
  return (
    <ol className='directions list-decimal'>
      {directions.map((v, i) => (
        <li key={i}>{v.direction}</li>
      ))}
    </ol>
  );
}

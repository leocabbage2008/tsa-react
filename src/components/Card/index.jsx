import React from 'react';
import './index.css';
import { classNames } from '../../utils';

export default function Card({ src, title, text, className = '', i }) {
  const index = i ? `-${i}` : '';
  return (
    <div
      className={classNames(
        'card bg-transparent px-2 mb-3',
        className && className
      )}
    >
      <img src={src} className='card-img-top' alt='card image' />
      <div>
        <div className='accordion' id={`acc-controller${index}`}>
          <h2 className='accordion-header' id={`acc-header${index}`}>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target={`#acc-toggle${index}`}
              aria-expanded='true'
              aria-controls={`acc-toggle${index}`}
            >
              {title}
            </button>
          </h2>
          <div
            id={`acc-toggle${index}`}
            className='accordion-collapse collapse'
            aria-labelledby={`acc-header${index}`}
            data-bs-parent={`#acc-controller${index}`}
          >
            <div className='accordion-body'>{text}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

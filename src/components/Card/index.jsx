import React from 'react';
import './index.css';
import { classNames } from '../../utils';
import { v4 as uuid } from 'uuid';

export default function Card({
  src,
  title,
  time,
  text,
  className = '',
  children,
}) {
  const id = uuid();
  return (
    <div
      className={classNames(
        'card bg-transparent px-2 mb-3',
        className && className
      )}
    >
      <img src={src} className='card-img card-img-top' alt='card banner' />
      <div>
        <div className='accordion' id={`acc-controller${id}`}>
          <h2 className='accordion-header' id={`acc-header${id}`}>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target={`#acc-toggle${id}`}
              aria-expanded='true'
              aria-controls={`acc-toggle${id}`}
            >
              <div className='flex flex-col'>
                <span>{title}</span>
                <span className='text-xs'>{time}</span>
              </div>
            </button>
          </h2>
          <div
            id={`acc-toggle${id}`}
            className='accordion-collapse collapse'
            aria-labelledby={`acc-header${id}`}
            data-bs-parent={`#acc-controller${id}`}
          >
            <div className='accordion-body'>{text || children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

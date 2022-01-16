import React from 'react';
import './index.css';

export default function Card({ src, title, text }) {
  return (
    <>
      <div className='card'>
        <img src={src} className='card-img-top' alt='card image' />
        <div>
          <div className='accordion' id='acc-controller'>
            <h2 className='accordion-header' id='acc-header'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#acc-toggle'
                aria-expanded='true'
                aria-controls='acc-toggle'
              >
                {title}
              </button>
            </h2>
            <div
              id='acc-toggle'
              className='accordion-collapse collapse'
              aria-labelledby='acc-header'
              data-bs-parent='#acc-controller'
            >
              <div className='accordion-body'>{text}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from 'react';
import './index.css';

export default function Recipe({ ingredients }) {
  return (
    <fieldset className='ml-5 space-y-5 ingredients'>
      {ingredients.map((v, i) => {
        return (
          <div className='relative flex items-start' key={i}>
            <div className='flex items-center h-5'>
              <input
                id='comments'
                aria-describedby='comments-description'
                name='comments'
                type='checkbox'
                className='h-4 w-4'
              />
            </div>
            <div className='ml-3 text-sm'>
              <label htmlFor='comments' className='font-medium'>
                {v.ingredient}
              </label>
            </div>
          </div>
        );
      })}
    </fieldset>
  );
}

import React from 'react';

export default function Recipe({ ingredients }) {
  return (
    <fieldset className='ml-5 space-y-5 ingredients'>
      {ingredients.map((v, i) => {
        return (
          <div className='relative flex items-start'>
            <div className='flex items-center h-5'>
              <input
                id='comments'
                aria-describedby='comments-description'
                name='comments'
                type='checkbox'
                className='h-4 w-4 border-gray-300'
              />
            </div>
            <div className='ml-3 text-sm'>
              <label htmlFor='comments' className='font-medium text-gray-700'>
                {v.title}
              </label>
              <p id='comments-description' className='text-gray-500'>
                {v.message}
              </p>
            </div>
          </div>
        );
      })}
    </fieldset>
  );
}

import React from 'react';
import './index.css';

export default function Recipe({ ingredients }) {
  return (
    <div className='mt-10'>
      <h1>Ingredients:</h1>
      <fieldset className='ml-5 space-y-5 ingredients'>
        {ingredients.map((v, i) => (
          <div className='relative flex items-start' key={i}>
            <div className='flex items-center h-5'>
              <label
                htmlFor={`ingredient-${i}`}
                className='font-medium checkbox'
              >
                <input
                  id={`ingredient-${i}`}
                  name='ingredient'
                  type='checkbox'
                  className='h-4 w-4 mr-2'
                />
                <span>{v.ingredient}</span>
              </label>
            </div>
          </div>
        ))}
      </fieldset>
    </div>
  );
}

import React from 'react';

function ContentGrid({ children }) {
  return (
    <div className='grid grid-cols-6'>
      <div className='col-start-2 col-end-6'>{children}</div>
    </div>
  );
}

export default ContentGrid;

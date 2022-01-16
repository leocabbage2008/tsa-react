import React from 'react';

export default function Cite({ sources }) {
  return (
    <>
      {sources.map((v, i) => (
        <p className='text-center text-xl mt-1' key={i}>
          {v.title}:{' '}
          <a className='link' href={v.citeSource}>
            {v.author}
          </a>
          ,{' '}
          <a className='link' href={v.licenseLink}>
            {v.licenseName}
          </a>
          , via {v.from}
        </p>
      ))}
    </>
  );
}

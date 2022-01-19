import React from 'react';

export default function Cite({ sources }) {
  return (
    <>
      {sources.map((v, i) => (
        <div className='text-center text-xl mt-1' key={i}>
          <a className='link' href={v.citeSource}>
            {v.title}
          </a>
          {': '}
          <span>{v.author}</span>
          {v.licenseLink && ', '}
          <a className='link' href={v.licenseLink}>
            {v.licenseName}
          </a>
          , <span>via {v.from}</span>
        </div>
      ))}
    </>
  );
}

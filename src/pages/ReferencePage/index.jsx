import React from 'react';
import Layout from '../../components/Layout';
import cc from './Reference/CopyrightChecklist.pdf';
import rewl from './Reference/WorkLogNationals.pdf';
import stwl from './Reference/WorkLogStates.pdf';

export default function ReferencePage() {
  return (
    <Layout title='References'>
      <div className='content mx-4 flex flex-col justify-center'>
        <p className='sm:mx-14 mt-6 text-2xl'>
          Copyright Checklist{' '}
          <a
            href={cc}
            target='_blank'
            rel='noopener noreferrer'
            className='link'
          >
            here.
          </a>
        </p>
        <p className='sm:mx-14 mt-6 text-2xl'>
          Plan of Regionals Work log{' '}
          <a
            href={rewl}
            target='_blank'
            rel='noopener noreferrer'
            className='link'
          >
            here.
          </a>
        </p>
        <p className='sm:mx-14 mt-6 text-2xl'>
          Plan of States Work log{' '}
          <a
            href={stwl}
            target='_blank'
            rel='noopener noreferrer'
            className='link'
          >
            here.
          </a>
        </p>
      </div>
    </Layout>
  );
}

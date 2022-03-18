import React from 'react';
import Layout from '../../components/Layout';
import cc from './Reference/CopyrightChecklist.pdf';
import wl from './Reference/WorkLog.pdf';
import { Helmet } from 'react-helmet';

export default function ReferencePage() {
  return (
    <Layout>
      <Helmet>
        <title>References</title>
      </Helmet>
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
          </a>{' '}
        </p>
        <p className='sm:mx-14 mt-6 text-2xl'>
          Plan of Work log{' '}
          <a
            href={wl}
            target='_blank'
            rel='noopener noreferrer'
            className='link'
          >
            here.
          </a>{' '}
        </p>
      </div>
    </Layout>
  );
}

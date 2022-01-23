import React from 'react';
import Cite from '../../components/Cite';
import Layout from '../../components/Layout';
import Banner from '../../components/Banner';
import { useHref } from 'react-router-dom';
// import banner from './banner.jpeg';
import cc from './Reference/CopyrightChecklist.pdf'
import wl from './Reference/WorkLog.pdf'

export default function SourcesPage() {
  return (
    <Layout>
      <div className='content mx-4 flex flex-col justify-center'>
        <p className='sm:mx-14 mt-6 text-2xl'>
            Copyright Checklist {' '}
            <a href={cc} target="_blank" className='link'>
              here.
            </a>{' '}
          </p>
          <p className='sm:mx-14 mt-6 text-2xl'>
            Plan of Work log {' '}
            <a href={wl} target="_blank" className='link'>
              here.
            </a>{' '}
          </p>
      </div>
    </Layout>
  );
}

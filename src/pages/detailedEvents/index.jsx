import React from 'react';
import Layout from '../../components/Layout';
import banner from '../../empty.webp';
import Banner from '../../components/Banner';
import { Helmet } from 'react-helmet';

export default function DetailedEvents() {
  return (
    <Layout>
      <Helmet>
        <title>Detailed Events</title>
      </Helmet>
      <Banner img={banner} text='Detailed Events' />
      <div className='content px-4'>
        <p className='text-center text-2xl'>Test</p>
        <p className='text-center text-xl mt-1'>Yes</p>
      </div>
    </Layout>
  );
}

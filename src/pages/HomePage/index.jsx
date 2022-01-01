import React from 'react';
import Layout from '../../components/Layout';
import './index.css';
import banner from './banner.jpeg';
import Banner from '../../components/Banner';

export default function HomePage() {
  return (
    <Layout>
      <Banner img={banner} text='Lantern Festival' />
      <div className='content px-4'>
        <hr />
        <p className='text-center text-xl'>
          The Lantern Festival is a festival that goes back more than 2,000
          years ago
        </p>
      </div>
    </Layout>
  );
}

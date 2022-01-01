import React from 'react';
import Layout from '../../components/Layout';
import banner from './banner.jpg';
import Banner from '../../components/Banner';

export default function AboutUsPage() {
  return (
    <Layout>
      <Banner img={banner} text='About Us' />
      <div className='content px-4'>
        <hr className='mb-3 bg-red-400' />
        <p className='text-center text-xl'>
          We used bootstrap and tailwindcss to create this beautiful website.
          It's also built on the React framework and also uses Headless UI.
        </p>
      </div>
    </Layout>
  );
}

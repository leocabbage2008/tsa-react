import React from 'react';
import Layout from '../../components/Layout';
import banner from './banner.jpg';

export default function AboutUsPage() {
  return (
    <Layout>
      <div className='p-2 mt-0.5 relative'>
        <img className='filter blur-md object-cover half-height w-full text-center' src={banner} alt='banner'/>
        <p className='typography text-7xl text-white font-semibold centered outline'>About Us</p>
      </div>
      <div className='p-2'>
      <h1> We used Bootstrap, Tailwind, and React in this project.</h1>
      <h1>We are from SCASD, and built this project for TSA.</h1>
      </div>
    </Layout>
  );
}

import React from 'react';
import Layout from '../../components/Layout';
import './index.css';
import banner from './banner.jpg';

export default function HomePage() {
  return (
    <Layout>
    <div className='p-2 mt-0.5 relative'>
      <img className='filter blur-md object-cover half-height w-full text-center' src={banner} alt='banner'/>
      <p className='typography text-7xl text-white font-semibold centered outline'>Chinese Lantern Festival</p>
    </div>
    <hr/>
    <div className='content'>
      <p className='text-center text-lg text-inherit'>
        The Chinese Lantern Festival is a festival celebrating the final day of the Chinese New Year celebrations. 
        </p>
    </div>
    </Layout>
  );
}

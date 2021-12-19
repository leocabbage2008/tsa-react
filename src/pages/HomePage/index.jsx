import React from 'react';
import Layout from '../../components/Layout';
import './index.css';
import banner from './banner.jpg';

export default function HomePage() {
  return (
    <Layout>
    <div className='p-2 mt-0.5 relative container'>
      <img className='filter blur-md object-cover half-height w-full' src={banner} alt='banner'/>
      <p className='typography text-5xl text-green-700 font-semibold centered '>Chinese Lantern Festival</p>
    </div>
    <hr/>
    <div className='content '>
      <p className='text-center text-lg text-inherit'>
        The Chinese Lantern Festival is a festival celebrating the final day of the Chinese New Year celebrations. 
        </p>
    </div>
    </Layout>
  );
}

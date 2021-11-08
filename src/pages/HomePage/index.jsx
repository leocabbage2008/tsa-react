import React from 'react';
import Layout from '../../components/Layout';
import './index.css';
import banner from './banner.jpg';

export default function HomePage() {
  return (
    <Layout>
      <div>
        <div className="flex filter blur-lg m-1 overflow-hidden banner-wrapper">
          <img src={banner} alt="banner"/>
        </div>
        <h1 className='text-3xl text-white header text-center relative bottom-10'>Lantern Festival </h1>
      </div>
    </Layout>
  );
}

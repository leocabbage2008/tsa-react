import React from 'react';
import Layout from '../../components/Layout';
import './index.css';
import banner from './banner.jpg';
import ImageWithText from '../../components/ImageWithText';

export default function HomePage() {
  return (
    <Layout>
      <ImageWithText img={banner} text='e'/>
      <h1 className='text-3xl text-white header text-center relative bottom-10'>Lantern Festival </h1>
    </Layout>
  );
}

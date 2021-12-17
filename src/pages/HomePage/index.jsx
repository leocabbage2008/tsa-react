import React from 'react';
import Layout from '../../components/Layout';
import './index.css';
import banner from './banner.jpg';
import ImageWithText from '../../components/ImageWithText';

export default function HomePage() {
  return (
    <Layout>
      <ImageWithText img={banner} text='Chinese Lantern Festival'/>
      <hr/>
      <p className='text-3xl text-center text-inherit'>test</p>
    </Layout>
  );
}

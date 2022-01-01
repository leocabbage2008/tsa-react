import React from 'react';
import Layout from '../../components/Layout';
import './index.css';
import banner from './banner.jpg';
import { classNames } from '../../utils';

export default function HomePage() {
  return (
    <Layout>
      <div className='p-2 mt-0.5 relative h-auto'>
        <img
          className='filter blur-md object-cover vh w-full text-center'
          src={banner}
          alt='banner'
        />
        <p
          className={classNames(
            'text-5xl sm:text-5xl md:text-6xl lg:text-9xl text-white font-semibold centered outline'
          )}
        >
          Chinese Lantern Festival
        </p>
      </div>
      <hr className='opacity-50 mb-3' />
      <div className='content'>
        <p className='text-center text-xl'>
          The Lantern Festival is a festival that goes back more than 2,000
          years ago
        </p>
      </div>
    </Layout>
  );
}

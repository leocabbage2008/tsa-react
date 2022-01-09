import React from 'react';
import Layout from '../../components/Layout';
import './index.css';
import banner from './banner.jpg';
import Banner from '../../components/Banner';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <Layout>
      <Banner img={banner} text='Lantern Festival' />
      <div className='content mx-4 flex flex-col justify-center'>
        <Link
          className='btn btn-danger mx-auto relative -top-16 py-3 px-5 text-xl animate-bounce duration-700'
          to='/events'
        >
          See Events Here
        </Link>
        <div className='body relative -top-3'>
          <p className='text-center text-3xl'>
            The Magical Chinese Lantern Festival...
          </p>
          <p className='text-center mt-6 text-2xl'>
            From the comfort of your own home!
          </p>
          <p className='mx-14 mt-6 text-2xl'>
            Due to the Covid-19 pandemic, we will not be hosting our anual
            celebrations in-person. Instead, we're having our completely free
            events online. Click the button above to learn more about our
            events, or click{' '}
            <Link to='/festival/about' className='link'>
              here
            </Link>{' '}
            to learn more about the Chinese Lantern Festival.
          </p>
        </div>
      </div>
    </Layout>
  );
}

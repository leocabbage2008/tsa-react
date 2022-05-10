import React from 'react';
import Layout from '../../components/Layout';
import './index.css';

export default function HomePage() {
  return (
    <Layout>
      <div className='splash'>
        <h1 className='banner-header'>Lantern Festival</h1>
        <div className='banner-sub'>
          <div className='text-center font-bold'>
            Experience the Magical Chinese Lantern Festival From the comfort of
            your own home
          </div>
        </div>
      </div>
      <hr />
      <div className='lg:flex lg:flex-column flex-row justify-center'>
        <div className='content'>
          <h3>Online format</h3>
          <p className='sm:mx-14 mt-6 text-2xl'>
            Due to the Covid-19 pandemic, we will not be hosting our annual
            celebrations in-person. Instead, we're going to be hosting our
            events online on February 15th, 2022. Click the above button to
            learn more about our events, or learn more about the Chinese Lantern
            Festival{' '}
            <a href='/festival/about' className='link'>
              here.
            </a>
          </p>
        </div>
        <img
          className='lg:x-0 mx-auto mt-3 px-1 h-full'
          src='https://picsum.photos/500/300'
        />
      </div>
      <hr />
      <p className='sm:mx-14 mt-6 text-2xl'>
        During this event, we will be making lanterns, guessing riddles, making
        traditional Lantern Festival food, and more. This is an wonderful event
        anybody can attend, completely free of charge!
      </p>
    </Layout>
  );
}

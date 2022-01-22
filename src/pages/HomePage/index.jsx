import React from 'react';
import Layout from '../../components/Layout';
import './index.css';
import banner from './banner.jpg';
import Banner from '../../components/Banner';

export default function HomePage() {
  return (
    <Layout>
      <Banner img={banner} text='Lantern Festival' />
      <div className='content mx-4 flex flex-col justify-center'>
        <a
          className='btn btn-danger mx-auto relative -top-16 py-2.5 px-2.5 sm:px-4 text-lg duration-700 event-btn'
          href='/events'
        >
          Visit Events Here
        </a>
        <div className='content mx-4 text-center'>
          <p className='text-center text-3xl'>
            The Magical Chinese Lantern Festival...
          </p>
          <p className='text-center mt-6 text-2xl'>
            From the comfort of your own home!
          </p>
          <p className='sm:mx-14 mt-6 text-2xl'>
            Due to the Covid-19 pandemic, we will not be hosting our annual
            celebrations in-person. Instead, we're going to be hosting our
            events online on Febuary 15th, 2022. Click the button above to learn
            more about our events, or learn more about the Chinese Lantern
            Festival{' '}
            <a href='/festival/about' className='link'>
              here.
            </a>{' '}
          </p>
          <hr />
          <p className='sm:mx-14 mt-6 text-2xl'>
            We will be making lanterns, guessing riddles and making Tang Yuan, a
            traditional Lantern Festival dish. This is a family anybody can
            attend, completely free of charge! All you need is to sign up and
            you're good to go.
          </p>
        </div>
        <div className='body relative -top-3'></div>
      </div>
    </Layout>
  );
}

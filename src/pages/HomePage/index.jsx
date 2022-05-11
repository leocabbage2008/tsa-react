import React from 'react';
import Layout from '../../components/Layout';
import './index.css';
import Banner from '../../components/Banner';
import banner from '../../images/bannerHome.webp';

export default function HomePage() {
  return (
    <Layout>
      <Banner className='banner' img={banner} text='Lantern Festival' />

      <h2 className='text-center font-bold'>
        Experience the Magical Chinese Lantern Festival from the comfort of your
        own home
      </h2>
      <div className='grid grid-cols-12'>
        <div className='col-start-2 col-end-12'>
          <div className='lg:flex lg:flex-column flex-row justify-center'>
            <div className='content'>
              <h3>Online format</h3>
              <p className='sm:mx-14 mt-6 text-2xl'>
                Due to the Covid-19 pandemic, we will not be hosting our annual
                celebrations in-person. Instead, we're going to be hosting our
                events online on February 15th, 2022. Click the above button to
                learn more about our events, or learn more about the Chinese
                Lantern Festival{' '}
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
          <p className='sm:mx-14 mt-6 text-2xl'>
            During this event, we will be making lanterns, guessing riddles,
            making traditional Lantern Festival food, and more. This is an
            wonderful event anybody can attend, completely free of charge!
          </p>
        </div>
      </div>
    </Layout>
  );
}

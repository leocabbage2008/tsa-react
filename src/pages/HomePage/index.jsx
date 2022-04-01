import React from 'react';
import Layout from '../../components/Layout';
import './index.css';
import banner from '../../images/bannerHomePage.webp';
import Banner from '../../components/Banner';

export default function HomePage() {
  return (
    <Layout>
      <Banner img={banner} text='Lantern Festival' />
      <div className='content mx-4 flex flex-col justify-center'>
        <a
          className='button btn mx-auto relative -top-14 sm:px-5 text-lg event-btn'
          href='/events'
        >
          Visit Events Here
        </a>
        <div className='content mx-4 text-center'>
          <br /><br /><br />
          <h2 className='text-center font-bold'>
            Experience the Magical Chinese Lantern Festival From the comfort of your own home!
          </h2>
          <br /><br /><br /><br />
          <hr />
          <br /><br /><br />
          <p className='sm:mx-14 mt-6 text-2xl left'>
            Due to the Covid-19 pandemic, we will not be hosting our annual
            celebrations in-person. Instead, we're going to be hosting our
            events online on Febuary 15th, 2022. Click the above button to learn
            more about our events, or learn more about the Chinese Lantern
            Festival{' '}
            <a href='/festival/about' className='link'>
              here.
            </a>{' '}
          </p>
          <br /><br /><br />
          <hr />
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

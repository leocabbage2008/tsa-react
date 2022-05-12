import React from 'react';
import Layout from '../../components/Layout';
import './index.css';
import Banner from '../../components/Banner';
import banner from '../../images/bannerHome.webp';
import online from '../../images/online.jpg';

export default function HomePage() {
  return (
    <Layout>
      <Banner className='banner' img={banner} text='Lantern Festival' />

      <h2 className='text-center font-bold'>
        Experience the Magical Chinese Lantern Festival,
        <br></br>
        from the comfort of your own home!
      </h2>
      {/*
        On my computer, the content shows up w/o needing to scroll down.
        I think it looks better if the content appears when you scroll down.
      */}
      <p><br></br><br></br></p>
      <div className='h-screen grid grid-cols-6'>
        <div className='col-start-2 col-end-6'>
          <div className='lg:grid grid-cols-5 lg:grid-column grid-row justify-center'>
            <div className='content col-start-1 col-end-4'>
              <h3>Online format</h3>
                <p className='sm:mx-14 mt-6 text-2xl'>
                  Due to the Covid-19 pandemic, we will not be hosting our annual
                  celebrations in-person. Instead, we're going to be hosting our
                  events online on February 15th, 2022. Before then, you can learn about the Lantern Festival{' '}
                  <a href='/festival/about' className='link'>
                    here.
                  </a>
                </p>
            </div>
            <img
              className='lg:x-0 mx-auto px-1 h-full col-start-4 col-end-6'
              src={online}
              alt='Join us online'
            />
          </div>
          <h3>About the event</h3>
          <p className='mt-10 text-2xl'>
            During this event, we will be making lanterns, guessing riddles,
            making traditional Lantern Festival food, and more. This is an
            wonderful event anybody can attend, completely free of charge!
          </p>
        </div>
      </div>
    </Layout>
  );
}

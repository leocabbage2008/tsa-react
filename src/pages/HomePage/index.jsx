import React from 'react';
import Layout from '../../components/Layout';
import Banner from '../../components/Banner';
import banner from '../../images/bannerHome.webp';
import online from '../../images/online.jpg';
import LeftBlock from '../../components/LeftBlock';
import RightBlock from '../../components/RightBlock';
import './index.css';

export default function HomePage() {
  return (
    <Layout>
      <Banner img={banner} text='Lantern Festival' />

      <h2 className='text-center font-bold'>
        Experience the Magical Chinese Lantern Festival,
        <br />
        from the comfort of your own home!
      </h2>
      {/*
        On my computer, the content shows up w/o needing to scroll down.
        I think it looks better if the content appears when you scroll down.
      */}
      {/* that's fine, tweaking can come after, there seems to be no issues on my screen*/}
      <p>
        <br></br>
        <br></br>
      </p>
      <div className='h-screen grid grid-cols-6'>
        <div className='col-start-2 col-end-6'>
          <LeftBlock img={online} title='Online Format'>
            Due to the Covid-19 pandemic, we will not be hosting our annual
            celebrations in-person. Instead, we're going to be hosting our
            events online on February 15th, 2023. Before then, you can learn
            about the Lantern Festival{' '}
            <a href='/festival/about' className='link'>
              here.
            </a>
          </LeftBlock>
          <RightBlock img={online} title='Online Format'>
            Due to the Covid-19 pandemic, we will not be hosting our annual
            celebrations in-person. Instead, we're going to be hosting our
            events online on February 15th, 2023. Before then, you can learn
            about the Lantern Festival{' '}
            <a href='/festival/about' className='link'>
              here.
            </a>
          </RightBlock>
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

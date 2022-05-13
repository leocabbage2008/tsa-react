import React from 'react';
import Layout from '../../components/Layout';
import Banner from '../../components/Banner';
import banner from '../../images/bannerHome.webp';
import card1 from '../../images/card1.webp';
import card2 from '../../images/card2.webp';
import LeftBlock from '../../components/LeftBlock';
import RightBlock from '../../components/RightBlock';
import ContentGrid from '../../components/ContentGrid';
import './index.css';

export default function HomePage() {
  return (
    <Layout>
      <Banner img={banner} text='Lantern Festival' />

      <h2 className='text-center font-bold'>
        Experience the Magical Chinese Lantern Festival!
      </h2>
      <ContentGrid>
        <div className='flex flex-col gap-y-5'>
          <LeftBlock img={card1} title='Online Format'>
            Due to the Covid-19 pandemic, we will not be hosting our annual
            celebrations in-person. Instead, we're going to be hosting our
            events online on February 15th, 2023. Before then, you can learn
            about the Lantern Festival{' '}
            <a href='/festival/about' className='link'>
              here.
            </a>
          </LeftBlock>
          <RightBlock img={card2} title='About Events'>
            During this event, we will be making lanterns, guessing riddles,
            making traditional Lantern Festival food, and more. This is an
            wonderful event anybody can attend, completely free of charge! You
            can explore the events{' '}
            <a href='/events' className='link'>
              here.
            </a>
          </RightBlock>
        </div>
      </ContentGrid>
    </Layout>
  );
}

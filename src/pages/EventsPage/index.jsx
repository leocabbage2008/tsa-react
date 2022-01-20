import React from 'react';
import Layout from '../../components/Layout';
import './index.css';
import Banner from '../../components/Banner';
import banner from './banner.jpg';
import Grid from '../../components/Grid';

export default function EventsPage() {
  const cards = [
    { src: 'https://picsum.photos/200/300', title: 'title', text: 'text' },
    { src: 'https://picsum.photos/200/300', title: 'title', text: 'text' },
    { src: 'https://picsum.photos/200/300', title: 'title', text: 'text' },
    { src: 'https://picsum.photos/200/300', title: 'title', text: 'text' },
    { src: 'https://picsum.photos/200/300', title: 'title', text: 'text' },
    { src: 'https://picsum.photos/200/300', title: 'title', text: 'text' },
    { src: 'https://picsum.photos/200/300', title: 'title', text: 'text' },
    { src: 'https://picsum.photos/200/300', title: 'title', text: 'text' },
    { src: 'https://picsum.photos/200/300', title: 'title', text: 'text' },
    { src: 'https://picsum.photos/200/300', title: 'title', text: 'text' },
    { src: 'https://picsum.photos/200/300', title: 'title', text: 'text' },
    { src: 'https://picsum.photos/200/300', title: 'title', text: 'text' },
  ];
  return (
    <Layout>
      <Banner img={banner} text='Events' />
      <div className='content mx-4 flex flex-col justify-center'>
        <div className='body relative -top-1'>
          <p className='text-center text-3xl'>
            Ways to celebrate Lantern Festival
          </p>
          <p className='text-center mt-6 text-2xl'>
            From the comfort of your own home!
          </p>
          <p className='mx-14 mt-6 text-2xl'>
            Here are 12 events that you can do throughout the day to celebrate this important day in Chineaaaaaaaaaaase culture. We recommend you to do as many of them as possible, and have a great time.
            Also, if you don't like the image generated on the cards, you can just reload and a new image will appear.
          </p>
        </div>
        <Grid cards={cards} />
      </div>
    </Layout>
  );
}

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
            The Magical Chinese Lantern Festival
          </p>
          <p className='text-center mt-6 text-2xl'>
            From the comfort of your own home!
          </p>
          <p className='mx-14 mt-6 text-2xl'>
            Due to the Covid-19 pandemic, we will not be hosting our annoual
            celebrations online. Instead, we're having our completely free
            events online. Click the button above to learn more about our
            events, or click to learn more about the Chinese Lantern Festival.
          </p>
        </div>
        <Grid cards={cards} />
      </div>
    </Layout>
  );
}

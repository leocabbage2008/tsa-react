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
          <p>
            
          </p>
        </div>
        <Grid cards={cards} />
      </div>
    </Layout>
  );
}

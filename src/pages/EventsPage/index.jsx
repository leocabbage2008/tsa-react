import React from 'react';
import Layout from '../../components/Layout';
import './index.css';
import Banner from '../../components/Banner';
import banner from './banner.jpg';
import Grid from '../../components/Grid';
// event images
import tangyuan from './cardImages/TangYuan.jpg';
import riddle from './cardImages/Riddle.jpeg';
import lantern from './cardImages/Lantern.jpg';
import poems from './cardImages/Poems.jpg';
import festival from './cardImages/FestivalShow.jpg';
import Card from '../../components/Card';

export default function EventsPage() {
  const cards = [
    {
      src: riddle,
      title: 'Riddle Guessing',
      time: '1:00PM-2:00PM',
      text: 'Have fun guessing traditional lantern riddles, written by our team, specially adapted to the English language! Hard enough to be fun, but simple enough to be solved!',
    },
    {
      src: lantern,
      title: 'Lantern Making',
      time: '2:30PM-4:00PM',
      text: 'Learn how to make lanterns with people from China, following a easy process that anybody can do and will have fantastic results!',
    },
    {
      src: poems,
      title: 'Poems',
      time: '5:00PM-6:30PM',
      text: 'Learn about beautiful Asian poems with a famous Chinese poet, Da Niu. These are very ancient and famous poems, and are often taught as part of the school curriculum around the world.',
    },
    {
      src: festival,
      title: 'Lantern Festival Show',
      time: '7:00PM-10:00PM',
      text: "Watch dancers, comedians, singers and actors perform for the festivities, live from China! This marks the end of the holiday season, so it's very energetic.",
    },
  ];
  return (
    <Layout>
      <Banner img={banner} text='Events' />
      <div className='content mx-4 flex flex-col justify-center'>
        <div className='body relative -top-1'>
          <p className='text-center text-3xl'>
            Ways to celebrate Lantern Festival
          </p>
          <p className='mx-14 mt-6 text-2xl'>
            Here are events that you can do throughout the day to celebrate this
            important day in Chinese culture. We recommend doing as many as
            possible to have a great time, and to learn as much as you can about
            the Lantern Festival. All activities will be instructed by experts
            and be safely conducted to have a great experience.
          </p>
        </div>
        <div className='container my-12 mx-auto md:px-12'>
          <div className='flex flex-wrap -mx-1 lg:-mx-4 justify-center'>
            <Card
              src={tangyuan}
              title='Tang Yuan'
              time='10:00AM-12:00PM'
              className='my-1 px-0 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3'
            >
              During this 2 hour lesson, you will learn how to make the
              traditional Tang Yuan with world-renowned chef, Gordo Ramsee. We
              will be using{' '}
              <a className='link' href='/festival/recipes'>
                this
              </a>{' '}
              recipe.
            </Card>
            <Grid cards={cards} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

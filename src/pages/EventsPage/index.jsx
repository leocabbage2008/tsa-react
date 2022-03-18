import React from 'react';
import Layout from '../../components/Layout';
import './index.css';
import Banner from '../../components/Banner';
import banner from '../../images/bannerEventsPage.webp';
import Grid from '../../components/Grid';
// event images
import tangyuan from '../../images/cardImages/TangYuan.webp';
import riddle from '../../images/cardImages/Riddle.webp';
import lantern from '../../images/cardImages/Lantern.webp';
import poems from '../../images/cardImages/Poems.webp';
import festival from '../../images/cardImages/FestivalShow.webp';
import Card from '../../components/Card';
import { Helmet } from 'react-helmet';

export default function EventsPage() {
  const className = 'my-1 px-0 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5';
  const cards = [
    {
      src: riddle,
      title: 'Riddle Guessing',
      time: '1:00PM-2:00PM',
      text: 'Have fun guessing traditional lantern riddles, written by our team, specially adapted to English! Hard enough to be fun, but simple enough to be solved!',
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
      text: "Watch dancers, comedians, singers and actors perform for the festivities, live from China! This marks the end of the holiday season, so it's an very energetic event.",
    },
  ];
  return (
    <Layout>
      <Helmet>
        <title>Events</title>
      </Helmet>
      <Banner img={banner} text='Events' />
      <div className='content mx-4 flex flex-col justify-center'>
        <p className='text-center text-3xl'>
          Ways to celebrate Lantern Festival
        </p>
        <p className='mx-14 mt-6 text-2xl'>
          Here are events that you can do throughout the day to celebrate this
          important day in Chinese culture. We recommend doing as many as
          possible to have a great time, and to learn as much as you can about
          the Lantern Festival. All activities will be instructed by experts in
          order to have a great experience.
        </p>
        <div className='container my-12 mx-auto md:px-12'>
          <div className='flex flex-wrap -mx-1 lg:-mx-4 justify-center'>
            <Card
              src={tangyuan}
              title='Tang Yuan'
              time='10:00AM-12:00PM'
              className={className}
            >
              During this 2 hour lesson, you will learn how to make the
              traditional Tang Yuan with world-renowned chef, Gordo Ramsee. We
              will be using{' '}
              <a className='link' href='/festival/recipe'>
                this
              </a>{' '}
              recipe.
            </Card>
            <Grid cards={cards} className={className} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

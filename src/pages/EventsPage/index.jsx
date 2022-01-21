import React from "react";
import Layout from "../../components/Layout";
import "./index.css";
import Banner from "../../components/Banner";
import banner from "./banner.jpg";
import Grid from "../../components/Grid";
// event images
import tangyuan from "./Events Images/Tangyuan.jpg";

export default function EventsPage() {
  const cards = [
    //  tangyuan, riddles, lantern making, calligraphy, history
    {
      src: 'https://thewoksoflife.com/wp-content/uploads/2016/01/tang-yuan-3.jpg' /* placeholder */,
      title: 'Tangyuan Making',
      time: '10:00AM-12:00PM',
      text: 'During this 2 hour lesson, you will learn how to make the traditional Tangyuan with the world-renowned chef, Gordon Ramsay.',
    },
    {
      src: 'https://picsum.photos/200/300' /* placeholder */,
      title: 'Riddle Guessing',
      time: '1:00PM-2:00PM',
      text: 'Have fun guessing traditional lantern riddles, written by our team, specially adapted to the English language! Hard enough to be fun, but not to be frustrating.',
    },
    {
      src: 'https://picsum.photos/200/300' /* placeholder */,
      title: 'Lantern Making',
      time: '2:30PM-4:00PM',
      text: 'Learn how to make lanterns with people from China. An easy process that anybody can do and still have fantastic results!',
    },
    {
      src: 'https://picsum.photos/200/300' /* placeholder */,
      title: 'Poems and Art',
      time: '5:00PM-6:30PM',
      text: 'Learn about beautiful Asian arts and poems with a Chinese poet, Da Niu. These are very ancient poems and are taught to children as young as 6 years old.',
    },
    {
      src: 'https://picsum.photos/200/300' /* placeholder */,
      title: 'Lantern Festival Show',
      time: '7:00PM-10:00PM',
      text: "Watch dancers, comedians, singers and actors perform for the festivities. This marks the end of the holiday season so it's very energitic",
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
            important day in Chinese culture. We recommend you do as many of
            them as possible to have a great time. All activities will be
            instructed by experts.
          </p>
        </div>
        <Grid cards={cards} />
      </div>
    </Layout>
  );
}

import React from 'react';
import Layout from '../../components/Layout';
import './index.css';
export default function AboutFestivalPage() {
  return (
    <Layout className='about'>
      <h1 className='header text-xl my-2 font-sans text-center font-bold'>
        Lantern Festival
      </h1>
      <p>
        The Lantern Festival is a festival that's been celebrated for over 2000
        years.
      </p>
      <p>
        Starting in China as early as 206 BCE, peasants and royalty alike have
        been sending lanterns skywards for good luck. There are many saying as
        to how this tradition started, but the most common saying is that the
        Emperor Ming of the Han dynasty noticed that Buddhist monks would light
        lanterns in temples on the 15th day of the first lunar month. Because of
        this, he ordered that all households, temples, and palaces light
        lanterns on that evening. Eventually, everyone got used to this and it
        became a folk custom.
      </p>
      <p>
        Another saying says that it was a time to worship Taiyi, the God of
        Heaven in ancient Chinese mythology. It was said that he controlled 16
        dragons and he decided when to bring famines and diseases upon human
        beings. Starting from Qin Shi Huang, the first emperor of China, all the
        emperors ordered ornate festivals in order to convince Taiyi to bring
        favorable weather and good fortunes. Emperor Wu of the Han dynasty
        delivered special attention towards this event. In 104 BCE, he declared
        that it was on of the most important celebrations and the ceremony would
        last throughout the night.
      </p>
      <p></p>
      <br />
    </Layout>
  );
}

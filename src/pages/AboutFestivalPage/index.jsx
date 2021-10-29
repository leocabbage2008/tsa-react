import React from 'react';
import Layout from '../../components/Layout';
import './index.css';
export default function AboutFestivalPage() {
  return (
    <Layout>
      <h1 className='header text-xl my-2 font-sans'>Lantern Festival </h1>
      <p>
      <h2>The Lantern Festival is a festival that's been celebrated for over 2000 years.</h2>
      <br />
      Starting in China in 358 BCE, peasants and royalty alike have been
      sending lanterns skywards for good luck. There are many saying as to how
      this tradition started, but the most common saying is that the Emperor
      Mig of the Han dynasty noticed that Buddhist monks would light lanterns
      in temples on the 15th day of the first lunar month. Because of this, he
      ordered that all households, temples, and palaces light lanterns on that
      evening. Eventually, everyone got used to this and it became a folk
      custom.
      <br />{' '}
      The Lantern Festival is a festival that's been celebrated for over 2000 years.
      </p>
    </Layout>
  );
}

import React from 'react';
import Layout from '../../components/Layout';
import banner from '../../empty.webp';
import Banner from '../../components/Banner';

export default function DetailedEventsPage() {
  return (
    <Layout>
      <Banner img={banner} text='About Festival' />
      <p>Test</p>
    </Layout>
  );
}

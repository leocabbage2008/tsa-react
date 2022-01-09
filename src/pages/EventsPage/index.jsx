import React from 'react';
import Layout from '../../components/Layout';
// import Banner from '../../components/Banner';

export default function EventsPage() {
  return (
    <Layout>
      {/* <Banner img={banner} text='Lantern Festival' /> */}
      <div className='content mx-4 flex flex-col justify-center'>
        <div className='body relative -top-1'>
          <p className='text-center mx-72 text-3xl'>
            The Magical Chinese Lantern Festival
          </p>
          <p className='text-center mx-72 mt-6 text-2xl'>
            From the comfort of your own home!
          </p>
          <p className='mx-14 mt-6 text-2xl'>
            Due to the Covid-19 pandemic, we will not be hosting our annoual
            celebrations online. Instead, we're having our completely free
            events online. Click the button above to learn more about our
            events, or click to learn more about the Chinese Lantern Festival.
          </p>
        </div>
      </div>
    </Layout>
  );
}

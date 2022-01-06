import React from 'react';
import Layout from '../../components/Layout';

export default function TraditionsPage() {
  return (
    <Layout>
      {/* <Banner img={banner} text='Lantern Festival' /> */}
      <div className='content mx-4 flex flex-col justify-center'>
        <div className='body relative -top-1'>
          <p className='text-center mx-72 text-3xl'>Events!!!</p>
          <p className='text-center mx-72 mt-6 text-2xl'>
            buy tickets now and stuff!
          </p>
          <p className='mx-14 mt-6 text-2xl'>Events</p>
        </div>
      </div>
    </Layout>
  );
}

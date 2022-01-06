import React from 'react';
import Layout from '../../components/Layout';
import './index.css';
import banner from './banner.jpg';
import Banner from '../../components/Banner';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <Layout>
      <Banner img={banner} text='Lantern Festival' />
      <div className='content mx-4 flex flex-col justify-center'>
        <Link
          className="z-10 btn btn-danger mx-auto relative -top-8 py-3 px-5 text-xl"
          to="/events"
        >
          See Events Here
        </Link>
        <hr className="relative -top-20 z-0"/>
        <div className="body relative -top-3">
          <p className="text-center text-3xl">
            The Magical Chinese Lantern Festival...
          </p>
          <p className="text-center mt-6 text-2xl">
            From the comfort of your own home!
          </p>
          <p className='mx-14 mt-6 text-2xl'>
            Due to the Covid-19 pandemic, we will not be hosting our annoual
            celebrations online. Instead, we're having our completely free
            events online. Click the button above to learn more about our
            events, or click{' '}
            <u>
              <Link to='/festival/about' className='link-default'>
                here
              </Link>
            </u>{' '}
            to learn more about the Chinese Lantern Festival.
          </p>
        </div>
      </div>
    </Layout>
  );
}

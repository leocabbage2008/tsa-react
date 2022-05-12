import React from 'react';
import Layout from '../../components/Layout';
import banner from '../../images/bannerAboutUs.webp';
import Banner from '../../components/Banner';

export default function AboutUsPage() {
  return (
    <Layout title='About Us'>
      <Banner img={banner} text='About Us' />
      <div className='content px-4'>
        <p className='text-center text-2xl'>Who Are We?</p>
        <p className='text-center text-xl mt-1'>
          We are Pennsylvania TSAs' Website Design 2570 Team 1, with
          members 2570-668970, 2570-765690 and 2570-765691. We chose the Lantern Festival
          as our theme because it aims to promote reconciliation, peace, and
          forgiveness. It's also something that we personally have celebrated
          before, and we love how energetic and beautiful the celebrations are.
        </p>
        <hr />
        <p className='text-center text-xl mt-1'>
          We used React, Bootstrap, Tailwind CSS, and HeadlessUI components for
          the content, and for the fonts we used Google Fonts. For more detailed
          citations check{' '}
          <a className='link' href='/sources'>
            here.
          </a>
        </p>
      </div>
    </Layout>
  );
}

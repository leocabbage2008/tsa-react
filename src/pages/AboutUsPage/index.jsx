import React from 'react';
import Layout from '../../components/Layout';

export default function AboutUsPage() {
  return (
    <Layout>
      <img className='relative w-full' src='https://media.istockphoto.com/photos/rows-of-colorful-glowing-red-chinese-lanterns-picture-id1298648314?b=1&k=20&m=1298648314&s=170667a&w=0&h=04F0GFT6MtY57sdx7EIjYs7vcB9UrMCV_2b-3LYnt0w='/>
      <h1 className='text-3xl font-bold text-center py-4'>About Us Page</h1>
      <h1> We used Bootstrap, Tailwind, and React in this project.</h1>
      <h1>We are from SCASD, and built this project for TSA.</h1>
    </Layout>
  );
}

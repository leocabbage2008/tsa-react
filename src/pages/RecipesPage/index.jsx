import React from 'react';
import Layout from '../../components/Layout';
import Recipe from '../../components/Recipe';
import './index.css';

export default function RecipesPage() {
  const ingredients = [
    { title: 'e', message: 'e' },
    { title: 'ew', message: 'ur ew' },
    { title: 'cheese', message: 'obama care' },
  ];
  return (
    <Layout>
      <div className='content px-4'>
        <h1 className='pb-20'>
          Today we're going to be learning how to make the traditional Yuan
          Xiao. Yuan Xiao are traditional Lantern Festival dish usually eaten in the morning, they are a delicious rice ball filled with sweet stuffing. 
        </h1>
        <h1>Ingredients:</h1>
        <Recipe ingredients={ingredients} />
      </div>
    </Layout>
  );
}

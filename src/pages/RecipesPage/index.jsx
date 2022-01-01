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
        <h1>Ingredients:</h1>
        <Recipe ingredients={ingredients} />
      </div>
    </Layout>
  );
}

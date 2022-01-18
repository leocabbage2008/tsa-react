import React from 'react';
import Layout from '../../components/Layout';
import Recipe from '../../components/Recipe';
import Directions from '../../components/Directions';
import Banner from '../../components/Banner';
import banner from './banner.jpg';

export default function RecipesPage() {
  const ingredients = [
    { ingredient: '2 oz. roasted black sesame seeds' },
    { ingredient: '3 oz. caster sugar' },
    { ingredient: '6 tablespoons butte' },
    { ingredient: '1 cup sweet rice flour' },
    { ingredient: '1/2 cup warm water' },
  ];
  const directions = [
    { direction: 'bruh' },
    { direction: 'bruh' },
    { direction: 'bruh' },
    { direction: 'bruh' },
    { direction: 'bruh' },
  ];
  return (
    <Layout>
      <Banner img={banner} text='Recipes' />
      <div className='content px-4'>
        <h1 className='text-center text-xl'>
          Today we're going to be learning how to make the Chinese dish, Yuan
          Xiao. Yuan Xiao is a traditional Lantern Festival dish usually eaten
          as a breakfast meal. They are a delicious rice ball usually filled
          with sweet black sesame seeds.
        </h1>
        <h1>Ingredients:</h1>
        <Recipe ingredients={ingredients} />
        <Directions directions={directions} />
      </div>
    </Layout>
  );
}

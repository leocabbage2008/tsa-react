import React from 'react';
import Layout from '../../components/Layout';
import Recipe from '../../components/Recipe';
import Directions from '../../components/Directions';
import Banner from '../../components/Banner';
import banner from '../../images/bannerRecipes.webp';
import ContentGrid from '../../components/ContentGrid';

export default function RecipesPage() {
  const ingredients = [
    { ingredient: '2 oz. roasted black sesame seeds' },
    { ingredient: '3 oz. granulated sugar' },
    { ingredient: '6 tablespoons butter' },
    { ingredient: '1 cup sweet rice flour' },
    { ingredient: '1/2 cup warm water' },
  ];
  const directions = [
    {
      direction:
        'In a food blender, finely grind all the sesame seeds, then add the sugar and mix them together in the blender.',
    },
    {
      direction:
        'Add the butter and pulse for 10 seconds at a time until the mixture is mixed well. Scoop everything into a bowl and put in refrigerator for about 30 minutes.',
    },
    {
      direction:
        'While the mixture is cooling, we will make the dough. First, put the sweet rice flour into a mixing bowl. Slowly add in warm water while stirring until smooth, then cover with a damp towel.',
    },
    {
      direction:
        "Now boil some water, and take a piece of dough around 1 inch in diameter. Boil it in the water until it floats and mix it into the rest of the dough until it's soft and smooth.",
    },
    {
      direction:
        'Split the dough into 12 pieces and cover with a damp paper towel. Now take out the filling, and roll it into marble sized balls. Take a dough ball and flatten it into a circle, and then put a scoop of filling in the center.',
    },
    {
      direction:
        "Close the dough over the filling and roll the ball around until they're smooth and round. Repeat for all of them. Cover the remaining filling and return them to the refrigerator.",
    },
    {
      direction:
        'Bring a pot of water to boil and add the sesame balls in. Immediately stir them prevent sticking, and once the water is boiling again, add a half cup of water to the pot. Repeat this two more times.',
    },
    { direction: 'Scoop the balls out and place them into a bowl. Enjoy!' },
  ];
  return (
    <Layout title='Recipe'>
      <Banner img={banner} text='Recipe' />
      <h2 className='text-center font-bold'>Learn how to make Tang Yuan!</h2>
      <div className='content px-5'>
        <h1 className='text-center text-xl'>
          Today we're going to be learning how to make the Chinese dish, Yuan
          Xiao. Yuan Xiao is a traditional Lantern Festival dish typically eaten
          as a breakfast meal. They are a delicious rice ball usually filled
          with sweet black sesame seeds.
        </h1>
        <h1 className='text-center text-xl'>
          If you don't have the time to make them from scratch, or you can't
          find the ingredients, you can always go to your local Asian market to
          buy some frozen ones and then just skip to step 7.
        </h1>
        <Recipe ingredients={ingredients} />
        <Directions directions={directions} />
      </div>
    </Layout>
  );
}

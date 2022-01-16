import React from 'react';
import Cite from '../../components/Cite';
import Layout from '../../components/Layout';
import Banner from '../../components/Banner';
import banner from './banner.jpeg';

export default function SourcesPage() {
  const sources = [
    {
      title: 'Homepage Banner Source',
      citeSource:
        'https://commons.wikimedia.org/wiki/File:Chinese_New_Year_Celebrations_with_Lanterns_in_Singapore.jpg',
      author: 'Dileep Kaluaratchie',
      licenseLink: 'https://creativecommons.org/licenses/by-sa/4.0',
      licenseName: 'CC BY-SA 4.0',
      from: 'Wikimedia Commons',
    },
    {
      title: 'About Us Page Banner Source',
      citeSource:
        'https://commons.wikimedia.org/wiki/File:Celebration_Chinese_Lantern_Festival.jpg',
      author: 'Tookapic',
      licenseLink:
        'https://creativecommons.org/share-your-work/public-domain/cc0/',
      licenseName: 'CC0',
      from: 'Wikimedia Commons',
    },
    {
      title: 'Events Page Banner Source',
      citeSource:
        'https://commons.wikimedia.org/wiki/File:China-Shanghai-YuGarden-the_Lantern_Festival-2012_1828.JPG',
      author: 'North Sea Deamer',
      licenseLink: 'https://creativecommons.org/licenses/by-sa/3.0',
      licenseName: 'CC BY-SA 3.0',
      from: 'Wikimedia Commons',
    },
    {
      title: 'About Festival Page Banner Source',
      citeSource:
        'https://commons.wikimedia.org/wiki/File:China-Shanghai-YuGarden-the_Lantern_Festival-2012_1824.JPG',
      author: 'North Sea Deamer',
      licenseLink: 'https://creativecommons.org/licenses/by-sa/3.0',
      licenseName: 'CC BY-SA 3.0',
      from: 'Wikimedia Commons',
    },
    {
      title: 'Recipe Page Banner Source',
      citeSource: 'https://commons.wikimedia.org/wiki/File:Lai_Tang_Yuan.jpg',
      author: 'ZhengZhou',
      licenseLink: 'https://creativecommons.org/licenses/by-sa/4.0',
      licenseName: 'CC BY-SA 4.0',
      from: 'Wikimedia Commons',
    },
    {
      title: 'Sources Page Banner Source',
      citeSource:
        'https://commons.wikimedia.org/wiki/File:Chinese-lanterns-1394958.jpg',
      author: 'Wiroj',
      licenseLink:
        'https://creativecommons.org/share-your-work/public-domain/cc0/',
      licenseName: 'CC0',
      from: 'Wikimedia Commons',
    },
  ];
  return (
    <Layout>
      <Banner img={banner} text='Sources' />
      <div className='content mx-4 flex flex-col justify-center'>
        <Cite sources={sources} />
      </div>
    </Layout>
  );
}

import React from 'react';
import Cite from '../../components/Cite';
import Layout from '../../components/Layout';
import Banner from '../../components/Banner';
import banner from '../../images/bannerSources.webp';

export default function SourcesPage() {
  const sources = [
    {
      title: 'Information Source',
      citeSource:
        'https://www.chinahighlights.com/festivals/lantern-festival.htm',
      author: 'Cindy',
      from: 'China Highlights',
    },
    {
      title: 'Home Card 1 Source',
      citeSource: 'https://unsplash.com/photos/ax3lbQfdXP0',
      author: 'Samantha Borges',
      from: 'Unsplash',
    },
    {
      title: 'Home Card 2 Source',
      citeSource: 'https://unsplash.com/photos/wwYvNI94mac',
      author: 'Sandra Seitamaa',
      from: 'Unsplash',
    },
    {
      title: 'Home Banner Source',
      citeSource:
        'https://medium.com/@daviducheokafor/to-live-or-to-die-9ddb070623e8',
      author: 'David U. Okafor',
      from: 'Medium',
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
    {
      title: 'Recipe Source',
      citeSource: 'https://thewoksoflife.com/tang-yuan-recipe/',
      author: 'JUDY',
      from: 'The Woks Of Life',
    },
    {
      title: 'Logo Source',
      citeSource:
        'https://flyclipart.com/download-chinese-new-year-lantern-png-clipart-paper-lantern-lantern-clipart-915671',
      author: 'FlyClipart',
      licenseLink: 'https://creativecommons.org/licenses/by-nc/4.0/',
      licenseName: 'CC BY-NC 4.0',
      from: 'FlyClipart (edited using GIMP)',
    },
    {
      title: 'Font Source',
      citeSource: 'https://fonts.google.com/specimen/Nunito',
      author: 'Vernon Adams, Cyreal, Jacques Le Bailly',
      licenseLink:
        'https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL',
      licenseName: 'SIL Open Font License',
      from: 'Google Fonts',
    },
    {
      title: 'Tang Yuan Event Image Source',
      citeSource:
        'https://thewoksoflife.com/wp-content/uploads/2016/01/tang-yuan-3.jpg',
      author: 'Jleung',
      from: 'The Woks of Life',
    },
    {
      title: 'Riddle Event Image Source',
      citeSource:
        'https://commons.wikimedia.org/wiki/File:Chinese-lanterns-1394958.jpg',
      author: 'Wiroj',
      licenseLink:
        'https://creativecommons.org/share-your-work/public-domain/cc0/',
      licenseName: 'CC0',
      from: 'Wikimedia Commons (edited using Gimp)',
    },
    {
      title: 'Lantern Event Image Source',
      citeSource:
        'https://commons.wikimedia.org/wiki/File:Celebration_Chinese_Lantern_Festival.jpg',
      author: 'Tookapic',
      licenseLink:
        'https://creativecommons.org/share-your-work/public-domain/cc0/',
      licenseName: 'CC0',
      from: 'Wikimedia Commons (edited using Gimp)',
    },
    {
      title: 'Poem Event Image Source',
      citeSource:
        'https://commons.wikimedia.org/wiki/File:Chen_Hongshou_-_Paintings_after_Ancient_Masters-_Calligraphy_-_1979.27.2.22_-_Cleveland_Museum_of_Art.jpg',
      author: 'Chen Hongshou',
      licenseLink:
        'https://creativecommons.org/share-your-work/public-domain/cc0/',
      licenseName: 'CC0',
      from: 'Wikimedia Commons (edited using Gimp)',
    },
  ];
  return (
    <Layout title='Sources'>
      <Banner img={banner} text='Sources' />
      <div className='content mx-4 flex flex-col justify-center'>
        <Cite sources={sources} />
      </div>
    </Layout>
  );
}

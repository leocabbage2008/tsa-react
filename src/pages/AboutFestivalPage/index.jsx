import React from 'react';
import Layout from '../../components/Layout';
import Banner from '../../components/Banner';
import banner from '../../images/bannerAboutFestival.webp';
import ContentGrid from '../../components/ContentGrid';

export default function AboutFestivalPage() {
  return (
    <Layout className='about' title='About Festival'>
      <div className='p-2'>
        <Banner img={banner} text='About Festival' />
        <ContentGrid>
          <div className='content'>
            <h2 className='text-center font-bold'>Experience the culture!</h2>

            <p className='text-xl'>
              The Lantern Festival has been celebrated for 2000 years on the
              last day of the 15 days of Chinese New Year celebrations. The
              official date is January 15th on the lunar calendar, but the date
              varies on the solar calendars we commonly use.
            </p>
            <hr />

            <p className='text-xl'>
              Starting in China as early as 206 BCE, peasants and royalties
              alike have been sending lanterns skywards for good luck. There are
              many saying as to how this tradition started, but the most common
              saying is that the Emperor Ming of the Han dynasty noticed that
              Buddhist monks would light lanterns in temples on the 15th day of
              the first lunar month. Because of this, he ordered that all
              households, temples, and palaces light lanterns on that evening.
              This eventually integrated itself into Chinese tradition.
            </p>
            <hr />

            <p className='text-xl'>
              Another saying says that it was a time to worship Taiyi, the God
              of Heaven in ancient Chinese mythology. It was said that he
              controlled the 16 dragons, and he decided when to bring famines
              and diseases upon human beings. Starting from Qin Shi Huang, the
              first emperor of China, all the emperors ordered ornate festivals
              in order to convince Taiyi to bring favorable weather and good
              fortunes. Emperor Wu of the Han dynasty delivered special
              attention towards this event. In 104 BCE, he declared that it was
              one of the most important celebrations, and that the ceremony
              would last throughout the night.
            </p>
            <hr />

            <p className='text-xl'>
              Now, people celebrate the Lantern Festival by lighting and
              watching lanterns, guessing lantern riddles, and eating Yuan Xiao
              which you will learn to make on this website.
            </p>
          </div>
        </ContentGrid>
      </div>
    </Layout>
  );
}

import React from "react";
import Layout from "../../components/Layout";
import "./index.css";
import Banner from "../../components/Banner";
import banner from "../../images/bannerAboutFestival.webp";

export default function AboutFestivalPage() {
  return (
    <Layout className="about">
      <div className="p-2">
        <Banner img={banner} text="About Festival" />
        <div className="content px-4">
          <p className="text-xl">
            The Lantern Festival has been celebrated for 2000 years on the last
            day of the 15 days of Chinese New Year celebrations, the official
            date is January 15th on the lunar calendar.
          </p>
          <hr />

          <p className="text-xl">
            Starting in China as early as 206 BCE, peasants and royalties alike
            have been sending lanterns skywards for good luck. There are many
            saying as to how this tradition started, but the most common saying
            is that the Emperor Ming of the Han dynasty noticed that Buddhist
            monks would light lanterns in temples on the 15th day of the first
            lunar month. Because of this, he ordered that all households,
            temples, and palaces light lanterns on that evening. Eventually,
            everyone got used to this and it became a folk custom.
          </p>
          <hr />

          <p className="text-xl">
            Another saying says that it was a time to worship Taiyi, the God of
            Heaven in ancient Chinese mythology. It was said that he controlled
            16 dragons and he decided when to bring famines and diseases upon
            human beings. Starting from Qin Shi Huang, the first emperor of
            China, all the emperors ordered ornate festivals in order to
            convince Taiyi to bring favorable weather and good fortunes. Emperor
            Wu of the Han dynasty delivered special attention towards this
            event. In 104 BCE, he declared that it was on of the most important
            celebrations, and the ceremony would last throughout the night.
          </p>
          <hr />

          <p className="text-xl">
            Now, people celebrate the Lantern Festival by lighting and watching
            lanterns, guessing lantern riddles, and eating Yuan Xiao, known as
            Glutinous Rice Balls in English. They are traditionally filled with
            sesame seeds and you can learn to make them{" "}
            <a className="link" href="/festival/recipes">
              here.
            </a>{" "}
            They are very delicious and an good source of calcium and manganese.
            They are traditionally sold in vendors on the streets in or near the
            Lantern Festival.
          </p>
        </div>
      </div>
    </Layout>
  );
}

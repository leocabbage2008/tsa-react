import React from "react";
import Layout from "../../components/Layout";
import "./index.css";
import Banner from "../../components/Banner";
import banner from "./banner.jpg";
import Grid from "../../components/Grid";

export default function EventsPage() {
  const cards = [
    //  tangyuan, riddles, lantern making, calligraphy, history
    {
      src: "https://picsum.photos/200/300" /* placeholder */,
      title: "Tangyuan Making",
      text: "During this 2 hour lesson, you will learn how to make the traditional Tangyuan with the world-renowned chef, Gordon Ramsay.",
    },
    {
      src: "https://picsum.photos/200/300" /* placeholder */,
      title: "Riddle Guessing",
      text: "Have fun guessing traditional lantern riddles, written by our team, specially adapted to the English language!",
    },
    {
      src: "https://picsum.photos/200/300" /* placeholder */,
      title: "Lantern Making",
      text: "Learn how to make a traditional lantern following a traditional orgami recipe.",
    },
    {
      src: "https://picsum.photos/200/300" /* placeholder */,
      title: "Asian History",
      text: "Learn the history of the Asian continent with a Harvard history professor!",
    },
    {
      src: "https://picsum.photos/200/300" /* placeholder */,
      title: "Asian Arts",
      text: "Learn about beautiful Asian arts and poems with a Harvard art history professor, Eugene Wang.",
    },
  ];
  return (
    <Layout>
      <Banner img={banner} text="Events" />
      <div className="content mx-4 flex flex-col justify-center">
        <div className="body relative -top-1">
          <p className="text-center text-3xl">
            Ways to celebrate Lantern Festival
          </p>
          <p className="text-center mt-6 text-2xl">
            From the comfort of your own home!
          </p>
          <p className="mx-14 mt-6 text-2xl">
            Here are 12 events that you can do throughout the day to celebrate
            this important day in Chinese culture. We recommend you do as many
            of them as possible, and have a great time.
          </p>
        </div>
        <Grid cards={cards} />
      </div>
    </Layout>
  );
}

import React from "react";
import Layout from "../../components/Layout";
import "./index.css";
import Banner from "../../components/Banner";
import banner from "./banner.jpg";
import Grid from "../../components/Grid";
// event images
import tangyuan from "./Events Images/Tangyuan.jpg";

export default function EventsPage() {
  const cards = [
    {
      src: tangyuan,
      title: "Tangyuan (10:00 - 11:45)",
      text: "Learn how to make the traditional Tangyuan, following a recipe ",
    },
    { src: "https://picsum.photos/200/300", title: "title", text: "text" },
    { src: "https://picsum.photos/200/300", title: "title", text: "text" },
    { src: "https://picsum.photos/200/300", title: "title", text: "text" },
    { src: "https://picsum.photos/200/300", title: "title", text: "text" },
    { src: "https://picsum.photos/200/300", title: "title", text: "text" },
    { src: "https://picsum.photos/200/300", title: "title", text: "text" },
    { src: "https://picsum.photos/200/300", title: "title", text: "text" },
    { src: "https://picsum.photos/200/300", title: "title", text: "text" },
    { src: "https://picsum.photos/200/300", title: "title", text: "text" },
    { src: "https://picsum.photos/200/300", title: "title", text: "text" },
    { src: "https://picsum.photos/200/300", title: "title", text: "text" },
  ];
  return (
    <Layout>
      <Banner img={banner} text="Events" />
      <div className="content mx-4 flex flex-col justify-center">
        <Grid cards={cards} />
      </div>
    </Layout>
  );
}

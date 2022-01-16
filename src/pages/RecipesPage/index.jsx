import React from "react";
import Layout from "../../components/Layout";
import Recipe from "../../components/Recipe";
import "./index.css";
import Banner from "../../components/Banner";
import banner from "./banner.jpg";

export default function RecipesPage() {
  const ingredients = [
    { title: "e", message: "e" },
    { title: "ew", message: "ur ew" },
    { title: "cheese", message: "obama care" },
  ];
  return (
    <Layout>
      <Banner img={banner} text="Recipes" />
      <div className="content px-4">
        <h1 className="text-center text-xl">
          Today we're going to be learning how to make the Chinese dish, Yuan
          Xiao. Yuan Xiao is a traditional Lantern Festival dish usually eaten
          as a breakfast meal. They are a delicious rice ball usually filled
          with sweet stuffing.
        </h1>
        <h1>Ingredients:</h1>
        <Recipe ingredients={ingredients} />
      </div>
    </Layout>
  );
}

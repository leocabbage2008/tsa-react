import React from "react";
import Layout from "../../components/Layout";
import "./index.css";
import banner from "./banner.jpg";
import Banner from "../../components/Banner";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Layout>
      <Banner img={banner} text="Lantern Festival" />
      <div className="content mx-4 flex flex-col justify-center">
        <Link
          className="btn btn-danger mx-auto relative -top-8 py-3 px-5 text-xl"
          to="/events"
        >
          See Events Here
        </Link>
        <div className="body relative -top-3">
          <hr />
          <p className="text-center mx-72 text-3xl">
            The Magical Chinese Lantern Festival...
          </p>
          <p className="text-center mx-72 mt-6 text-2xl">
            From the comfort of your own home!
          </p>
        </div>
      </div>
    </Layout>
  );
}

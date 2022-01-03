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
          Get Tickets Here
        </Link>
        <div className="body relative -top-3">
          <hr />
          <p className="text-center text-xl">
            The Lantern Festival has been around for over 2,000 years.
          </p>
          <p className="text-center text-xl">
            It's been an important part of Asian culture.
          </p>
          <p className="text-center text-xl">
            Due to the Coronavirus pandemic, we will no longer be holding our
            annual celebrations in-person.
          </p>
          <p className="text-center text-xl">
            Instead, tickets will be available{" "}
          </p>
        </div>
      </div>
    </Layout>
  );
}

import React from "react";
import Layout from "../../components/Layout";
import banner from "./banner.jpg";
import Banner from "../../components/Banner";

export default function AboutUsPage() {
  return (
    <Layout>
      <Banner img={banner} text="About Us" />
      <div className="content px-4">
        <p className="text-center text-2xl">Who Are We?</p>
        <p className="text-center text-xl mt-1">
          We are Pennsylvania Region 8 TSA's Website Design Team 1023-901, with
          members 1023-013, 1023-011 and 1023-033. We chose the Lantern Festival
          as our theme because it aims to promote reconciliation, peace, and
          forgiveness.
        </p>
        <hr />
        <p className="text-center text-2xl">Sources</p>
        <p className="text-center text-xl mt-1">[import from google drive]</p>
      </div>
    </Layout>
  );
}

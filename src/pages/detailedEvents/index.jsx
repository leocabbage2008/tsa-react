import React from "react";
import Layout from "../../components/Layout";
import banner from "../../empty.webp";
import Banner from "../../components/Banner";

export default function DetailedEvents() {
  return (
    <Layout>
      <Banner img={banner} text="Detailed Events" />
      <div className="content px-4">
        <p className="text-center text-2xl">Test</p>
        <p className="text-center text-xl mt-1">Yes</p>
      </div>
    </Layout>
  );
}

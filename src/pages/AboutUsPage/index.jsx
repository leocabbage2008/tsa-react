import React from "react";
import Layout from "../../components/Layout";
import banner from "../../images/bannerAboutUs.webp";
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
          forgiveness. It's also something that we personally have celebrated
          before and we love how energetic and beautiful the celebrations are.
        </p>
        <hr />
        <p className="text-center text-xl mt-1">
          We used React, Bootstrap, Tailwindcss, HeadlessUI and Tailwind
          components for the content, and for the fonts we used Google Fonts.
          For more detailed citations check{" "}
          <a className="link" href="/sources">
            here.
          </a>
        </p>
      </div>
    </Layout>
  );
}

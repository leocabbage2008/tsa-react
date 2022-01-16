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
        <p className="text-center text-xl mt-1">
          Homepage Banner Source:{" "}
          <a href="https://commons.wikimedia.org/wiki/File:Chinese_New_Year_Celebrations_with_Lanterns_in_Singapore.jpg">
            Dileep Kaluaratchie
          </a>
          ,{" "}
          <a href="https://creativecommons.org/licenses/by-sa/4.0">
            CC BY-SA 4.0
          </a>
          , via Wikimedia Commons
        </p>
        <p className="text-center text-xl mt-1">
          About Us Page Banner Source:{" "}
          <a href="https://commons.wikimedia.org/wiki/File:Celebration_Chinese_Lantern_Festival.jpg">
            tookapic
          </a>
          , CC0, via Wikimedia Commons
        </p>
        <p className="text-center text-xl mt-1">
          Events Page Banner Source:{" "}
          <a href="https://commons.wikimedia.org/wiki/File:China-Shanghai-YuGarden-the_Lantern_Festival-2012_1828.JPG">
            North sea deamer
          </a>
          ,{" "}
          <a href="https://creativecommons.org/licenses/by-sa/3.0">
            CC BY-SA 3.0
          </a>
          , via Wikimedia Commons
        </p>
        <p className="text-center text-xl mt-1">
          About Festival Page Banner Source:{" "}
          <a href="https://commons.wikimedia.org/wiki/File:China-Shanghai-YuGarden-the_Lantern_Festival-2012_1824.JPG">
            North sea deamer
          </a>
          ,{" "}
          <a href="https://creativecommons.org/licenses/by-sa/3.0">
            CC BY-SA 3.0
          </a>
          , via Wikimedia Commons
        </p>
        <p className="text-center text-xl mt-1">
          Recipe Page Banner Source:{" "}
          <a href="https://commons.wikimedia.org/wiki/File:Lai_Tang_Yuan.jpg">
            ZhengZhou
          </a>
          ,{" "}
          <a href="https://creativecommons.org/licenses/by-sa/4.0">
            CC BY-SA 4.0
          </a>
          , via Wikimedia Commons
        </p>
      </div>
    </Layout>
  );
}

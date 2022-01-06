import React from "react";
import "./index.css";

function Banner({ img, text }) {
  return (
    <div className="p-2 mt-0.5 relative h-auto">
      <img
        className="filter object-cover blur-sm vh w-full text-center"
        src={img}
        alt="banner"
      />
      <p className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white font-semibold centered outline banner-head">
        {text}
      </p>
    </div>
  );
}

export default Banner;

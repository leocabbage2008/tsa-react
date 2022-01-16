import React from "react";
import Layout from "../../components/Layout";
import "./index.css";
// import Banner from '../../components/Banner';

export default function EventsPage() {
  return (
    <Layout>
      {/* <Banner img={banner} text='Lantern Festival' /> */}
      <div className="content mx-4 flex flex-col justify-center">
        <div className="body relative -top-1">
          <p className="text-center mx-72 text-3xl">
            The Magical Chinese Lantern Festival
          </p>
          <p className="text-center mx-72 mt-6 text-2xl">
            From the comfort of your own home!
          </p>
          <p className="mx-14 mt-6 text-2xl">
            Due to the Covid-19 pandemic, we will not be hosting our annoual
            celebrations online. Instead, we're having our completely free
            events online. Click the button above to learn more about our
            events, or click to learn more about the Chinese Lantern Festival.
          </p>
        </div>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none">
            <h2 className="accordion-header mb-0" id="flush-headingOne">
              <button
                className="accordion-button
      relative
      flex
      items-center
      w-full
      py-4
      px-5
      text-base text-gray-800 text-left
      transition
      focus:outline-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse border-0 collapse show"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body py-4 px-5">test</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

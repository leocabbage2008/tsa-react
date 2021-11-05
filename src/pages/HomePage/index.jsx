import React from 'react';
import Layout from '../../components/Layout';
import './index.css';

export default function HomePage() {
  return (
    <Layout>
      <div className="img-div"></div>
        <div className="inner-div">
          <h1 className="header text-xl my-2 font-sans">Lantern Festival</h1>
        </div>
    </Layout>
  );
}

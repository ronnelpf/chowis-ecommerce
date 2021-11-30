import React from 'react';
import Head from 'next/head';
import Root from './Root';
import Footer2 from './Footer2';

const TemplatePage = ({ page: data }) => (
  <Root>
    <Head>
      <title>commerce</title>
    </Head>
    <div className="py-5 my-5 text-center">
      <h4 className="mt-4">{ data.message }</h4>
    </div>
    <Footer2 />
  </Root>
)

export default TemplatePage;
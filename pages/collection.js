import React from "react";
import Head from "next/head";
import Root from "../components/common/Root";
import ExploreBanner from "../components/productAssets/ExploreBanner";
import Collections from "../components/collections/Collections";
import SocialMedia from "../components/common/SocialMedia";
import Footer2 from "../components/common/Footer2";

const Home = () => (
  <Root>
    <Head>
      <title>CHOWIS | Products</title>
    </Head>
    <Collections />
    {/* <ExploreBanner />
    <SocialMedia /> */}
    <Footer2 />
  </Root>
);

export default Home;

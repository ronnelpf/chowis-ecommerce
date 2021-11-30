import React from "react";
import Head from "next/head";
import Root from "../components/common/Root";
import Footer2 from "../components/common/Footer2";
import SocialMedia from "../components/common/SocialMedia";
import ExploreBanner from "../components/productAssets/ExploreBanner";
import HeroSection from "../components/homepage/HeroSection";
import HomeBanner from "../components/homepage/HomeBanner";
import CategoryBanner from "../components/homepage/CategoryBanner";
import ProductsBanner from "../components/homepage/ProductsBanner";

const Home = () => (
  <Root transparentHeader={true}>
    <Head>
      <title>CHOWIS | HAIR & SKIN ANALYZER MAKER</title>
    </Head>

    <HeroSection />
    <HomeBanner />
    <CategoryBanner />
    <ProductsBanner />
    <ExploreBanner />
    <SocialMedia />
    <Footer2 />
  </Root>
);

export default Home;

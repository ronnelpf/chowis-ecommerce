import React from "react";
import Head from "next/head";
import Root from "../components/common/Root";
import Footer2 from "../components/common/Footer2";
import { Avatar, Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";

const About = () => (
  <Root>
    <Head>
      <title>About | CHOWIS</title>
    </Head>
    <div className="about-container">
      {/* Row */}
      <div className="row mt-5 pt-5 about-hero">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
            {/* <h2 className="font-size-header mb-4">Commerce.js Demo Store</h2> */}
            <h4 className="font-size-subheader mb-4">
              Founded in 2012 , CHOWIS Co., Ltd. is a diagnostic and evaluation technology company
              specializing in optic, video image processing technology and software development. Our
              clients are global cosmetic and medical groups, as well as hospital and clinics
              seeking cutting-edge skin and hair diagnostic solutions and devices for various mobile
              platforms.
            </h4>

            <h4 className="font-size-subheader mb-4">
              Clients need us to continuously invest in the latest R7D developments. CHOWIS develops
              ideas and realizes them in hardware and software content that add value to our
              clients, products and services. Of course, these are always adapted to match our
              clients’ specific local needs. Our mission is to deliver only best-possible quality
              products and services to our customers around the world.
            </h4>
            {/* <h4 className="font-size-subheader mb-4">
              This is an open source storefront built using Chec’s headless architecture and the
              Commerce.js SDK. Commerce.js is a smarter, more efficient way to build eCommerce
              projects, and we hope you can see that as you explore the world custom eCommerce.
              Please build on top of, or pick apart this project for your own use. Everything in
              this project, from the storefront, to the cart, checkout and receipt, is 100%
              customizable. To build more custom eCommerce projects, using any frontend framework or
              platform, head over to{" "}
              <a
                href="https://commercejs.com/"
                target="_blank"
                className="cjs-link"
                rel="noopener noreferrer"
              >
                commercejs.com
              </a>
              .
            </h4> */}
            {/* <div className="about-cjs mt-3 d-flex flex-row">
              <a
                className="px-4 py-3 font-color-white about-doc"
                href="https://commercejs.com/docs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>
              <a
                className="px-4 py-3 about-dev"
                href="https://commercejs.com/docs/community/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Guides from the community
              </a>
            </div> */}
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img
                src="https://chowis.com/wp-content/uploads/2020/06/20191129-Chowis_Logo-01.png"
                alt="CHOWIS"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Row */}
      <div className="row about-hero">
        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img
                src="https://chowis.com/wp-content/uploads/2020/11/MISSION-1.png"
                alt="Mission"
              />
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="https://chowis.com/wp-content/uploads/2020/11/VISION-1.png" alt="Vision" />
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      {/* <div className="row">
        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/netlify-illustration.svg" alt="Netlify illustration" />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">Deploy to Netlify</h3>
            <h4 className="font-size-subheader mb-4">
              If you would like to deploy this project live today, click the button below and watch
              the magic happen!
            </h4>
            <div className="mt-3">
              <a
                className="px-4 py-3 flex-grow-1 font-color-white about-net"
                href="https://app.netlify.com/start/deploy?repository=https://github.com/chec/commercejs-nextjs-demo-store"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deploy to Netlify
              </a>
            </div>
          </div>
        </div>
      </div> */}

      {/* Row 3 */}
      {/* <div className="row">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">Clone in GitHub</h3>
            <h4 className="font-size-subheader mb-4">
              If you would like to clone this project and do a manual setup, go to the repository
              below!
            </h4>
            <div className="mt-3">
              <a
                className="px-4 py-3 flex-grow-1 font-color-white about-gb"
                href="https://github.com/chec/commercejs-nextjs-demo-store"
                target="_blank"
                rel="noopener noreferrer"
              >
                Clone in GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/github-illustration.svg" alt="GitHub illustration" />
            </div>
          </div>
        </div>
      </div> */}

      {/* Row 4 */}
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img
                src="https://chowis.com/wp-content/uploads/2021/03/Ryan-Choi.png"
                alt="CHOWIS CEO"
              />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5">
            <Stack
              bg={useColorModeValue("gray.50", "gray.800")}
              py={16}
              px={8}
              spacing={{ base: 8, md: 10 }}
              align={"center"}
              direction={"column"}
            >
              <Text fontSize={{ base: "xl", md: "2xl" }} textAlign={"center"} maxW={"3xl"}>
                “Throughout our organization we’ve always looked to bring together the right skills
                and knowledge to support our technology development, network growth and customer
                service. With experience that goes beyond the health and IT industry our group of
                developers and health experts are focused on bringing to market the latest Business
                Grade Diagnostic Solutions and dedicated support.”
              </Text>
              <Box textAlign={"center"}>
                <Avatar
                  src={"https://chowis.com/wp-content/uploads/2019/04/CEO-01.png"}
                  alt={"Ryan Choi"}
                  mb={2}
                />

                <Text fontWeight={600}>Ryan Choi</Text>
                <Text fontSize={"sm"} color={useColorModeValue("gray.400", "gray.400")}>
                  CHOWIS CEO
                </Text>
              </Box>
            </Stack>
          </div>
        </div>
      </div>
    </div>
    <Footer2 />
  </Root>
);

export default About;

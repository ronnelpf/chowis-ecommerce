import React from "react";
import Link from "next/link";
import { Box, Heading, Container, Text, Stack, Avatar } from "@chakra-ui/react";

export default function HomeBanner() {
  return (
    // <div className="p-5">
    //   <p
    //     className="font-size-display1 mt-5 text-center mx-auto text-uppercase"
    //     style={{ maxWidth: '53rem' }}
    //   >
    //     Moisture is the essence of wetness, and wetness is the essence of beauty.
    //   </p>
    //   <div className="d-flex align-items-center justify-content-center mt-3 mb-5">
    //     <Link href="/about">
    //       <a className="d-flex py-3 align-items-center font-color-black borderbottom border-color-black">
    //         <p className="mr-3">Find out more</p>
    //         <img src="/icon/arrow-long-right.svg" />
    //       </a>
    //     </Link>
    //   </div>
    // </div>
    <>
      <Container maxW={"6xl"}>
        <Stack as={Box} textAlign={"center"} spacing={{ base: 8, md: 14 }} py={{ base: 5, md: 10 }}>
          <Heading
            fontWeight={200}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            HAIR and SKIN ANALYZER MAKER
          </Heading>
          <Stack mt={6} direction={"row"} spacing={4}>
            <Avatar
              size="2xl"
              src={"https://chowis.com/wp-content/uploads/2020/02/CHOWIS-FAVICON.png"}
              alt={"Author"}
            />
            <Stack direction={"column"} spacing={0}>
              <Text textAlign={"left"} color={"gray.500"}>
                <b>HAIR and SKIN ANALYZER MAKER (Chowis)</b> is a company that specializes in skin analyzer
                and hair analyzer devices.
              </Text>
              <Text pt={4} textAlign={"left"} color={"gray.500"}>
                Our top of the line skin and hair diagnosis systems are positioned to be
                well-designed mobile diagnosis tools with BIG Data and advanced algorithm. These
                devices are scientifically proven and certified by leading medical and cosmetic
                companies in the global Research and Development centers due to the accurate skin
                and hair diagnosis that these devices can offer.
              </Text>
              <Text pt={4} textAlign={"left"} color={"gray.500"}>
                With the help of our diagnostic systems, brands can bring out the most credibility
                to their products, and consumers can take a huge advantage by learning which product
                actually address their skin needs and hair conditions. We have also developed a line
                of products for home use, these are devices designed for home skin analysis and home
                hair analysis. Experience the difference and make the best skin analyzer maker /hair
                analyzer maker in the industry your partner today!
              </Text>
              <Text fontStyle={"bold"} pt={4} textAlign={"left"} color={"gray.500"}>
                <b>Chowis Team</b>
              </Text>
              <Text textAlign={"left"} color={"gray.500"}>
                SKIN AND HAIR DIAGNOSTIC EXPERT
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

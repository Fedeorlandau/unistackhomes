import React from "react";
import Head from "next/head";
import Header from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import { Box, SimpleGrid } from "@chakra-ui/layout";
import Card from "../components/Card/Card";
import { Container } from "@chakra-ui/react";
import Footer from "../components/Footer/Footer";
import Testimonials from "../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Hero />
        <Container maxW="container.xl" mt={-48}>
          <SimpleGrid columns={[1, 1, 1, 2, 3]}>
            <Box>
              <Card />
            </Box>
            <Box w="100%">
              <Card />
            </Box>
            <Box w="100%">
              <Card />
            </Box>
          </SimpleGrid>
        </Container>
        <Testimonials />
      </main>

      <Footer></Footer>
    </div>
  );
};

export default Home;

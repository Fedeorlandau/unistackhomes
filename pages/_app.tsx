import React, { useEffect } from 'react';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { IntentVector } from '@uniformdev/optimize-common';
import { Tracker } from '@uniformdev/optimize-tracker-common';
import { UniformTracker } from '@uniformdev/optimize-tracker-react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { localTracker, analytics } from '../lib/local-tracker';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({ colors });

export type UniformConfAppProps = AppProps & {
  tracker?: Tracker;
  scoring?: IntentVector;
};

function MyApp({
  Component, pageProps, tracker, scoring,
}: UniformConfAppProps) {
  const trackerInstance = tracker || localTracker;

  useEffect(() => {
    if (!pageProps) {
      return;
    }

    analytics.page();
  }, [pageProps]);

  return (
    <ChakraProvider theme={theme}>
      <UniformTracker trackerInstance={trackerInstance} initialIntentScores={scoring}>

        <Head>
          <title>Unistack</title>
          <meta name="description" content="Contentstack + Uniform + NextJS" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Navbar />

          <Component {...pageProps} />

        </main>

        <Footer />
      </UniformTracker>

    </ChakraProvider>
  );
}
export default MyApp;

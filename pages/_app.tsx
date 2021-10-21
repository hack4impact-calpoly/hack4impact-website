import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
// if full transition to tailwind is made:
// import 'tailwindcss/tailwind.css'
// https://tailwindcss.com/docs/guides/nextjs

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hack4Impact Cal Poly</title>
        <meta name="description" content="The Hack4Impact chapter at Cal Poly SLO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;

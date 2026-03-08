import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../styles/globals.css';

const ThemeWrapper = ThemeProvider as unknown as React.FC<React.PropsWithChildren<{
  attribute?: string;
  defaultTheme?: string;
  enableSystem?: boolean;
}>>;

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeWrapper attribute="class" defaultTheme="system" enableSystem>
      <Head>
        <title>Hack4Impact Cal Poly</title>
        <meta name="description" content="The Hack4Impact chapter at Cal Poly SLO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="app-wrapper min-h-screen text-white"
      >
        <Navbar />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeWrapper>
  );
}

export default App;

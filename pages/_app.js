import Head from "next/head";

import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

import { Container } from "react-bootstrap";
import "../styles/global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//only use for CSS applied to all pages and react bootstrap import
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hack4Impact Cal Poly</title>
        <meta property="og:title" content="Hack4Impact Cal Poly" />
        <meta
          property="og:description"
          content="Welcome to Hack4Impact Cal Poly. Hack4Impact is a 501(c)(3) organization with chapters at universities across the U.S. and Canada. The Cal Poly chapter was founded in 2018 to provide software solutions to San Luis Obispo nonprofits and prepare students to use tech for the greater good. Learn about our mission, projects, and more."
        />
        <meta property="og:image" content="./images/homepage.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="images/png"
          href="/icons/favicon-32x32.png"
          sizes="32x32"
        />
        <link rel="shortcut icon" href="/icons/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
      </Head>

      <Header />
      <Container>
        <Component {...pageProps} />
      </Container>
      <Footer />
    </>
  );
}

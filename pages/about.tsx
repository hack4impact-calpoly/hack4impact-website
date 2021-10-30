import React from 'react';
import Head from 'next/head';

import ImageCard from '../components/ImageCard';
import ShowcasePhoto from '../public/photos/showcase-2019.png';

const About = () => (
  <>
    <Head>
      <title>About Us - Hack4Impact Cal Poly</title>
    </Head>
    <main>
      <h1>Software as a Tool for Social Good</h1>
      <p>we do other things too</p>
      <ImageCard img={ShowcasePhoto} alt="Club Showcase 2019" />
    </main>
  </>
);

export default About;

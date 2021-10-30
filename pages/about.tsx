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
      <section className="w-4/5 mx-auto text-center space-y-6">
        <h2>Software as a Tool for Social Good</h2>
        <p>
          We are a student-run 501(c)(3) organization that empowers engineers, designers,
          activists, and humanitarians to create lasting social change by developing projects
          for local nonprofits. We foster the wider adoption of software as a tool for social good.
        </p>
      </section>
      <ImageCard img={ShowcasePhoto} alt="Club Showcase 2019" />
    </main>
  </>
);

export default About;

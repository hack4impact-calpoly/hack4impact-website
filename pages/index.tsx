import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import contentful from '../utils/contentful';
import config from '../config';
import { HeaderItem } from '../utils/types';

import Header from '../components/Header';
import ImageCard from '../components/ImageCard';

import ECOSLOImage from '../public/photos/ecoslo-volunteering.png';

interface IndexProps {
  header: HeaderItem;
}

const Home = (props: IndexProps) => {
  const { header } = props;

  return (
    <>
      <main>
        <Header title={header.title} description={header.description} button={header.button} illustration="bg-home-header" />

        <section className="w-4/5 mx-auto text-center space-y-6">
          <h2>Using Tech to Help Our Community</h2>
          <p>
            We provide software solutions to San Luis Obispo nonprofits and prepare students to use
            tech for the greater good. Each year, we partner with nonprofits in our area to build
            software solutions to problems they are facing.
          </p>
        </section>

        <ImageCard img={ECOSLOImage} alt="Planting trees with ECOSLO" />
      </main>
    </>
  );
};

export async function getStaticProps() {
  const pageQuery = `{
    page: pagesCollection(where:{page:"index"}) {
      items {
        title
        description
        link
        buttonText
      }
    }
  }`;

  const res = await contentful.query(pageQuery);
  const data = res.page.items[0];

  const header: HeaderItem = {
    title: data.title,
    description: data.description,
    button: {
      text: data.buttonText,
      link: data.link,
    },
  };

  return {
    props: {
      header,
    },
  };
}

export default Home;

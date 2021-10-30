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

        <ImageCard img={ECOSLOImage} alt="asdf" />

        <h1>Hack4Impact Cal Poly</h1>
        <p>redesign time!</p>

        <h2>style list</h2>
        <hr />
        <h1>heading 1</h1>
        <h2>heading 2</h2>
        <h3>heading 3</h3>
        <h4>heading 4</h4>
        <h5>heading 5</h5>
        <Link href="/">
          <a>link &rarr;</a>
        </Link>
        <p>a paragraph that has text. fancy</p>

        <h2>asset list</h2>
        <hr />

        <Image src={config.assets.logo_color} alt="hack4impact logo, with color" />
        <Image src={config.assets.logo_white} alt="hack4impact logo, all white" />
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

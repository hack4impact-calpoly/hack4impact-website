import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import contentful from '../utils/contentful';
// import styles from '../styles/Home.module.css';
import config from '../config';

const Home = () => (
  <>
    <main>
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

export async function getStaticProps() {
  const projectQuery = `{
    projects: projectCollection(order:year_DESC) {
      items {
        title
        year
        slug
        background {
          url
        }
      }
    }
  }`;

  const res = await contentful.query(projectQuery);
  const projects = res.projects.items;

  // the api call works!
  console.log(projects);

  return {
    props: {
      projects: JSON.stringify(projects),
    },
  };
}

export default Home;

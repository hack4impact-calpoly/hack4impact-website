import React from 'react';
import Link from 'next/link';

import getProjectsByYear from '../utils/projects.tsx';

import styles from '../styles/Home.module.css';

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
        <a href="/">link &rarr;</a>
      </Link>
      <p>a paragraph that has text. fancy</p>
    </main>

    <footer className={styles.footer}>
      <Link href="/">
        <a>link &rarr;</a>
      </Link>
    </footer>
  </>
);

export async function getStaticProps() {
  const projects = await getProjectsByYear(2020);

  // the api call works!
  console.log(projects);

  return {
    props: {
      projects: JSON.stringify(projects),
    },
  };
}

export default Home;

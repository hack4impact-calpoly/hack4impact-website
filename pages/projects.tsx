import React from 'react';
import Head from 'next/head';

import contentful from '../utils/contentful';
import { HeaderItem } from '../utils/types';

import Header from '../components/Header';

interface ProjectsProps {
  header: HeaderItem;
}

const Projects = (props: ProjectsProps) => {
  const { header } = props;

  return (
    <>
      <Head>
        <title>Projects - Hack4Impact Cal Poly</title>
      </Head>
      <main>
        <Header title={header.title} description={header.description} button={header.button} illustration="bg-projects-header" />
      </main>
    </>
  );
};

export async function getStaticProps() {
  const pageQuery = `{
    page: pagesCollection(where:{page:"projects"}) {
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

export default Projects;

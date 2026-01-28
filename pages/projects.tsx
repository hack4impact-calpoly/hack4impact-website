import React from 'react';
import Head from 'next/head';

import contentful from '../utils/contentful';
import { HeaderItem, ProjectCardItem } from '../utils/types';

import Header from '../components/Header';
import BentoGrid from '../components/BentoGrid';

interface ProjectsProps {
  header: HeaderItem;
  projects: ProjectCardItem[];
}

const Projects = (props: ProjectsProps) => {
  const { header, projects } = props;
  const currentProjects = projects.filter((p) => p.year === projects[0].year);
  const pastProjects = projects.filter((p) => p.year !== projects[0].year);

  return (
    <>
      <Head>
        <title>Projects - Hack4Impact Cal Poly</title>
      </Head>
      <main className="mx-6 md:mx-auto md:w-4/5 lg:w-2/3 my-6 lg:my-12 space-y-8 lg:space-y-20">
        <Header title={header.title} description={header.description} button={header.button} illustration="bg-projects" />

        <section className="space-y-8">
          <h2 className="tracking-tight">Current projects</h2>
          <BentoGrid projects={currentProjects} showFeaturedLarge />
        </section>

        <section className="space-y-8">
          <h2 className="tracking-tight">Past projects</h2>
          <BentoGrid projects={pastProjects} showFeaturedLarge={false} />
        </section>
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
    projects: projectCollection(order:year_DESC) {
      items{
        title
        nonprofit {
          name
        }
        slug
        year
        blurb
        background {
          url(transform:{width:600,format:WEBP})
        }
      }
    }
  }`;

  const res = await contentful.query(pageQuery);
  const page = res.page.items[0];
  const projectData = res.projects.items;

  const header: HeaderItem = {
    title: page.title,
    description: page.description,
    button: {
      text: page.buttonText,
      link: page.link,
    },
  };

  const projects: ProjectCardItem[] = projectData.map((p: any) => ({
    title: p.title,
    slug: p.slug,
    blurb: p.blurb,
    year: p.year,
    backgroundImg: p.background.url,
  }));

  return {
    props: {
      header,
      projects,
    },
  };
}

export default Projects;

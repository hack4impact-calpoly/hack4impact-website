// This page will be dedicated to displaying the list of projects in our
// contenful space. A user will then be able to click on a project to edit it or in
// the top right corner, they can click on the "New Project" button to create a new project.

import React, { Key } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import contentful from '../../utils/contentful';
import { ProjectCardItem } from '../../utils/types';
import ProjectCard from '../../components/ProjectCard';

interface ProjectsProps {
  projects: ProjectCardItem[];
}

const Projects = (props: ProjectsProps) => {
  const { projects } = props;
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Projects - Hack4Impact Cal Poly</title>
      </Head>
      <main className="mx-6 md:mx-auto md:w-4/5 lg:w-2/3 my-6 lg:my-12 space-y-8 lg:space-y-20">

        <div className="flex flex-col">
          <section className="space-y-6">
            <h2>Our Projects</h2>
            <p>
              We work with local nonprofits to build software solutions that help them achieve their
              mission. Here are some of the projects we have worked on.
            </p>
          </section>

          <section className="space-y-8 mt-0">
            <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <ProjectCard key={p.title as Key} project={p} />
              ))}
            </div>
          </section>
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => router.push('/projects/new')}
        >
          New Project
        </button>
      </main>
    </>
  );
};

export default Projects;

export async function getStaticProps() {
  const pageQuery = `{
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
  const projectData = res.projects.items;

  const projects: ProjectCardItem[] = projectData.map((p: any) => ({
    title: p.title,
    slug: p.slug,
    blurb: p.blurb,
    year: p.year,
    backgroundImg: p.background.url,
  }));

  return {
    props: {
      projects,
    },
  };
}

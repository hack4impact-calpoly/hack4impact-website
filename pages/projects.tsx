import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import contentful from '../utils/contentful';
import { HeaderItem, ProjectCardItem } from '../utils/types';

import Header from '../components/Header';

interface ProjectsProps {
  header: HeaderItem;
  projectsByYear: { year: string; projects: ProjectCardItem[] }[];
}

const Projects = (props: ProjectsProps) => {
  const { header, projectsByYear } = props;
  const currentYear = projectsByYear[0]?.year;

  return (
    <>
      <Head>
        <title>Projects - Hack4Impact Cal Poly</title>
      </Head>
      <main className="mx-6 md:mx-auto md:w-4/5 lg:w-2/3 my-6 lg:my-12 space-y-8 lg:space-y-20">
        <Header title={header.title} description={header.description} button={header.button} illustration="bg-projects" />

        <section className="space-y-4">
          {projectsByYear.map(({ year, projects }) => (
            <details key={year} open={year === currentYear} className="group border border-theme-border rounded-lg">
              <summary className="flex items-center justify-between cursor-pointer px-6 py-4 select-none">
                <h3 className="text-xl font-semibold tracking-tight">{year}</h3>
                <svg
                  className="w-5 h-5 text-theme-muted transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <ul className="px-6 pb-5 space-y-4">
                {projects.map((project) => (
                  <li key={String(project.slug)}>
                    <Link href={`/projects/${project.slug}`} className="text-theme-accent hover:underline font-medium">
                      {project.title}
                    </Link>
                    {project.blurb && (
                      <p className="text-sm text-theme-muted mt-1">{project.blurb}</p>
                    )}
                  </li>
                ))}
              </ul>
            </details>
          ))}
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
    backgroundImg: '',
  }));

  // Group by year, preserving DESC order
  const yearMap = new Map<string, ProjectCardItem[]>();
  for (const p of projects) {
    const year = String(p.year);
    if (!yearMap.has(year)) yearMap.set(year, []);
    yearMap.get(year)!.push(p);
  }

  const projectsByYear = Array.from(yearMap.entries()).map(([year, projects]) => ({
    year,
    projects,
  }));

  return {
    props: {
      header,
      projectsByYear,
    },
  };
}

export default Projects;

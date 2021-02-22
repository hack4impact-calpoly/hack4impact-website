import fetch from 'node-fetch';
import Head from 'next/head';
import Link from 'next/link';

import { GoMarkGithub } from 'react-icons/go';
import PageCard from '../components/PageCard.js';
import CardMosaic from '../components/CardMosaic.js';
import ProjectCard from '../components/ProjectCard.js';
import styles from '../styles/Projects.module.scss';

const groupByYear = projectList => {
  if (projectList === undefined) return {};

  let projects = {};
  projectList.map(p => {
    if (projects[p.year] === undefined) projects[p.year] = [];
    projects[p.year].push(p);
  });

  projects = Object.entries(projects);
  projects.sort((a, b) => b[0] - a[0]);

  return projects;
}

const YearGrouping = props => (
  <CardMosaic width={3} size={'large'}>
    {props.projects.map(p => (
      <ProjectCard
        key={p.slug}
        title={p.nonprofitName}
        image={p.background.url}
        blurb={p.blurb}
        link={`/projects/${p.slug}`}
        blur={true}
      />
    ))}
  </CardMosaic>
);

const Projects = props => {
  const projects = groupByYear(props.projectList);
  const yearGroups = projects.map(([year, projects]) => (
    <PageCard key={year}>
      <h2>{year}</h2>
      <YearGrouping key={year} year={year} projects={projects} />
    </PageCard>
  ));

  return (
    <>
      <Head>
        <title>Hack4Impact Cal Poly – Projects</title>
        <meta
          name='description'
          content={'Each year, Hack4Impact Cal Poly partners with nonprofits '
                  + 'in our area. Read more about what we\'ve made with them!'}
        />
      </Head>

      <div className={styles.pageOverview}>
        <h1>{props.pageInfo.title}</h1>
        <p>{props.pageInfo.description}</p>

        <div className={styles.references}>
          <p>All of our code is on Github!
            <span className={styles.reference}>
              <GoMarkGithub />
              <a href="https://github.com/hack4impact-calpoly"
                rel="noreferrer" target="_blank">hack4impact-calpoly</a>
            </span>
          </p>
        </div>
      </div>

      <div className={styles.projects}>{yearGroups}</div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
  const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${space}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        query: `{
          pageInfo: pagesCollection (where:{page:"projects"}) {
            items {
              title
              description
            }
          }
          projectList: projectCollection (order:year_DESC) {
            items {
              nonprofitName
              blurb
              slug
              year

              background {
                url(transform: {width:400, format:WEBP})
              }
            }
          }
        }`,
      }),
    }
  );

  const { data } = await res.json();
  return {
    props: {
      pageInfo: data.pageInfo.items[0],
      projectList: data.projectList.items
    },
  };
}

export default Projects;

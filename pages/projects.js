import fetch from "node-fetch";
import Link from "next/link";

import { GoMarkGithub } from "react-icons/go";
import ProjectCard from "../components/ProjectCard.js";
import styles from "../styles/Projects.module.scss";

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
  <div className={styles.year}>
    <h2>{props.year}</h2>
    <div className={styles.projectGrid}>
      {props.projects.map(p => <ProjectCard key={p.slug} {...p} />)}
    </div>
  </div>
);

const Projects = props => {
  const projects = groupByYear(props.projectList);
  const yearGroups = projects.map(p => (
    <YearGrouping key={p[0]} year={p[0]} projects={p[1]} />
  ));

  return (
    <>
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

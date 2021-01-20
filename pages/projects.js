import fetch from "node-fetch";
import Link from "next/link";

import ProjectSidebar from "../components/ProjectSidebar.js";
import styles from "../styles/Projects.module.css";

const AboutProjects = () => (
  <div className={styles.projectOverview}>
    uhh
  </div>
)

const Projects = props => (
  <div className={styles.projectWrapper}>
    <ProjectSidebar projects={props.projectList} />
    <AboutProjects />
  </div>
)

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
          projectList: projectCollection (order:year_DESC) {
            items {
              title
              slug
              year
            }
          }
        }`,
      }),
    }
  );

  const { data } = await res.json();
  return {
    props: {
      projectList: data.projectList.items,
    },
  };
}

export default Projects;

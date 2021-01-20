import fetch from "node-fetch";

import ProjectSidebar from "../../components/ProjectSidebar.js";
import ProjectInfo from "../../components/ProjectInfo.js";
import styles from "../../styles/Projects.module.css";

const Project = props => (
  <div className={styles.projectWrapper}>
    <ProjectSidebar projects={props.projectList} />
    <ProjectInfo project={props.project} />
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

          project: projectCollection (where:{slug:"${params.id}"}) {
            items {
              title
              slug
              description
              year
              nonprofitLink
              projectLink
              githubLink
              techStackCollection (limit:14) {
                items {
                  name
                  icon {
                    url(transform: {width:200, format:JPG})
                  }
                  link
                }
              }

              background {
                url(transform: {width:400, format:JPG})
              }

              photosCollection (limit:10) {
                items {
                  url
                }
              }

              productManagerCollection (limit:2) {
                items {
                  fullName
                  profilePicture {
                    url(transform: {width:400, format:JPG})
                  }
                }
              }

              designerCollection (limit:4) {
                items {
                  fullName
                  profilePicture {
                    url(transform: {width:400, format:JPG})
                  }
                }
              }

              techLeadCollection (limit:4) {
                items {
                  fullName
                  profilePicture {
                    url(transform: {width:400, format:JPG})
                  }
                }
              }

              devsCollection (limit: 15) {
                items {
                  fullName
                  profilePicture {
                    url(transform: {width:160, height:160, format:JPG})
                  }
                }
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
      projectList: data.projectList.items,
      project: data.project.items[0],
    },
  };
}

export async function getStaticPaths() {
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
          projectCollection {
            items {
              slug
            }
          }
        }`
      })
  });

  const { data } = await res.json();
  const paths = data.projectCollection.items.map(p => ({
    params: { id: p.slug },
  }));

  return { paths: paths, fallback: false }
}

export default Project;

import fetch from "node-fetch";
import Head from 'next/head';

import CardMosaic from '../../components/CardMosaic';
import PageCard from '../../components/PageCard';
import ProjectHead from '../../components/ProjectHead';
import PhotoGallery from '../../components/PhotoGallery';
import styles from "../../styles/Projects.module.scss";

const Member = props => {
  return (
    <div className={styles.memberCard}>
      <img
        src={props.profilePicture.url}
        className={styles.member}
        alt={"picture of "+props.fullName}
        width="80" height="80"
      />
      <b>{props.fullName}</b>
      <p>{props.role}</p>
    </div>
  );
}

const generateRoleList = (members, role) => {
  if (members === undefined) return null;
  const roleList = members.items.map(member => (
    <Member key={member.fullName} {...member} role={role} />
  ));
  return roleList;
}

const TechIcon = props => {
  return (
    <div className={styles.techCard}>
      <img src={props.icon.url} alt={props.name+" logo"} />
      <a href={props.link} target="_blank" rel="noreferrer">{props.name}</a>
    </div>
  );
}

const Project = props => {
  // this could be cleaned up if Contentful let us add tags to references :/
  const pmList = generateRoleList(
    props.project.productManagerCollection, "Product Manager");
  const techLeadList = generateRoleList(
    props.project.techLeadCollection, "Tech Lead");
  const designerList = generateRoleList(
    props.project.designerCollection, "Designer");
  const devList = generateRoleList(
    props.project.devsCollection, "Developer");

  return (
    <>
      <Head>
        <title>Hack4Impact - {props.project.nonprofitName} project</title>
        <meta
          name='description'
          content={`Each year, Hack4Impact Cal Poly partners with nonprofits `
                   + `in our area. For ${props.project.nonprofitName}, we made `
                   + `${props.project.blurb[0].toLowerCase() +
                       props.project.blurb.slice(1)}`}
        />
      </Head>

      <div className={styles.project}>
        <ProjectHead
          backgroundURL={props.project.background.url}
          title={props.project.title}
          nonprofitLink={props.project.nonprofitLink}
          projectLink={props.project.projectLink}
          githubLink={props.project.githubLink}
        />

        <section className={styles.articles}>
          <em id={styles.year}>{props.project.year}</em>

          <article>
            <h3>About {props.project.nonprofitName}</h3>
            <p>{props.project.nonprofitDesc}</p>
          </article>

          <article>
            <h3>Project Description</h3>
            <p>{props.project.description}</p>
          </article>

          <article>
            <h3>Tech Stack</h3>
            <div className={styles.techs}>
            {
              props.project.techStackCollection.items.map(ts => (
                <TechIcon key={ts.name} {...ts} />
              ))
            }
            </div>
          </article>

          <article>
            <h3>Team Members</h3>
            <CardMosaic width={6}>
              {pmList} {techLeadList} {designerList} {devList}
            </CardMosaic>
          </article>
        </section>
      </div>

      { props.project.photosCollection.items.length > 0 &&
      <div className={styles.project}>
        <section className={styles.articles}>
          <article>
            <h3>Photos</h3>
            <PhotoGallery photos={props.project.photosCollection.items} />
          </article>
        </section>
      </div>
      }
    </>
  );
}

// get specific project info
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
          project: projectCollection (where:{slug:"${params.id}"}) {
            items {
              title
              slug
              description
              blurb
              year
              nonprofitName
              nonprofitLink
              nonprofitDesc
              projectLink
              githubLink
              techStackCollection (limit:14) {
                items {
                  name
                  icon {
                    url(transform: {width:200, format:WEBP})
                  }
                  link
                }
              }

              background {
                url(transform: {width:400, format:WEBP})
              }

              photosCollection (limit:10) {
                items {
                  url(transform: {width: 1200, format:WEBP})
                  description
                }
              }

              productManagerCollection (limit:2) {
                items {
                  fullName
                  profilePicture {
                    url(transform: {width:300, height:300, format:WEBP})
                  }
                }
              }

              designerCollection (limit:4) {
                items {
                  fullName
                  profilePicture {
                    url(transform: {width:300, height:300, format:WEBP})
                  }
                }
              }

              techLeadCollection (limit:4) {
                items {
                  fullName
                  profilePicture {
                    url(transform: {width:300, height:300, format:WEBP})
                  }
                }
              }

              devsCollection (limit: 15) {
                items {
                  fullName
                  profilePicture {
                    url(transform: {width:300, height:300, format:WEBP})
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
      project: data.project.items[0],
    },
  };
}

// build all project pages
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

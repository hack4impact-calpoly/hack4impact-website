import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { LinkIcon, CodeIcon, HandIcon } from '@heroicons/react/solid';

import contentful from '../../utils/contentful';
import { MemberCardItem, ProjectItem } from '../../utils/types';
import Carousel from '../../components/Carousel';
import MemberCard from '../../components/MemberCard';
import TechnologyLogo from '../../components/TechnologyLogo';

interface ProjectLinkProps {
  type: String;
  text: String;
  link: String;
}

const ProjectLink = (props: ProjectLinkProps) => {
  const { type, text, link } = props;

  function getIcon(iconType: String) {
    const circleClass = 'text-white bg-blue w-12 p-2 rounded-full';
    if (iconType === 'github') return <CodeIcon className={circleClass} />;
    if (iconType === 'project') return <LinkIcon className={circleClass} />;
    if (iconType === 'nonprofit') return <HandIcon className={circleClass} />;
    return null;
  }

  const icon = getIcon(type);

  return (
    <a
      href={link.toString()}
      className="flex space-x-2"
      target="_blank"
      rel="noreferrer"
    >
      {icon}
      <h3 className="text-black self-center">{text}</h3>
    </a>
  );
};

interface ProjectProps {
  project: ProjectItem;
  people: MemberCardItem[];
}

const Project = (props: ProjectProps) => {
  const { project, people } = props;

  return (
    <>
      <Head>
        <title>{`${project.nonprofit.name} - Hack4Impact Cal Poly`}</title>
      </Head>
      <main className="mx-6 md:mx-auto md:w-4/5 lg:w-2/3 my-6 lg:my-12 space-y-8 lg:space-y-20">
        <section className="space-y-6">
          <h1>{project.nonprofit.name}</h1>
          <p>{project.nonprofit.description}</p>

          <h3>Project overview</h3>
          <div className="md:flex md:space-x-12">
            <p className="md:w-3/4">{project.description}</p>
            <div className="mt-4 md:w-1/4 space-y-2">
              <ProjectLink type="github" text="Github link" link={project.links.github} />
              {project.links.project && <ProjectLink type="project" text="Project link" link={project.links.project} />}
              <ProjectLink type="nonprofit" text="Nonprofit link" link={project.links.nonprofit} />
            </div>
          </div>

          <article>
            <h3 className="md:mb-4">Tech stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-x-8 gap-y-4">
              {project.technologies.map((tech) => (
                <TechnologyLogo key={tech.toString()} tech={tech.toString()} />
              ))}
            </div>
          </article>
        </section>

        {project.photos.length > 0 && (
          <section className="space-y-8">
            <h3>View our product</h3>
            <Carousel>
              {project.photos?.map((photo) => (
                <div key={photo.url.toString()} className="space-y-2">
                  <div className="rounded-md bg-gradient-to-tr from-gray-100 to-gray-50">
                    <Image
                      src={photo.url.toString()}
                      alt={photo.alt?.toString() || ''}
                      width="1086"
                      height="639"
                      objectFit="contain"
                    />
                  </div>
                  {photo.alt && <p className="text-gray-600">{photo.alt}</p>}
                </div>
              ))}
            </Carousel>
          </section>
        )}

        <section className="space-y-6">
          <h3>Meet the team</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {people.map((m) => (
              <MemberCard
                key={m.name.toString()}
                name={m.name}
                title={m.title}
                image={m.image}
                linkedin={m.linkedin}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

interface StaticProps {
  params: { id: String };
}

// get project info
export async function getStaticProps(props: StaticProps) {
  const { params } = props;
  const pageQuery = `{
    project: projectCollection (where:{slug:"${params.id}"}, limit:1) {
      items {
        nonprofit {
          name
          description
          link
        }
        
        description
        technologies
        githubLink
        projectLink
        
        photos: photosCollection {
          items {
            url
            description
          }
        }
        
        pms: productManagerCollection {
          items {
            fullName
            profilePicture {
              url(transform: {width:400, format:WEBP})
            }
            linkedIn
          }
        }
        designers: designerCollection {
          items {
            fullName
            profilePicture {
              url(transform: {width:400, format:WEBP})
            }
            linkedIn
          }
        }
        techLeads: techLeadCollection {
          items {
            fullName
            profilePicture {
              url(transform: {width:400, format:WEBP})
            }
            linkedIn
          }
        }
        devs: devsCollection {
          items {
            fullName
            profilePicture {
              url(transform: {width:400, format:WEBP})
            }
            linkedIn
          }
        }
      }
    }
  }`;

  const res = await contentful.query(pageQuery);
  const projectData = res.project.items[0];

  interface ProjectImages {
    url: string;
    description?: string;
  }

  const project: ProjectItem = {
    nonprofit: {
      name: projectData.nonprofit.name,
      description: projectData.nonprofit.description,
    },
    description: projectData.description,
    links: {
      github: projectData.githubLink,
      project: projectData.projectLink,
      nonprofit: projectData.nonprofit.link,
    },
    technologies: projectData.technologies,
    photos: projectData.photos?.items.map((photo: ProjectImages) => (
      { url: photo.url, alt: photo.description }
    )),
  };

  // mapping members to cards from query
  interface MemberQueryItem {
    fullName: String;
    profilePicture: { url: String }
    linkedIn: String;
  }

  function queryToCard(member: MemberQueryItem, title: String): MemberCardItem {
    return {
      name: member.fullName,
      title,
      image: {
        url: member.profilePicture?.url || null,
      },
      linkedin: member.linkedIn,
    };
  }

  const people: MemberCardItem[] = [
    ...projectData.pms.items.map((m: MemberQueryItem) => queryToCard(m, 'Product Manager')),
    ...projectData.techLeads.items.map((m: MemberQueryItem) => queryToCard(m, 'Tech Lead')),
    ...projectData.designers.items.map((m: MemberQueryItem) => queryToCard(m, 'Designer')),
    ...projectData.devs.items.map((m: MemberQueryItem) => queryToCard(m, 'Developer')),
  ];

  return {
    props: { project, people },
  };
}

// build all project pages
interface ProjectSlug { slug: String }
export async function getStaticPaths() {
  const pageQuery = `{
    projects: projectCollection {
      items {
        slug
      }
    }
  }`;

  const res = await contentful.query(pageQuery);
  const projects = res.projects.items;

  const paths = projects.map((p: ProjectSlug) => ({
    params: { id: p.slug },
  }));
  return { paths, fallback: false };
}

export default Project;

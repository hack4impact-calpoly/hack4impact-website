import React, { Key } from 'react';

import contentful from '../utils/contentful';
import { HeaderItem, ProjectCardItem } from '../utils/types';

import Header from '../components/Header';
import ImageCard from '../components/ImageCard';
import CTA from '../components/CTA';
import ProjectCard from '../components/ProjectCard';

import ECOSLOImage from '../public/photos/ecoslo-volunteering.png';

interface IndexProps {
  header: HeaderItem;
  projects: ProjectCardItem[];
}

const Home = (props: IndexProps) => {
  const { header, projects } = props;

  return (
    <>
      <main className="my-12 space-y-20">
        <Header title={header.title} description={header.description} button={header.button} illustration="bg-home-header" />

        <section className="w-4/5 mx-auto text-center space-y-6">
          <h2>Using Tech to Help Our Community</h2>
          <p>
            We provide software solutions to San Luis Obispo nonprofits and prepare students to use
            tech for the greater good. Each year, we partner with nonprofits in our area to build
            software solutions to problems they are facing.
          </p>
        </section>

        <section className="space-y-8 mt-0">
          <div className="grid gap-6 grid-cols-3">
            {projects.map((p) => <ProjectCard key={p.title as Key} project={p} />)}
          </div>
        </section>

        <ImageCard img={ECOSLOImage} alt="Planting trees with ECOSLO" />

        <section className="space-y-6">
          <h2>Let&apos;s make an impact together</h2>

          <div className="flex items-stretch space-x-12">
            <CTA button={{ text: 'Learn More', link: 'students', type: 'secondary' }}>
              <h3>Students</h3>
              <p>
                We pride ourselves on being an interdisciplinary organization and accept
                individuals from all majors and years. Whether you&apos;re interested in
                being a software developer, product manager, or designer, we want to hear
                from you.
              </p>
            </CTA>

            <CTA button={{ text: 'Learn More', link: 'nonprofits', type: 'secondary' }}>
              <h3>Nonprofits</h3>
              <p>
                We do our best in seeking out nonprofit organizations that need help in San Luis
                Obispo and the surrounding areas. If your nonprofit organization has a
                project idea or could use a little help, please reach out to us!
              </p>
            </CTA>
          </div>
        </section>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const pageQuery = `{
    page: pagesCollection(where:{page:"index"}) {
      items {
        title
        description
        link
        buttonText
      }
    }
    projects: projectCollection(where:{featured:true}) {
      items{
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
    title: p.nonprofit.name,
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

export default Home;

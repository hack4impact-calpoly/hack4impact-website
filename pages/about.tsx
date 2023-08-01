import React from 'react';
import Head from 'next/head';

import contentful from '../utils/contentful';
import { InfoCardItem, MemberCardItem } from '../utils/types';

import ImageCard from '../components/ImageCard';
import MemberCard from '../components/MemberCard';
import InfoCard from '../components/InfoCard';
import Carousel from '../components/Carousel';

interface AboutProps {
  page: {
    title: String;
    description: String;
  }
  people: {
    directors: MemberCardItem[];
    members: MemberCardItem[];
    alumni: MemberCardItem[];
  },
  info: InfoCardItem[];
}

const About = (props: AboutProps) => {
  const {
    page, people, info,
  } = props;

  return (
    <>
      <Head>
        <title>About Us - Hack4Impact Cal Poly</title>
      </Head>
      <main className="mx-6 md:mx-auto md:w-4/5 lg:w-2/3 my-6 lg:my-12 space-y-8 lg:space-y-20">
        <section className="lg:text-center space-y-6">
          <h2>{page.title}</h2>
          <p>{page.description}</p>
        </section>

        <Carousel>
          <ImageCard img="/photos/showcase-2019.png" alt="Club Showcase 2019" />
          <ImageCard img="/photos/beach-cleanup.jpg" alt="Beach Cleanup 2022" />
          <ImageCard img="/photos/outlook.jpg" alt="Outlook from the P" />
        </Carousel>

        <section className="flow-root space-y-6 md:space-y-10">
          <h2>Our events</h2>
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {info.map((card) => (
              <InfoCard key={card.title} title={card.title} body={card.body} image={card.image} />
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2>Meet our directors</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {people.directors.map((m) => (
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

        <section className="space-y-6">
          <h2>Meet our team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {people.members.map((m) => (
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

        <section className="space-y-6">
          <h2>Meet our alumni</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {people.alumni.map((m) => (
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

export async function getStaticProps() {
  const pageQuery = `{
    page: pagesCollection(where:{page:"about-us"}) {
      items {
        title
        description
        info: infoCardCollection(limit:3) {
          items {
            title
            body
            image {
              url(transform: {width:400, format:WEBP})
              description
            }
          }
        }
      }
    }
    
    directors: personCollection (where:{role_contains:"Director", isActive:true, isAlumni:false}, order:fullName_ASC) {
      items {
        fullName
        role
        linkedIn
        profilePicture {
          url(transform: {width:400, format:WEBP})
        }
      }
    }
    members: personCollection (where:{role_not_contains:"Director", isActive:true, isAlumni:false}, order:fullName_ASC) {
      items {
        fullName
        role
        linkedIn
        profilePicture {
          url(transform: {width:400, format:WEBP})
        }
      }
    }
    alumni: personCollection (where:{isAlumni:true}) {
      items {
        fullName
        role
        linkedIn
        profilePicture {
          url(transform: {width:400, format:WEBP})
        }
        classOf
      }
    }
  }`;

  interface InfoCardContent {
    title: string;
    body: string;
    image: {
      url: string;
      description: string;
    }
  }

  const res = await contentful.query(pageQuery);
  const page = res.page.items[0];
  const directorData = res.directors.items;
  const memberData = res.members.items;
  const alumniData = res.alumni.items;

  const info = page.info.items.map((item: InfoCardContent): InfoCardItem => ({
    title: item.title,
    body: item.body,
    image: {
      url: item.image.url,
      alt: item.image.description,
    },
  }));

  function contentfulToMemberCard(p: any): MemberCardItem {
    return {
      name: p.fullName,
      title: p.role,
      linkedin: p.linkedIn,
      image: { url: p.profilePicture?.url || null },
      classOf: p.classOf || null,
    };
  }

  function sortByRole(a: MemberCardItem, b: MemberCardItem) {
    // this is an arbitrary role ordering..
    const roles = [
      'Co-Founder',
      'Co-Executive Director',
      'Director of Engineering',
      'Director of Product & Outreach',
      'Director of Design',
      'Director of Finance',
      'Director of Operations',
      'Director of Operations & Finance',
      'Director of Design & Public Relations',
      'Director of Public Relations',
      'Director of Membership',
      'Director of Community',
      'Associate Director of Engineering',
      'Associate Director of Product & Outreach',
      'Associate Director of Design & Public Relations',
      'Tech Lead',
      'Product Manager',
      'Designer',
      'Designer and Developer',
      'Software Developer',
    ];

    return roles.indexOf(a.title.toString()) - roles.indexOf(b.title.toString());
  }

  const directors: MemberCardItem[] = directorData.map(contentfulToMemberCard).sort(sortByRole);

  const members: MemberCardItem[] = memberData.map(contentfulToMemberCard);

  const alumni: MemberCardItem[] = alumniData.map(contentfulToMemberCard)
    .sort((a: MemberCardItem, b: MemberCardItem) => {
      const role = sortByRole(a, b);
      if (role !== 0) return role;
      if (a.classOf && b.classOf) {
        const year = a.classOf - b.classOf;
        if (year !== 0) return year;
      }
      return a.name < b.name;
    });

  return {
    props: {
      page,
      info,
      people: { directors, members, alumni },
    },
  };
}

export default About;

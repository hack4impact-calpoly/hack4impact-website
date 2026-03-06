import React from 'react';
import Head from 'next/head';

import contentful from '../utils/contentful';
import { InfoCardItem, MemberCardItem } from '../utils/types';

import ImageCard from '../components/ImageCard';
import MemberCard from '../components/MemberCard';
import InfoCard from '../components/InfoCard';
import Carousel from '../components/Carousel';
import AlumniSection from '../components/AlumniSection';

interface MemberRoleGroup {
  label: string;
  members: MemberCardItem[];
}

interface AboutProps {
  page: {
    title: String;
    description: String;
  }
  people: {
    directors: MemberCardItem[];
    memberGroups: MemberRoleGroup[];
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
          <h2 className="tracking-tight">Our events</h2>
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {info.map((card) => (
              <InfoCard key={card.title} title={card.title} body={card.body} image={card.image} />
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="tracking-tight">Meet our directors</h2>
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

        <section className="space-y-10">
          <h2 className="tracking-tight">Meet our team</h2>
          {people.memberGroups.map((group) => (
            <div key={group.label} className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-700">{group.label}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2">
                {group.members.map((m) => (
                  <p key={m.name.toString()} className="text-base">
                    {m.linkedin ? (
                      <a href={m.linkedin.toString().startsWith('http') ? m.linkedin.toString() : `https://${m.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">
                        {m.name}
                      </a>
                    ) : m.name}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="space-y-6">
          <h2 className="tracking-tight">Meet our alumni</h2>
          <AlumniSection alumni={people.alumni} />
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
    
    directors: personCollection (where:{
        OR: [
            {role_contains: "Director"},
            {role_contains: "Tech Advisor"}
        ], 
        isActive:true, isAlumni:false
        }, 
        order:fullName_ASC) {
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
      'Technical Advisor',
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

  const allMembers: MemberCardItem[] = memberData.map(contentfulToMemberCard);

  const roleGroupDefs = [
    { label: 'Tech Leads', match: (r: string) => r.includes('Tech Lead') },
    { label: 'Product Managers', match: (r: string) => r.includes('Product Manager') },
    { label: 'Developers', match: (r: string) => r.includes('Developer') },
    { label: 'Designers', match: (r: string) => r.includes('Designer') },
  ];

  const memberGroups: { label: string; members: MemberCardItem[] }[] = roleGroupDefs.map((g) => ({
    label: g.label,
    members: [],
  }));
  const otherMembers: MemberCardItem[] = [];

  allMembers.forEach((m) => {
    const role = m.title.toString();
    const idx = roleGroupDefs.findIndex((g) => g.match(role));
    if (idx !== -1) {
      memberGroups[idx].members.push(m);
    } else {
      otherMembers.push(m);
    }
  });

  if (otherMembers.length > 0) {
    memberGroups.push({ label: 'Other', members: otherMembers });
  }

  const filteredMemberGroups = memberGroups.filter((g) => g.members.length > 0);

  const alumni: MemberCardItem[] = alumniData.map(contentfulToMemberCard);

  return {
    props: {
      page,
      info,
      people: { directors, memberGroups: filteredMemberGroups, alumni },
    },
  };
}

export default About;

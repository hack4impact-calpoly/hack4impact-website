import React from 'react';
import Head from 'next/head';

import contentful from '../utils/contentful';
import { InfoCardItem, MemberCardItem } from '../utils/types';

import MemberCard from '../components/MemberCard';
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

        <section className="-mx-6 md:-mx-[10%] lg:-mx-[16.67%] px-6 md:px-[10%] lg:px-[16.67%] py-16 sm:py-24 section-gradient">
          <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-blue-light">
            What we do
          </p>
          <h2 className="mx-auto mt-3 max-w-lg text-center tracking-tight">
            Our events
          </h2>
          <div className="mt-10 grid gap-4 sm:mt-14 lg:grid-cols-3 lg:grid-rows-2">
            {/* Card 1 — tall left card */}
            {info[0] && (
              <div className="group relative lg:row-span-2">
                <div className="absolute inset-px rounded-2xl bg-white lg:rounded-l-3xl" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl lg:rounded-l-[calc(1.5rem+1px)]">
                  <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                    <p className="text-lg tracking-tight text-gray-900" style={{ fontFamily: 'Sofia Pro Medium' }}>
                      {info[0].title}
                    </p>
                    <p className="mt-2 max-w-lg text-sm leading-6 text-gray-500">
                      {info[0].body}
                    </p>
                  </div>
                  {info[0].image && (
                    <div className="relative min-h-[28rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                      <div className="absolute inset-x-8 top-8 bottom-0 overflow-hidden rounded-t-xl shadow-card-lg">
                        <img
                          src={info[0].image.url.toString()}
                          alt={info[0].image.alt?.toString()}
                          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div className="pointer-events-none absolute inset-px rounded-2xl shadow-card lg:rounded-l-3xl" />
              </div>
            )}

            {/* Card 2 — top center/right */}
            {info[1] && (
              <div className="group relative max-lg:row-start-1">
                <div className="absolute inset-px rounded-2xl bg-white max-lg:rounded-t-3xl" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl max-lg:rounded-t-[calc(1.5rem+1px)]">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <p className="text-lg tracking-tight text-gray-900" style={{ fontFamily: 'Sofia Pro Medium' }}>
                      {info[1].title}
                    </p>
                    <p className="mt-2 max-w-lg text-sm leading-6 text-gray-500">
                      {info[1].body}
                    </p>
                  </div>
                  {info[1].image && (
                    <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-8 max-lg:pb-10 sm:px-10 lg:pb-2">
                      <img
                        src={info[1].image.url.toString()}
                        alt={info[1].image.alt?.toString()}
                        className="w-full max-lg:max-w-xs rounded-xl shadow-card transition-transform duration-700 ease-out group-hover:scale-102"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
                <div className="pointer-events-none absolute inset-px rounded-2xl shadow-card max-lg:rounded-t-3xl" />
              </div>
            )}

            {/* Card 3 — spans remaining columns on bottom row */}
            {info[2] && (
              <div className={`group relative max-lg:row-start-3 lg:row-start-2 ${info.length === 3 ? 'lg:col-span-2' : 'lg:col-start-2'}`}>
                <div className={`absolute inset-px rounded-2xl bg-white ${info.length === 3 ? 'lg:rounded-r-3xl' : ''}`} />
                <div className={`relative flex h-full overflow-hidden rounded-2xl ${info.length === 3 ? 'flex-col lg:flex-row-reverse lg:rounded-r-[calc(1.5rem+1px)]' : 'flex-col'}`}>
                  <div className={`px-8 pt-8 sm:px-10 sm:pt-10 ${info.length === 3 ? 'lg:flex lg:flex-col lg:justify-center lg:w-1/2 lg:pt-0' : ''}`}>
                    <p className="text-lg tracking-tight text-gray-900" style={{ fontFamily: 'Sofia Pro Medium' }}>
                      {info[2].title}
                    </p>
                    <p className="mt-2 max-w-lg text-sm leading-6 text-gray-500">
                      {info[2].body}
                    </p>
                  </div>
                  {info[2].image && (
                    <div className={`flex flex-1 items-center max-lg:py-6 px-8 sm:px-10 ${info.length === 3 ? 'lg:w-1/2 lg:px-0' : 'lg:pb-2'}`}>
                      <img
                        src={info[2].image.url.toString()}
                        alt={info[2].image.alt?.toString()}
                        className={`w-full object-cover shadow-card transition-transform duration-700 ease-out group-hover:scale-102 ${info.length === 3 ? 'lg:rounded-none lg:h-full rounded-xl' : 'rounded-xl'}`}
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>
                <div className={`pointer-events-none absolute inset-px rounded-2xl shadow-card ${info.length === 3 ? 'lg:rounded-r-3xl' : ''}`} />
              </div>
            )}

            {/* Card 4 — tall right card (if exists) */}
            {info[3] && (
              <div className="group relative lg:row-span-2">
                <div className="absolute inset-px rounded-2xl bg-white max-lg:rounded-b-3xl lg:rounded-r-3xl" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl max-lg:rounded-b-[calc(1.5rem+1px)] lg:rounded-r-[calc(1.5rem+1px)]">
                  <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                    <p className="text-lg tracking-tight text-gray-900" style={{ fontFamily: 'Sofia Pro Medium' }}>
                      {info[3].title}
                    </p>
                    <p className="mt-2 max-w-lg text-sm leading-6 text-gray-500">
                      {info[3].body}
                    </p>
                  </div>
                  {info[3].image && (
                    <div className="relative min-h-[28rem] w-full grow">
                      <div className="absolute top-8 right-0 bottom-0 left-8 overflow-hidden rounded-tl-xl shadow-card-lg">
                        <img
                          src={info[3].image.url.toString()}
                          alt={info[3].image.alt?.toString()}
                          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div className="pointer-events-none absolute inset-px rounded-2xl shadow-card max-lg:rounded-b-3xl lg:rounded-r-3xl" />
              </div>
            )}
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

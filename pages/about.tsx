import React from 'react';
import Head from 'next/head';

import contentful from '../utils/contentful';
import { MemberCardItem, TestimonalProps } from '../utils/types';

import ImageCard from '../components/ImageCard';
import Carousel from '../components/Carousel';
import Testimonial from '../components/Testimonial';
import MemberCard from '../components/MemberCard';

interface AboutProps {
  page: {
    title: String;
    description: String;
  }
  testimonials: TestimonalProps[];
  people: {
    directors: MemberCardItem[];
    members: MemberCardItem[];
    alumni: MemberCardItem[];
  }
}

const About = (props: AboutProps) => {
  const { page, testimonials, people } = props;

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

        <ImageCard img="/photos/showcase-2019.png" alt="Club Showcase 2019" />

        <section className="space-y-8">
          <h2>Hear from our members</h2>
          <Carousel>
            {testimonials.map((t) => (
              <Testimonial key={t.member.name} member={t.member} quote={t.quote} />
            ))}
          </Carousel>
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
      }
    }
    testimonials: testimonialCollection (where:{display:true}) {
      items {
        member {
          fullName
          linkedIn
          profilePicture {
            url(transform: {width:400, format:WEBP})
          }
        }
        class
        quote
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

  const res = await contentful.query(pageQuery);
  const page = res.page.items[0];
  const testimonialData = res.testimonials.items;
  const directorData = res.directors.items;
  const memberData = res.members.items;
  const alumniData = res.alumni.items;

  const testimonials: TestimonalProps = testimonialData.map((t: any) => ({
    member: {
      headshot: {
        url: t.member.profilePicture?.url,
      },
      name: t.member.fullName,
      linkedin: t.member.linkedIn,
      title: t.class,
    },
    quote: t.quote,
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
      'Director of Product',
      'Director of Engineering',
      'Director of Design',
      'Director of Finance',
      'Director of Operations',
      'Director of Public Relations',
      'Director of Community',
      'Associate Director of Product',
      'Associate Director of Engineering',
      'Product Manager',
      'Tech Lead',
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
      testimonials,
      people: { directors, members, alumni },
    },
  };
}

export default About;

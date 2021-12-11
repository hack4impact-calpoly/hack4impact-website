import React from 'react';
import Head from 'next/head';
import contentful from '../utils/contentful';
import {
  FAQItem, HeaderItem, InfoCardItem, TimelineCollectionItem, TimelineItem, TimelineItems,
} from '../utils/types';

import FAQ from '../components/FAQ';
import Timeline from '../components/Timeline';
import Header from '../components/Header';
import InfoCard from '../components/InfoCard';

interface StudentsProps {
  header: HeaderItem;
  faq: FAQItem[];
  events: TimelineItem[];
  info: InfoCardItem[];
}

const Students = (props: StudentsProps) => {
  const {
    header, faq, events, info,
  } = props;

  return (
    <>
      <Head>
        <title>Students - Hack4Impact Cal Poly</title>
      </Head>
      <main className="mx-6 md:mx-auto md:w-4/5 lg:w-2/3 my-6 lg:my-12 space-y-8 lg:space-y-20">
        <Header title={header.title} description={header.description} button={header.button} illustration="bg-student-header" />

        <section className="flow-root space-y-10">
          <h2>Application process</h2>
          <Timeline events={events} />
        </section>

        <section className="flow-root space-y-6 md:space-y-10">
          <h2>Our events</h2>
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {info.map((card) => (
              <InfoCard key={card.title} title={card.title} body={card.body} image={card.image} />
            ))}
          </div>
        </section>

        <section className="flow-root space-y-10">
          <h2>Frequently asked questions</h2>
          <FAQ questions={faq} />
        </section>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const pageQuery = `{
    page: pagesCollection(where:{page:"students"}) {
      items {
        title
        description
        link
        buttonText
        faq: faqCollection(limit:8) {
          items {
            question
            answer
          }
        }
        timeline: timelineCollection(limit:6) {
          items {
            eventName
            timeRange
            description
            icon
          }
        }
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
  }`;

  const res = await contentful.query(pageQuery);
  const page = res.page.items[0];

  const header: HeaderItem = {
    title: page.title,
    description: page.description,
    button: {
      text: page.buttonText,
      link: page.link,
    },
  };

  const faq = page.faq.items as FAQItem[];
  const events: TimelineItems = page.timeline.items.map((item: TimelineCollectionItem) => ({
    event: { name: item.eventName, time: item.timeRange, description: item.description },
    icon: item.icon,
  }));

  interface InfoCardContent {
    title: string;
    body: string;
    image: {
      url: string;
      description: string;
    }
  }

  const info = page.info.items.map((item: InfoCardContent): InfoCardItem => ({
    title: item.title,
    body: item.body,
    image: {
      url: item.image.url,
      alt: item.image.description,
    },
  }));

  return {
    props: {
      header,
      faq,
      events,
      info,
    },
  };
}

export default Students;

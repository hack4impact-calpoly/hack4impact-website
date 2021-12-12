import React from 'react';
import Head from 'next/head';
import contentful from '../utils/contentful';
import {
  HeaderItem,
  InfoCardItem,
  TimelineCollectionItem,
  TimelineItem,
  TimelineItems,
} from '../utils/types';

import Timeline from '../components/Timeline';
import InfoCard from '../components/InfoCard';
import Header from '../components/Header';

interface StudentsProps {
  page: HeaderItem;
  info: InfoCardItem[];
  events: TimelineItem[];
}

const Donate = (props: StudentsProps) => {
  const {
    page,
    info,
    events,
  } = props;

  return (
    <>
      <Head>
        <title>Donate - Hack4Impact Cal Poly</title>
      </Head>
      <main className="mx-6 md:mx-auto md:w-4/5 lg:w-2/3 my-6 lg:my-12 space-y-12 lg:space-y-20">
        <Header title={page.title} description={page.description} button={page.button} illustration="bg-donate" />

        <section className="flow-root space-y-6 md:space-y-10">
          <h2>Our expenses</h2>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {info.map((card) => (
              <div key={card.title} className="mx-auto">
                <InfoCard title={card.title} body={card.body} image={card.image} />
              </div>
            ))}
          </div>
        </section>

        <section className="flow-root space-y-10">
          <h2>Project kickoff donation drive</h2>
          <Timeline events={events} />
        </section>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const pageQuery = `{
    page: pagesCollection(where:{page:"donate"}) {
      items {
        title
        description
        link
        buttonText
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
        timeline: timelineCollection(limit:6) {
          items {
            eventName
            timeRange
            description
            icon
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

  const events: TimelineItems = page.timeline.items.map((item: TimelineCollectionItem) => ({
    event: { name: item.eventName, time: item.timeRange, description: item.description },
    icon: item.icon,
  }));

  return {
    props: {
      page: header,
      info,
      events,
    },
  };
}

export default Donate;

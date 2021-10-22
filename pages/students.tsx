import React from 'react';
import Head from 'next/head';
import contentful from '../utils/contentful';
import {
  FAQItem, TimelineCollectionItem, TimelineItem, TimelineItems,
} from '../utils/types';

import FAQ from '../components/FAQ';
import Timeline from '../components/Timeline';

interface StudentsProps {
  faq: FAQItem[];
  events: TimelineItem[];
}

const Students = (props: StudentsProps) => {
  const { faq, events } = props;

  return (
    <>
      <Head>
        <title>Students - Hack4Impact Cal Poly</title>
      </Head>
      <main>
        <h1>Students</h1>
        <p>for the folks who make up the club</p>

        <div className="my-14 space-y-14">
          <div className="flow-root space-y-10">
            <h2>Application Process</h2>
            <Timeline events={events} />
          </div>

          <div className="flow-root space-y-10">
            <h2>Frequently Asked Questions</h2>
            <FAQ questions={faq} />
          </div>
        </div>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const pageQuery = `{
    page: pagesCollection(where:{page:"students"}) {
      items {
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
      }
    }
  }`;

  const res = await contentful.query(pageQuery);
  const data = res.page.items[0];

  const faq = data.faq.items as FAQItem[];
  const events: TimelineItems = data.timeline.items.map((item: TimelineCollectionItem) => ({
    event: { name: item.eventName, time: item.timeRange, description: item.description },
    icon: item.icon,
  }));

  return {
    props: {
      faq,
      events,
    },
  };
}

export default Students;

import React from 'react';
import Head from 'next/head';
import contentful from '../utils/contentful';
import {
  FAQItem, TimelineCollectionItem, TimelineItem, TimelineItems, HeaderItem,
} from '../utils/types';

import Header from '../components/Header';
import FAQ from '../components/FAQ';
import Timeline from '../components/Timeline';

interface NonprofitsProps {
  header: HeaderItem;
  faq: FAQItem[];
  events: TimelineItem[];
}

const Nonprofits = (props: NonprofitsProps) => {
  const { header, faq, events } = props;

  return (
    <>
      <Head>
        <title>Nonprofits - Hack4Impact Cal Poly</title>
      </Head>
      <main>
        <Header title={header.title} description={header.description} button={header.button} illustration="bg-nonprofit-header" />

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
    page: pagesCollection(where:{page:"nonprofits"}) {
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
      }
    }
  }`;

  const res = await contentful.query(pageQuery);
  const data = res.page.items[0];

  const header: HeaderItem = {
    title: data.title,
    description: data.description,
    button: {
      text: data.buttonText,
      link: data.link,
    },
  };
  const faq = data.faq.items as FAQItem[];
  const events: TimelineItems = data.timeline.items.map((item: TimelineCollectionItem) => ({
    event: { name: item.eventName, time: item.timeRange, description: item.description },
    icon: item.icon,
  }));

  return {
    props: {
      header,
      faq,
      events,
    },
  };
}

export default Nonprofits;

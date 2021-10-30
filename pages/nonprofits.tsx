import React from 'react';
import Head from 'next/head';
// import Image from 'next/image';
import contentful from '../utils/contentful';
import {
  FAQItem, TimelineCollectionItem, TimelineItem, TimelineItems, HeaderItem,
} from '../utils/types';

import ButtonLink from '../components/ButtonLink';
import FAQ from '../components/FAQ';
import Timeline from '../components/Timeline';

// import Illustration from '../public/assets/headers/illustration-nonprofits.png';

interface NonprofitsProps {
  header: HeaderItem;
  faq: FAQItem[];
  events: TimelineItem[];
}

/*
<Image
src={Illustration}
alt=""
layout="fill"
objectFit="cover"
className="transform scale-50 translate-x-80 z-10"
/> */

const Nonprofits = (props: NonprofitsProps) => {
  const { header, faq, events } = props;

  return (
    <>
      <Head>
        <title>Nonprofits - Hack4Impact Cal Poly</title>
      </Head>
      <main>
        <div className="bg-nonprofit-header bg-contain bg-no-repeat bg-right">
          <div className="w-1/2 my-auto space-y-6 py-16">
            <h1>{header.title}</h1>
            <p>{header.description}</p>
            <ButtonLink link={header.buttonLink.toString()} text={header.buttonText} />
          </div>
        </div>

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
    buttonText: data.buttonText,
    buttonLink: data.link,
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

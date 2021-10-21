import React from 'react';
import Head from 'next/head';
import contentful from '../utils/contentful';
import { FAQItem } from '../utils/types';

import FAQ from '../components/FAQ';

interface NonprofitsProps {
  faq: FAQItem[]
}

const Nonprofits = (props: NonprofitsProps) => {
  const { faq } = props;

  return (
    <>
      <Head>
        <title>Nonprofits - Hack4Impact Cal Poly</title>
      </Head>
      <main>
        <h1>Nonprofit Organizations</h1>
        <p>for the wonderful folks that make the community :)</p>

        <FAQ questions={faq} />
      </main>
    </>
  );
};

export async function getStaticProps() {
  const pageQuery = `{
    faq: faqCollection(where:{page:"nonprofits"}) {
      items {
        question
        answer
      }
    }
  }`;

  const res = await contentful.query(pageQuery);
  const faq = res.faq.items as FAQItem[];

  return {
    props: {
      faq,
    },
  };
}

export default Nonprofits;

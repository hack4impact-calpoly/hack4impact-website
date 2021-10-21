import React from 'react';
import Head from 'next/head';
import contentful from '../utils/contentful';
import { FAQItem } from '../utils/types';

import FAQ from '../components/FAQ';

interface StudentsProps {
  faq: FAQItem[]
}

const Students = (props: StudentsProps) => {
  const { faq } = props;

  return (
    <>
      <Head>
        <title>Students - Hack4Impact Cal Poly</title>
      </Head>
      <main>
        <h1>Students</h1>
        <p>for the folks who make up the club</p>

        <FAQ questions={faq} />
      </main>
    </>
  );
};

export async function getStaticProps() {
  const pageQuery = `{
    faq: faqCollection(where:{page:"students"}) {
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

export default Students;

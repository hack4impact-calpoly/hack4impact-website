import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import { FAQItem, FAQItems } from '../utils/types';

const Question = (props: FAQItem) => {
  const [expanded, toggleExpand] = useState(false);
  const { question, answer } = props;

  return (
    <div className="space-y-6 my-6">
      <button
        type="button"
        className="w-full flex justify-between items-center text-left cursor-pointer"
        onClick={() => toggleExpand(!expanded)}
        aria-expanded={expanded}
      >
        <h4>{question}</h4>
        <ChevronDownIcon
          className={`h-7 w-7 text-blue flex-shrink-0 transition-transform duration-300 ${
            expanded ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          expanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p>{answer}</p>
      </div>
      <hr />
    </div>
  );
};

const FAQ = (props: FAQItems) => {
  const { questions } = props;

  return (
    <>
      {/* eslint-disable-next-line react/no-array-index-key */}
      {questions.map((q, i) => <Question key={i} question={q.question} answer={q.answer} />)}
    </>
  );
};

export default FAQ;

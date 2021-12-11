import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline';
import { FAQItem, FAQItems } from '../utils/types';

const Question = (props: FAQItem) => {
  const [expanded, toggleExpand] = useState(false);
  const { question, answer } = props;

  return (
    <div className="space-y-6 my-6">
      <div className="flex justify-between items-center">
        <h4>{question}</h4>
        {!expanded && <ChevronDownIcon className="h-7 w-7 text-blue cursor-pointer" onClick={() => toggleExpand(!expanded)} />}
        {expanded && <ChevronUpIcon className="h-7 w-7 text-blue cursor-pointer" onClick={() => toggleExpand(!expanded)} />}
      </div>
      {expanded && <p>{answer}</p>}
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

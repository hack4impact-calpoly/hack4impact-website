import React from 'react';
import Link from 'next/link';
import { ButtonLinkItem } from '../utils/types';

const ButtonLink = (props: ButtonLinkItem) => {
  const { text, link, type } = props;

  const style = type === 'secondary' ? 'text-blue' : 'bg-blue text-white';

  const linkDetectionRegex = /http:\/\/*|https:\/\/*/;

  if (link.match(linkDetectionRegex)) {
    return (
      <div>
        <a
          className={`inline-block border-2 border-blue py-3 px-20 rounded-full ${style}`}
          href={link.toString()}
          target="_blank"
          rel="noreferrer"
        >
          {text}
        </a>
      </div>
    );
  }

  return (
    <div>
      <Link
        href={link.toString()}
        className={`inline-block mb-6 py-3 px-20 border-2 border-blue rounded-full ${style}`}
      >
        {text}
      </Link>
    </div>
  );
};

export default ButtonLink;

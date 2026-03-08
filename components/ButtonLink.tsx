import React from 'react';
import Link from 'next/link';
import { ButtonLinkItem } from '../utils/types';

const ButtonLink = (props: ButtonLinkItem) => {
  const { text, link, type } = props;

  const baseStyles = 'inline-block border-2 border-blue dark:border-blue-light py-3 px-20 rounded-full transition-all duration-200 ease-in-out';

  const primaryStyles = 'bg-blue text-white hover:bg-blue-light hover:border-blue-light active:scale-95';
  const secondaryStyles = 'text-blue dark:text-blue-light hover:bg-blue-lightest dark:hover:bg-white/10 active:scale-95';

  const style = type === 'secondary' ? secondaryStyles : primaryStyles;

  const linkDetectionRegex = /http:\/\/*|https:\/\/*/;

  if (link.match(linkDetectionRegex)) {
    return (
      <div>
        <a
          className={`${baseStyles} ${style}`}
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
        className={`${baseStyles} ${style} mb-6`}
      >
        {text}
      </Link>
    </div>
  );
};

export default ButtonLink;

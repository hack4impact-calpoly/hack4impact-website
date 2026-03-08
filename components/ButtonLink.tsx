import React from 'react';
import Link from 'next/link';
import { ButtonLinkItem } from '../utils/types';

const ButtonLink = (props: ButtonLinkItem) => {
  const { text, link, type } = props;

  const baseStyles = 'inline-block border-2 border-theme-accent py-3 px-20 rounded-full transition-all duration-200 ease-in-out';

  const primaryStyles = 'bg-theme-accent text-white hover:bg-[var(--accent-hover)] hover:border-[var(--accent-hover)] active:scale-95';
  const secondaryStyles = 'text-theme-accent hover:bg-theme-hover active:scale-95';

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

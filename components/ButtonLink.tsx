import React from 'react';
import { ButtonLinkItem } from '../utils/types';

const ButtonLink = (props: ButtonLinkItem) => {
  const { text, link } = props;

  return (
    <a
      className="inline-block border py-3 px-20 rounded-full bg-blue text-white"
      href={link.toString()}
    >
      {text}
    </a>
  );
};

export default ButtonLink;

import React from 'react';
import { HeaderItem } from '../utils/types';
import ButtonLink from './ButtonLink';

const Header = (props: HeaderItem) => {
  // see `tailwind.config.js` for illustration options
  const {
    title, description, button, illustration,
  } = props;

  return (
    <div className={`${illustration} bg-contain bg-no-repeat bg-right`}>
      <div className="w-1/2 my-auto space-y-6 py-16">
        <h1>{title}</h1>
        <p>{description}</p>
        <ButtonLink link={button.link.toString()} text={button.text} />
      </div>
    </div>
  );
};

export default Header;

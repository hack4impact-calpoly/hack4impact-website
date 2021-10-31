import React from 'react';
import { HeaderItem } from '../utils/types';
import CTA from './CTA';

const Header = (props: HeaderItem) => {
  // see `tailwind.config.js` for illustration options
  const {
    title, description, button, illustration,
  } = props;

  return (
    <div className={`${illustration} bg-contain bg-no-repeat bg-right py-16`}>
      <CTA button={{ link: button.link, text: button.text }}>
        <h1>{title}</h1>
        <p>{description}</p>
      </CTA>
    </div>
  );
};

export default Header;

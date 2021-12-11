import React from 'react';
import { HeaderItem } from '../utils/types';
import CTA from './CTA';

const Header = (props: HeaderItem) => {
  // see `tailwind.config.js` for illustration options
  const {
    title, description, button, illustration,
  } = props;

  return (
    <div className={`lg:${illustration} bg-contain bg-no-repeat bg-right py-8 md:py-12 lg:py-12`}>
      <div className="lg:w-1/2">
        <CTA button={{ link: button.link, text: button.text }}>
          <h1 className="mb-6">{title}</h1>
          <p>{description}</p>
        </CTA>
      </div>
    </div>
  );
};

export default Header;

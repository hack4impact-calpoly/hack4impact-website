import React from 'react';
import { CTAItem } from '../utils/types';
import ButtonLink from './ButtonLink';

const CTA = (props: CTAItem) => {
  const { children, button } = props;

  return (
    <div className="w-1/2 flex flex-col justify-between space-y-6">
      <div className="space-y-3">{children}</div>
      <div>
        <ButtonLink text={button.text} link={button.link} type={button.type} />
      </div>
    </div>
  );
};

export default CTA;

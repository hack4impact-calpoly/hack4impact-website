import React from 'react';
import { CTAItem } from '../utils/types';
import ButtonLink from './ButtonLink';

const CTA = (props: CTAItem) => {
  const { children, button } = props;

  return (
    <div className="space-y-6">
      <div className="space-y-3">{children}</div>
      <div className="w-full">
        <ButtonLink text={button.text} link={button.link} type={button.type} />
      </div>
    </div>
  );
};

export default CTA;

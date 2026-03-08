import React from 'react';

import { MemberCardItem } from '../utils/types';
import LinkedinLogo from './LinkedinLogo';

const MemberCard = (props: MemberCardItem) => {
  const {
    image, name, title, linkedin,
  } = props;

  return (
    <div className="group mx-auto space-y-1 p-3 rounded-lg transition-all duration-200 hover:shadow-card">
      <div className="w-full h-48 mb-2 overflow-hidden rounded-md">
        <img
          src={image.url?.toString() || '/assets/default_profile.png'}
          alt={`Headshot of ${name}`}
          width={299}
          height={246}
          loading="lazy"
          className="h-full w-full object-cover rounded-md bg-gradient-to-t from-blue-200 to-blue-lightest transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      {linkedin ? (
        <a href={linkedin.toString().startsWith('http') ? linkedin.toString() : `https://${linkedin}`} target="_blank" rel="noopener noreferrer" className="text-xl leading-6 text-theme-accent hover:underline">
          {name}
        </a>
      ) : (
        <p className="text-xl leading-6">{name}</p>
      )}
      <p className="text-md text-theme-muted italic leading-6">{title}</p>
      {linkedin && <LinkedinLogo link={linkedin.toString()} fullLogo />}
    </div>
  );
};

export default MemberCard;

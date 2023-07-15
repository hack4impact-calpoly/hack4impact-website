import React from 'react';

import { MemberCardItem } from '../utils/types';
import LinkedinLogo from './LinkedinLogo';

const MemberCard = (props: MemberCardItem) => {
  const {
    image, name, title, linkedin,
  } = props;

  return (
    <div className="mx-auto space-y-1">
      <div className="w-full h-48 mb-2">
        <img
          src={image.url?.toString() || '/assets/default_profile.png'}
          alt={`Headshot of ${name}`}
          width={299}
          height={246}
          className="h-full object-cover rounded-md bg-gradient-to-t from-blue-200 to-blue-lightest"
        />
      </div>
      <p className="text-xl leading-6">{name}</p>
      <p className="text-md text-gray-600 italic leading-6">{title}</p>
      {linkedin && <LinkedinLogo link={linkedin.toString()} fullLogo />}
    </div>
  );
};

export default MemberCard;

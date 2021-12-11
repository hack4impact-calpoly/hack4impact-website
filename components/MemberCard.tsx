import React from 'react';
import Image from 'next/image';

import { MemberCardItem } from '../utils/types';
import LinkedinLogo from './LinkedinLogo';
import defaultProfilePicture from '../public/assets/default_profile.png';

const MemberCard = (props: MemberCardItem) => {
  const {
    image, name, title, linkedin,
  } = props;

  return (
    <div className="mx-auto space-y-1">
      <Image
        src={image.url?.toString() || defaultProfilePicture}
        alt={`Headshot of ${name}`}
        width={299}
        height={246}
        className="object-cover rounded-md bg-gradient-to-t from-blue-200 to-blue-lightest"
      />
      <p className="text-xl leading-6">{name}</p>
      <p className="text-md text-gray-600 italic leading-6">{title}</p>
      {linkedin && <p><LinkedinLogo link={linkedin.toString()} fullLogo /></p>}
    </div>
  );
};

export default MemberCard;

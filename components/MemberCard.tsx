import React from 'react';
import Image from 'next/image';

import styles from '../styles/MemberCard.module.css';
import { MemberCardItem } from '../utils/types';
import LinkedinLogo from './LinkedinLogo';
import defaultProfilePicture from '../public/assets/default_profile.png';

interface HeadshotItem {
  name: string;
  image: {
    url: String;
    alt?: String;
  }
}

const Headshot = (props: HeadshotItem) => {
  const { image, name } = props;

  return (
    <div className="h-48">
      <Image
        src={image.url?.toString() || defaultProfilePicture}
        alt={`Headshot of ${name}`}
        width={299}
        height={246}
        className="object-cover rounded-md bg-gradient-to-t from-blue-200 to-blue-lightest"
      />
    </div>
  );
};

const MemberCard = (props: MemberCardItem) => {
  const {
    image, name, title, linkedin,
  } = props;

  return (
    <div>
      <Headshot image={image} name={name.toString()} />
      <p className={styles.memberName}>{name}</p>
      <p className={styles.memberTitle}>{title}</p>
      {linkedin && <LinkedinLogo link={linkedin.toString()} fullLogo />}
    </div>
  );
};

export default MemberCard;

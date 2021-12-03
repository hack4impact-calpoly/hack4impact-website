/* eslint-disable react/require-default-props */
import React from 'react';
import Image from 'next/image';

import styles from '../styles/MemberCard.module.css';
import { MemberCardItem } from '../utils/types';

const blobshape = require('blobshape');

interface HeadshotItem {
  name?: string;
  image?: {
    url: String;
    alt?: String;
  }
}

const Headshot = (props: HeadshotItem) => {
  const { image, name } = props;

  if (image && image.url) {
    return (
      <div className="h-48">
        <Image
          src={image.url?.toString()}
          alt={image.alt?.toString() || `Headshot of ${name}`}
          width={299}
          height={246}
          className="object-cover rounded-md"
        />
      </div>
    );
  }

  const { path } = blobshape({ size: 82, edges: 8 });
  const blob = <svg viewBox="-10 0 100 100" className="stroke-current fill-current text-blue-light"><path d={path} /></svg>;

  return (
    <div className="h-48 rounded-md bg-gradient-to-t from-blue-200 to-blue-lightest">
      {blob}
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
      {linkedin && (
        <a
          href={linkedin.toString()}
          className={styles.linkedIn}
        >
          <span className={styles.linkedInLogo}>in</span>
          LinkedIn
        </a>
      )}
    </div>
  );
};

export default MemberCard;

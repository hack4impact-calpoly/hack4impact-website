import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/MemberCard.module.css';

const memberCard = (props: {
  image: string;
  alt: string;
  name: string;
  title: string;
  linkedin: string;
}) => {
  const {
    image, alt, name, title, linkedin,
  } = props;

  return (
    <div className={styles.card}>
      <Image
        src={image}
        alt={alt}
        width={299}
        height={246}
        className={styles.memberImage}
      />
      <p className={styles.memberName}>{name}</p>
      <p className={styles.memberTitle}>{title}</p>
      <Link href={linkedin}>
        <a className={styles.linkedIn}>
          <span className={styles.linkedInLogo}>in</span>
          LinkedIn
        </a>
      </Link>
    </div>
  );
};

export default memberCard;

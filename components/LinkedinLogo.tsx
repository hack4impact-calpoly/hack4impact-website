import React from 'react';
import styles from '../styles/LinkedinLogo.module.css';

interface LinkedinLogoProps {
  link: string;
  fullLogo?: boolean;
}

const LinkedinLogo = (props: LinkedinLogoProps) => {
  const { link, fullLogo } = props;

  return (
    <a
      href={link}
      className={styles.linkedIn}
      target="_blank"
      rel="noreferrer"
    >
      <span className={styles.linkedInLogo}>in</span>
      {fullLogo && 'LinkedIn'}
    </a>
  );
};

LinkedinLogo.defaultProps = { fullLogo: false };

export default LinkedinLogo;

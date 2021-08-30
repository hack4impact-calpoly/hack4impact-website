import React from 'react';
import Image from 'next/image';
import styles from '../styles/InfoCard.module.css';

interface InfoCardProps {
    title: string;
    image: string;
    body: string;
    alt: string;
}

const InfoCard: React.FC<InfoCardProps> = (props: InfoCardProps): React.ReactElement => {
  const {
    title, image, body, alt,
  } = props;
  return (
    <div>
      {image && (
      <Image
        src={image}
        alt={alt}
        width={380}
        height={264}
        className={styles.ICImage}
      />
      )}
      <h4 className={styles.ICTitle}>{title}</h4>
      <p className={styles.ICBody}>{body}</p>
    </div>
  );
};

export default InfoCard;

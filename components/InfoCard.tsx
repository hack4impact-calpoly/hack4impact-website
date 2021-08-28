import * as React from 'react';
import styles from '../styles/InfoCard.module.css';

interface InfoCardProps {
    Title: string;
    Image: string;
    Body: string;
}

const InfoCard: React.FC<InfoCardProps> = (props: InfoCardProps): React.ReactElement => {
  const { Title, Image, Body } = props;
  return (
    <div>
      {Image && <img src={Image} alt="InfoCard" className={styles.ICImage} />}
      <div className={styles.ICTitle}>{Title}</div>
      <p className={styles.ICBody}>{Body}</p>
    </div>
  );
};

export default InfoCard;

import * as React from "react";
import styles from "../styles/InfoCard.module.css";

interface InfoCardProps {
    Title: string;
    Image?: string;
    Body: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({ Title, Image, Body }) => (
    <div>
        {Image && <img src={Image} className={styles.ICImage} />}
        <div className={styles.ICTitle}>{Title}</div>
        <p className={styles.ICBody}>{Body}</p>
    </div>
);

import styles from '../styles/PageCard.module.css';

const PageCard = ({ children }) => (
  <div className={styles.card}>{ children }</div>
);

export default PageCard;

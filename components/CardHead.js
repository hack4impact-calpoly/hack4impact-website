import styles from '../styles/CardHead.module.css';

const CardHead = props => {
  const overlay = props.overlay ? styles.overlay : '';
  const height = props.size === 'full' ? styles.tall : styles.short;

  const headClass = `${styles.head} ${overlay} ${height}`;

  return (
    <div className={headClass}>
      <img
        src={props.img}
        alt={props.alt || ''}
        width='280' height='120'
      />
      <h3 className={styles.title}>{props.title}</h3>
    </div>
  );
};

export default CardHead;

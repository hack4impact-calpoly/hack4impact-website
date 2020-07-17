import styles from "../styles/Timeline.module.css";

export const Timeline = ({ title, children }) => {
    return (
        <>
           <h2 className={styles.header}>{title}</h2>
           <ul className={styles.timeline}>
               {children}
           </ul>
        </>
    );
};

export const Event = ({ title, date, children }) => {
    return (
       <li className={styles.event}>
           <span className={styles.title}>{title}</span>
           <span className={styles.date}>{date}</span>
           <p>{children}</p>
       </li>
    );
};

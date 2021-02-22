import Link from 'next/link';
import { Button } from 'react-bootstrap';
import styles from '../styles/ButtonLink.module.css';

const ButtonLink = (props) => {
  let style = styles.button;
  if (props.white) style += ' ' + styles.white;

  return (
    props.target ? (
      <a href={props.link} target={props.target} rel="noreferrer">
        <Button className={style}>{props.children}</Button>
      </a>
    ) : (
      <Link href={props.link}>
        <a>
          <Button className={style}>{props.children}</Button>
        </a>
      </Link>
    )
  );
}

export default ButtonLink;

import CardHead from "../components/CardHead";
import ButtonLink from '../components/ButtonLink';
import styles from "../styles/ProjectCard.module.css";

const ProjectCard = props => {
  let height = '';
  if (props.blur) height = styles.stretch;
  if (props.big) height = styles.squeeze;

  return (
    <div className={`${styles.card} ${props.full ? styles.full : ''}`}>
      <CardHead
        img={props.image}
        alt={props.alt || ''}
        title={props.title}
        overlay={props.blur ? true : false}
        size={props.big ? 'full' : 'cut'}
      />

      <div className={`${styles.info} ${height}`}>
        {props.subtitle && <p className={styles.subtitle}>{props.subtitle}</p>}
        {props.blurb && <p className={styles.blurb}>{props.blurb}</p>}

        {props.link &&
          <ButtonLink link={props.link}>
            {props.buttonText || 'Read more'}
          </ButtonLink>
        }
      </div>
    </div>
  );
}

export default ProjectCard;

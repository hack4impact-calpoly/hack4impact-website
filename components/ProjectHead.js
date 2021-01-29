import { GoHome, GoDeviceMobile, GoMarkGithub } from "react-icons/go";
import styles from "../styles/ProjectHead.module.css";

const ProjectHead = props => (
  <div className={styles.headHolder}>
    <img className={styles.backgroundCard} src={props.backgroundURL} alt='' />
    <div className={styles.headInfo}>
      <h1>{props.title}</h1>
      <div className={styles.links}>
        {props.nonprofitLink &&
          <a href={props.nonprofitLink} aria-label="nonprofit website"
            target="_blank" rel="noreferrer"><GoHome /></a>
        }
        {props.projectLink &&
          <a href={props.projectLink} aria-label="project page"
            target="_blank" rel="noreferrer"><GoDeviceMobile /></a>
        }
        {props.githubLink &&
          <a href={props.githubLink} aria-label="github repository"
            target="_blank" rel="noreferrer"><GoMarkGithub /></a>
        }
      </div>
    </div>
  </div>
);

export default ProjectHead;

import Link from "next/link";

import { Button } from "react-bootstrap";
import styles from "../styles/ProjectCard.module.css";

const ProjectCard = props => (
<div className={styles.projectCard}>
  <div className={styles.headHolder}>
    <img
      src={props.background.url}
      className={styles.backgroundCard}
      alt="" width="280" height="120"
    />
    <h3 className={styles.title}>{props.nonprofitName}</h3>
  </div>

  <div className={styles.projInfo}>
    <p>{props.blurb}</p>
    <Link href={"/projects/"+props.slug}>
      <a><Button>Read more</Button></a>
    </Link>
  </div>
</div>
);

export default ProjectCard;

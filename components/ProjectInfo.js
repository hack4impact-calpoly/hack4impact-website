import { GoHome, GoDeviceMobile, GoMarkGithub } from "react-icons/go";
import styles from "../styles/ProjectInfo.module.css";

const Member = props => {
  return (
    <div className={styles.memberCard}>
      <img src={props.profilePicture.url} alt={"picture of "+props.fullName} />
      <b>{props.fullName}</b>
      <p>{props.role}</p>
    </div>
  );
}

const generateRoleList = (members, role) => {
  if (members === undefined) return null;
  const roleList = members.items.map(member => (
    <Member key={member.fullName} {...member} role={role} />
  ));
  return roleList;
}

const TechIcon = props => {
  return (
    <div className={styles.techCard}>
      <img src={props.icon.url} alt={props.name+" logo"} />
      <a href={props.link} target="_blank">{props.name}</a>
    </div>
  );
}

const ProjectHead = props => (
  <div className={styles.headHolder}>
    <img className={styles.backgroundCard} src={props.backgroundURL} alt='' />
    <div className={styles.headInfo}>
      <h1>{props.title}</h1>
      <div className={styles.links}>
        {props.nonprofitLink &&
          <a href={props.nonprofitLink} aria-label="nonprofit website" target="_blank"><GoHome /></a>
        }
        {props.projectLink &&
          <a href={props.projectLink} aria-label="project page" target="_blank"><GoDeviceMobile /></a>
        }
        <a href={props.githubLink} aria-label="github repository" target="_blank"><GoMarkGithub /></a>
      </div>
    </div>
  </div>
)

const ProjectInfo = props => {
  // this could be cleaned up if Contentful let us add tags to references :/
  const pmList = generateRoleList(
    props.project.productManagerCollection, "Product Manager");
  const techLeadList = generateRoleList(
    props.project.techLeadManagerCollection, "Tech Lead");
  const designerList = generateRoleList(
    props.project.designerManagerCollection, "Designer");
  const devList = generateRoleList(
    props.project.devsCollection, "Developer");

  return (
    <div className={styles.project}>
      <ProjectHead
        backgroundURL={props.project.background.url}
        title={props.project.title}
        nonprofitLink={props.project.nonprofitLink}
        projectLink={props.project.projectLink}
        githubLink={props.project.githubLink}
      />
      <em id={styles.year}>{props.project.year}</em>

      <article>
        <h3>Project Description</h3>
        <p>{props.project.description}</p>
      </article>

      <article>
        <h3>Tech Stack</h3>
        <div className={styles.techs}>
        {
          props.project.techStackCollection.items.map(ts => (
            <TechIcon key={ts.name} {...ts} />
          ))
        }
        </div>
      </article>

      <article>
        <h3>Team Members</h3>
        <div className={styles.members}>
          {pmList} {techLeadList} {designerList} {devList}
        </div>
      </article>
    </div>
  );
}

export default ProjectInfo;

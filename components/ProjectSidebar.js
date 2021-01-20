import Link from "next/link";
import styles from "../styles/ProjectSidebar.module.css";

const groupByYear = projectList => {
  const projects = {}

  if (projectList === undefined) return projects;

  projectList.map(p => {
    if (projects[p.year] === undefined) projects[p.year] = [];
    projects[p.year].push(p);
  });

  return projects;
}

const YearProjectLinks = props => {
  const projectLinks = props.projects.map(p => (
    <Link href={"/projects/"+p.slug} key={p.slug}>
      <a>{p.title}</a>
    </Link>
  ));

  return projectLinks;
}

const ProjectSidebar = props => {
  const projects = groupByYear(props.projects);
  const yearGroup = Object.keys(projects).map(year => (
    <div className={styles.year} key={year}>
      <h4>{year}</h4>
      <YearProjectLinks projects={projects[year]} />
    </div>
  ));

  return (
    <div className={styles.sidebar}>
      <Link href="/projects"><h3>Our Projects</h3></Link>
      <div>{yearGroup}</div>
    </div>
  );
}

export default ProjectSidebar;

import React from 'react';
import Link from 'next/link';
import { ProjectCardItem } from '../utils/types';

const ProjectCard = (props: {project: ProjectCardItem}) => {
  const { project } = props;

  return (
    <div className="space-y-3 my-2 max-w-sm mx-auto">
      <img
        src={project.backgroundImg.toString()}
        className="rounded-md"
        alt=""
        width="406"
        height="272"
      />
      <div className="flex space-x-3">
        <h4>{project.title}</h4>
        <h5 className="self-start">{project.year}</h5>
      </div>

      <p>{project.blurb}</p>
      <p>
        <Link
          href={`projects/${project.slug}`}
          className="font-strong text-blue text-lg"
        >
          Read more &rarr;
        </Link>
      </p>
    </div>
  );
};

export default ProjectCard;

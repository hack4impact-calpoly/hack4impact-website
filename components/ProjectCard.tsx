import React from 'react';
import Link from 'next/link';
import { ProjectCardItem } from '../utils/types';

const ProjectCard = (props: {project: ProjectCardItem}) => {
  const { project } = props;

  return (
    <div className="group space-y-3 my-2 max-w-sm mx-auto rounded-lg p-4 transition-all duration-200 hover:shadow-card-hover">
      <div className="overflow-hidden rounded-md">
        <img
          src={project.backgroundImg.toString()}
          className="rounded-md transition-transform duration-300 group-hover:scale-102"
          alt=""
          width="406"
          height="272"
          loading="lazy"
        />
      </div>
      <div className="flex space-x-3">
        <h4>{project.title}</h4>
        <h5 className="self-start">{project.year}</h5>
      </div>

      <p>{project.blurb}</p>
      <p>
        <Link
          href={`projects/${project.slug}`}
          className="font-strong text-blue text-lg inline-flex items-center transition-colors duration-200 hover:text-blue-light"
        >
          Read more
          {' '}
          <span className="inline-block ml-1 transition-transform duration-200 group-hover:translate-x-1">
            &rarr;
          </span>
        </Link>
      </p>
    </div>
  );
};

export default ProjectCard;

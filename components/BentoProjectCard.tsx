import React from 'react';
import Link from 'next/link';
import { ProjectCardItem } from '../utils/types';

type CardSize = 'lg' | 'md' | 'sm';

interface BentoProjectCardProps {
  project: ProjectCardItem;
  size: CardSize;
  index: number;
}

const sizeClasses: Record<CardSize, string> = {
  lg: 'col-span-2',
  md: 'col-span-1',
  sm: 'col-span-1',
};

const mobileImageHeightClass = 'h-48';

const imageHeightClasses: Record<CardSize, string> = {
  lg: 'sm:h-40 md:h-48 lg:h-56',
  md: 'sm:h-36 md:h-44 lg:h-52',
  sm: 'sm:h-32 md:h-40 lg:h-48',
};

const BentoProjectCard = ({ project, size, index }: BentoProjectCardProps) => {
  const animationDelay = index * 75;

  return (
    <div
      className={`
        group relative overflow-hidden rounded-xl bg-white
        shadow-card transition-all duration-300
        hover:shadow-card-hover hover:-translate-y-1
        animate-fade-up
        ${sizeClasses[size]}
      `}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="block h-full"
      >
        {/* Image container with fixed height */}
        <div className={`relative overflow-hidden ${mobileImageHeightClass} ${imageHeightClasses[size]}`}>
          <img
            src={project.backgroundImg.toString()}
            className="absolute inset-0 h-full w-full object-cover transform-gpu transition-transform duration-700 ease-out group-hover:scale-102 motion-reduce:transition-none motion-reduce:transform-none"
            alt={`${project.title} project`}
            loading="lazy"
          />
        </div>

        {/* Info box at bottom */}
        <div className="p-3 md:p-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-medium text-blue bg-blue-lightest px-2 py-0.5 rounded">
              {project.year}
            </span>
          </div>
          <h4
            className={`
              font-strong text-gray-900 mb-1 line-clamp-2
              ${size === 'lg' ? 'text-lg md:text-xl' : 'text-sm md:text-base'}
            `}
          >
            {project.title}
          </h4>
          <p
            className={`
              text-gray-600 line-clamp-2
              ${size === 'lg' ? 'text-sm' : 'text-xs md:text-sm'}
            `}
          >
            {project.blurb}
          </p>
        </div>

        {/* Hover arrow indicator */}
        <div className="absolute top-3 right-3 opacity-0 transform translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
          <span className="inline-flex items-center justify-center w-7 h-7 bg-white rounded-full text-blue shadow-md">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </Link>
    </div>
  );
};

export default BentoProjectCard;

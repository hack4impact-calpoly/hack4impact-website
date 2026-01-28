import React, { Key } from 'react';
import { ProjectCardItem } from '../utils/types';
import BentoProjectCard from './BentoProjectCard';

interface BentoGridProps {
  projects: ProjectCardItem[];
  showFeaturedLarge: boolean;
}

type CardSize = 'lg' | 'md' | 'sm';

const getCardSize = (
  index: number,
  totalProjects: number,
  showFeaturedLarge: boolean,
): CardSize => {
  if (!showFeaturedLarge) return 'sm';

  // First project is always large when featured is enabled
  if (index === 0) return 'lg';

  // Create visual interest with medium cards
  // Pattern: lg, sm, md, sm, sm, md, sm, sm...
  if (totalProjects >= 3 && index === 2) return 'md';
  if (totalProjects >= 6 && index === 5) return 'md';

  return 'sm';
};

const BentoGrid = ({ projects, showFeaturedLarge }: BentoGridProps) => {
  if (projects.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-fr">
      {projects.map((project, index) => (
        <BentoProjectCard
          key={project.slug as Key}
          project={project}
          size={getCardSize(index, projects.length, showFeaturedLarge)}
          index={index}
        />
      ))}
    </div>
  );
};

export default BentoGrid;

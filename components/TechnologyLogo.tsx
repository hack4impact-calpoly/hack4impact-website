import React from 'react';

interface ProjectTechnologyProps {
  tech: string;
}

const TechnologyLogo = (props: ProjectTechnologyProps) => {
  const { tech } = props;

  function getLogoSrc(techName: string) {
    if (techName === 'AWS') return '/assets/technologies/aws.png';
    if (techName === 'Django') return '/assets/technologies/django.png';
    if (techName === 'Express.js') return '/assets/technologies/express.png';
    if (techName === 'Heroku') return '/assets/technologies/heroku.png';
    if (techName === 'MongoDB') return '/assets/technologies/mongo.png';
    if (techName === 'Node.js') return '/assets/technologies/node.png';
    if (techName === 'PostgreSQL') return '/assets/technologies/postgresql.png';
    if (techName === 'React') return '/assets/technologies/react.png';
    if (techName === 'Swift') return '/assets/technologies/swift.png';
    throw new Error(`Image missing for technology '${techName}'`);
  }

  const logoSrc = getLogoSrc(tech);

  return <img src={logoSrc} alt={tech} className="object-contain h-24 w-full" />;
};

export default TechnologyLogo;

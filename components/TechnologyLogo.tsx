import React from 'react';
import Image from 'next/image';

import AWSLogo from '../public/assets/technologies/aws.png';
import DjangoLogo from '../public/assets/technologies/django.png';
import ExpressLogo from '../public/assets/technologies/express.png';
import HerokuLogo from '../public/assets/technologies/heroku.png';
import MongoLogo from '../public/assets/technologies/mongo.png';
import NodeLogo from '../public/assets/technologies/node.png';
import PostgreSQLLogo from '../public/assets/technologies/postgresql.png';
import ReactLogo from '../public/assets/technologies/react.png';
import SwiftLogo from '../public/assets/technologies/swift.png';

interface ProjectTechnologyProps {
  tech: string;
}

const TechnologyLogo = (props: ProjectTechnologyProps) => {
  const { tech } = props;

  function getLogoSrc(techName: string) {
    if (techName === 'AWS') return AWSLogo;
    if (techName === 'Django') return DjangoLogo;
    if (techName === 'Express.js') return ExpressLogo;
    if (techName === 'Heroku') return HerokuLogo;
    if (techName === 'MongoDB') return MongoLogo;
    if (techName === 'Node.js') return NodeLogo;
    if (techName === 'PostgreSQL') return PostgreSQLLogo;
    if (techName === 'React') return ReactLogo;
    if (techName === 'Swift') return SwiftLogo;
    throw new Error(`Image missing for technology '${techName}'`);
  }

  const logoSrc = getLogoSrc(tech);

  return <Image src={logoSrc as unknown as string} alt={tech} objectFit="contain" />;
};

export default TechnologyLogo;

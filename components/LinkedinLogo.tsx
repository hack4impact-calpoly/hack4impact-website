import React from 'react';

interface LinkedinLogoProps {
  link: string;
  fullLogo?: boolean;
}

const LinkedinLogo = (props: LinkedinLogoProps) => {
  const { link, fullLogo } = props;

  return (
    <a
      href={link}
      className="flex"
      target="_blank"
      rel="noreferrer"
    >
      <span className="h-6 w-6 bg-blue text-white text-center rounded-md mr-1 font-strong text-lg">in</span>
      {fullLogo && <p className="text-blue font-bold">LinkedIn</p>}
    </a>
  );
};

LinkedinLogo.defaultProps = { fullLogo: false };

export default LinkedinLogo;

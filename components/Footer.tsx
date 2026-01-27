import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import config from '../config';

const SocialIcon = ({ href, src, alt }: { href: string; src: string; alt: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-block transition-all duration-200 hover:scale-110 hover:opacity-80"
  >
    <img
      width="45"
      height="45"
      src={src}
      alt={alt}
    />
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="block text-white text-lg transition-all duration-200 hover:underline hover:text-blue-lightest"
  >
    {children}
  </Link>
);

const Footer = () => (
  <footer className={`${styles.footer} h-96 w-full flex justify-between md:px-12 lg:px-24 bg-blue-dark`}>
    <div className="w-4/5 md:w-1/2 mx-auto space-y-5 text-white my-auto md:pr-4">
      <div className="flex justify-center md:justify-start items-center space-x-2">
        <img
          src={config.assets.logo_white as unknown as string}
          width="39"
          height="39"
          alt="hack4impact footer logo"
        />
        <h3 className="text-white text-2xl">Hack4Impact Cal Poly</h3>
      </div>

      <p className="text-center mx-auto md:text-left max-w-md md:mx-0">
        If you have any questions, reach out to us at
        {' '}
        <a
          className="text-white transition-all duration-200 hover:underline hover:text-blue-lightest"
          href="mailto:calpoly@hack4impact.org"
        >
          calpoly@hack4impact.org
        </a>
      </p>
      <div className="text-center md:text-left space-x-8">
        <SocialIcon
          href="https://www.facebook.com/hack4impactcalpoly"
          src={config.assets.facebook as unknown as string}
          alt="Facebook logo"
        />
        <SocialIcon
          href="https://www.youtube.com/channel/UCQwMzg4KKlRxRaBxB9cufyg"
          src={config.assets.youtube as unknown as string}
          alt="Youtube logo"
        />
        <SocialIcon
          href="https://www.instagram.com/hack4impactcalpoly"
          src={config.assets.instagram as unknown as string}
          alt="Instagram logo"
        />
        <SocialIcon
          href="https://www.github.com/hack4impact-calpoly/"
          src={config.assets.github as unknown as string}
          alt="Github logo"
        />
      </div>
      <p className="text-center mx-auto md:text-left max-w-md md:mx-0 italic">
        Sponsored by
        {' '}
        <a
          className="text-white transition-all duration-200 hover:underline hover:text-blue-lightest"
          href="https://www2.deloitte.com/us/en.html"
          rel="noreferrer"
        >
          Deloitte
        </a>
        .
      </p>
    </div>

    <div className="hidden md:w-1/2 md:flex my-auto">
      <div className="w-1/3 space-y-3 px-2">
        <h3 className="text-white text-2xl">General</h3>
        <FooterLink href="/about">About</FooterLink>
        <FooterLink href="/projects">Projects</FooterLink>
      </div>
      <div className="w-1/3 space-y-3 px-2">
        <h3 className="text-white text-2xl">Apply</h3>
        <FooterLink href="/students">Students</FooterLink>
        <FooterLink href="/nonprofits">Nonprofits</FooterLink>
      </div>
      <div className="w-1/3 space-y-3 px-2">
        <h3 className="text-white text-2xl">Support</h3>
        {/* <FooterLink href="/sponsor">Sponsor</FooterLink> */}
        <FooterLink href="/donate">Donate</FooterLink>
      </div>
    </div>
  </footer>
);

export default Footer;

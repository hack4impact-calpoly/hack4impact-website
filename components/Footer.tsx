import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';
import config from '../config';

const Footer = () => (
  <footer className={`${styles.footer} h-96 w-full flex justify-between px-24 bg-blue-dark`}>
    <div className="max-w-md space-y-5 text-white my-auto">
      <div className="flex items-center space-x-2">
        <Image
          src={config.assets.logo_white}
          width="39"
          height="39"
          alt="hack4impact footer logo"
        />
        <h3 className="text-white text-2xl">Hack4Impact Cal Poly</h3>
      </div>

      <p>
        If you have any questions, reach out to us at
        {' '}
        <a className="text-white" href="mailto:calpoly@hack4impact.org">calpoly@hack4impact.org</a>
      </p>
      <div className="space-x-8">
        <a
          href="https://www.facebook.com/hack4impactcalpoly"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            width="45"
            height="45"
            src={config.assets.facebook}
            alt="Facebook logo"
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UCQwMzg4KKlRxRaBxB9cufyg"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            width="45"
            height="45"
            src={config.assets.youtube}
            alt="Youtube logo"
          />
        </a>
        <a
          href="https://www.instagram.com/hack4impactcalpoly"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            width="45"
            height="45"
            src={config.assets.instagram}
            alt="Instagram logo"
          />
        </a>
        <a
          href="https://www.github.com/hack4impact-calpoly/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            width="45"
            height="45"
            src={config.assets.github}
            alt="Github logo"
          />
        </a>
      </div>
    </div>
    <div className="flex flex-wrap space-x-24 my-auto">
      <div className="flex flex-col space-y-3">
        <h3 className="text-white text-2xl">Quick Links</h3>
        <Link href="/about"><a className="text-white">About</a></Link>
        <Link href="/projects"><a className="text-white">Projects</a></Link>
      </div>
      <span className="flex flex-col space-y-3">
        <h3 className="text-white text-2xl">Apply</h3>
        <Link href="/students"><a className="text-white">Students</a></Link>
        <Link href="/nonprofits"><a className="text-white">Nonprofits</a></Link>
      </span>
      <span className="flex flex-col space-y-3">
        <h3 className="text-white text-2xl">Support</h3>
        <Link href="/sponsor"><a className="text-white">Sponsor</a></Link>
        <Link href="/donate"><a className="text-white">Donate</a></Link>
      </span>
    </div>
  </footer>
);

export default Footer;

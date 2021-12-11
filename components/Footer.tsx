import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';
import config from '../config';

const Footer = () => (
  <footer className={`${styles.footer} h-96 w-full flex justify-between md:px-12 lg:px-24 bg-blue-dark`}>
    <div className="w-4/5 md:w-1/2 mx-auto space-y-5 text-white my-auto md:pr-4">
      <div className="flex justify-center md:justify-start items-center space-x-2">
        <Image
          src={config.assets.logo_white}
          width="39"
          height="39"
          alt="hack4impact footer logo"
        />
        <h3 className="text-white text-2xl">Hack4Impact Cal Poly</h3>
      </div>

      <p className="text-center mx-auto md:text-left max-w-md md:mx-0">
        If you have any questions, reach out to us at
        {' '}
        <a className="text-white" href="mailto:calpoly@hack4impact.org">calpoly@hack4impact.org</a>
      </p>
      <div className="text-center md:text-left space-x-8">
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

    <div className="hidden md:w-1/2 md:flex my-auto">
      <div className="w-1/3 space-y-3 px-2">
        <h3 className="text-white text-2xl">General</h3>
        <Link href="/about"><a className="block text-white text-lg">About</a></Link>
        <Link href="/projects"><a className="block text-white text-lg">Projects</a></Link>
      </div>
      <div className="w-1/3 space-y-3 px-2">
        <h3 className="text-white text-2xl">Apply</h3>
        <Link href="/students"><a className="block text-white text-lg">Students</a></Link>
        <Link href="/nonprofits"><a className="block text-white text-lg">Nonprofits</a></Link>
      </div>
      <div className="w-1/3 space-y-3 px-2">
        <h3 className="text-white text-2xl">Support</h3>
        {/* <Link href="/sponsor"><a className="block text-white text-lg">Sponsor</a></Link> */}
        <Link href="/donate"><a className="block text-white text-lg">Donate</a></Link>
      </div>
    </div>
  </footer>
);

export default Footer;

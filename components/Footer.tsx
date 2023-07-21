import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import config from '../config';

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
        <a className="text-white" href="mailto:calpoly@hack4impact.org">calpoly@hack4impact.org</a>
      </p>
      <div className="text-center md:text-left space-x-8">
        <a
          href="https://www.facebook.com/hack4impactcalpoly"
          target="_blank"
          rel="noreferrer"
        >
          <img
            width="45"
            height="45"
            src={config.assets.facebook as unknown as string}
            alt="Facebook logo"
            className="inline-block"
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UCQwMzg4KKlRxRaBxB9cufyg"
          target="_blank"
          rel="noreferrer"
        >
          <img
            width="45"
            height="45"
            src={config.assets.youtube as unknown as string}
            alt="Youtube logo"
            className="inline-block"
          />
        </a>
        <a
          href="https://www.instagram.com/hack4impactcalpoly"
          target="_blank"
          rel="noreferrer"
        >
          <img
            width="45"
            height="45"
            src={config.assets.instagram as unknown as string}
            alt="Instagram logo"
            className="inline-block"
          />
        </a>
        <a
          href="https://www.github.com/hack4impact-calpoly/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            width="45"
            height="45"
            src={config.assets.github as unknown as string}
            alt="Github logo"
            className="inline-block"
          />
        </a>
      </div>
      <p className="text-center mx-auto md:text-left max-w-md md:mx-0 italic">
        Sponsored by
        {' '}
        <a
          className="text-white hover:underline"
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
        <Link href="/about" className="block text-white text-lg">About</Link>
        <Link href="/projects" className="block text-white text-lg">Projects</Link>
      </div>
      <div className="w-1/3 space-y-3 px-2">
        <h3 className="text-white text-2xl">Apply</h3>
        <Link href="/students" className="block text-white text-lg">Students</Link>
        <Link href="/nonprofits" className="block text-white text-lg">Nonprofits</Link>
      </div>
      <div className="w-1/3 space-y-3 px-2">
        <h3 className="text-white text-2xl">Support</h3>
        {/* <Link href="/sponsor"><a className="block text-white text-lg">Sponsor</a></Link> */}
        <Link href="/donate" className="block text-white text-lg">Donate</Link>
      </div>
    </div>
  </footer>
);

export default Footer;

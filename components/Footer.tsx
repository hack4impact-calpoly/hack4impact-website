import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';
import config from '../config';

const Footer = () => (
  <footer className={styles.footer}>
    <span className={styles.footerContactContainer}>
      <span className={styles.logo}>
        <Image
          src={config.assets.logo_white}
          width="39"
          height="39"
          alt="hack4impact footer logo"
        />
        <h3>Hack4Impact Cal Poly</h3>
      </span>

      <p>
        If you have any questions, reach out to us at
        {' '}
        <a href="mailto:calpoly@hack4impact.org">calpoly@hack4impact.org</a>
      </p>
      <span className={styles.footerSocials}>
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
      </span>
    </span>
    <span className={styles.footerColumnContainer}>
      <span className={styles.footerColumn}>
        <h3>Quick Links</h3>
        <Link href="/about"><a>About</a></Link>
        <Link href="/projects"><a>Projects</a></Link>
      </span>
      <span className={styles.footerColumn}>
        <h3>Apply</h3>
        <Link href="/students"><a>Students</a></Link>
        <Link href="/nonprofits"><a>Nonprofits</a></Link>
      </span>
      <span className={styles.footerColumn}>
        <h3>Support</h3>
        <Link href="/sponsor"><a>Sponsor</a></Link>
        <Link href="/donate"><a>Donate</a></Link>
      </span>
    </span>
  </footer>
);

export default Footer;

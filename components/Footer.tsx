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
        <p>Hack4Impact Cal Poly</p>

      </span>
      <p>
        If you have any questions, reach out to us at
        {' '}
        <Link href="mailto:calpoly@hack4impact.org">
          <a>calpoly@hack4impact.org</a>
        </Link>
      </p>
      <span className={styles.footerSocials}>
        <Link href="https://www.facebook.com/CalPoly/">
          <a>
            <Image
              width="45"
              height="45"
              src={config.assets.facebook}
              alt="Facebook logo link"
            />
          </a>
        </Link>
        <Link href="https://www.youtube.com/channel/UCQwMzg4KKlRxRaBxB9cufyg">
          <a>
            <Image
              width="45"
              height="45"
              src={config.assets.youtube}
              alt="Youtube logo link"
            />
          </a>
        </Link>
        <Link href="https://www.instagram.com/hack4impactcalpoly/?hl=en">
          <a>
            <Image
              width="45"
              height="45"
              src={config.assets.instagram}
              alt="Instagram logo link"
            />
          </a>
        </Link>
        <Link href="https://www.facebook.com/CalPoly/">
          <a>
            <Image
              width="45"
              height="45"
              src={config.assets.github}
              alt="Github logo link"
            />
          </a>
        </Link>
      </span>
    </span>
    <span className={styles.footerColumnContainer}>
      <span className={styles.footerColumn}>
        <h1>Quick Links</h1>
        <Link href="/about"><a>About</a></Link>
        <Link href="/projects"><a>Projects</a></Link>
      </span>
      <span className={styles.footerColumn}>
        <h1>Apply</h1>
        <Link href="/students"><a>Students</a></Link>
        <Link href="/nonprofits"><a>Nonprofits</a></Link>
      </span>
      <span className={styles.footerColumn}>
        <h1>Support</h1>
        <Link href="/sponsor"><a>Sponsor</a></Link>
        <Link href="/donate"><a>Donate</a></Link>
      </span>
    </span>
  </footer>
);

export default Footer;

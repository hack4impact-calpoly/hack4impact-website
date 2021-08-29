import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import config from '../config';

const Navbar = () => (
  <nav className={styles.nav}>
    <div className={styles.logo}>
      <div className={styles.imageBlah}>
        <Image src={config.assets.logo_color} alt="hack4impact logo, with color" />
      </div>
      <Link href="/">
        <a>Hack4Impact Cal Poly</a>
      </Link>
    </div>
    <div className={styles.links}>
      <div>
        <Link href="/about">
          <a className={styles.link}>About</a>
        </Link>
        <Link href="/projects">
          <a className={styles.link}>Projects</a>
        </Link>
        <Link href="/students">
          <a className={styles.link}>Students</a>
        </Link>
        <Link href="/nonprofits">
          <a className={styles.link}>Nonprofits</a>
        </Link>
        <Link href="https://securelb.imodules.com/s/699/bp19/interior.aspx?sid=699&gid=1&sitebuilder=1&pgid=961&cid=2272&bledit=1&dids=623">
          <a className={styles.link} target="_blank" rel="noreferrer">Donate</a>
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;

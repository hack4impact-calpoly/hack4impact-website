import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import config from '../config';

const Navbar = () => (
  <nav className={styles.nav}>
    <span className={styles.logo}>
      <Image
        width="47"
        height="47"
        src={config.assets.logo_color}
        alt="hack4impact logo, with color"
      />
      <Link href="/">
        <a>Hack4Impact Cal Poly</a>
      </Link>
    </span>
    <span className={styles.links}>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
      <Link href="/students">
        <a>Students</a>
      </Link>
      <Link href="/nonprofits">
        <a>Nonprofits</a>
      </Link>
      <a
        href="https://securelb.imodules.com/s/699/bp19/interior.aspx?sid=699&gid=1&sitebuilder=1&pgid=961&cid=2272&bledit=1&dids=623"
        target="_blank"
        rel="noreferrer"
      >
        Donate
      </a>
    </span>
  </nav>
);

export default Navbar;

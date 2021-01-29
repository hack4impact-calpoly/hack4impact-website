import Link from "next/link";

import {
  FiFacebook,
  FiInstagram,
  FiGithub
} from "react-icons/fi";

import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.contact}>
      <img
        src="https://images.ctfassets.net/zuhqmf1mxpuu/391xVnqpS9lIrHrRIAwye7/a9bbbc04f1c99423041134eccc0e78f1/H4I_white.png?w=400&fm=webp"
        height="70"
        width="205"
        className={styles.logo}
        alt="hack4impact logo"
      />

      <div className={styles.socials}>
        <a href="https://github.com/hack4impact-calpoly"
          target="_blank" rel="noreferrer">
          <FiGithub alt="github link" />
        </a>

        <a href="https://facebook.com/hack4impactcalpoly"
          target="_blank" rel="noreferrer">
          <FiFacebook />
        </a>

        <a href="https://instagram.com/hack4impactcalpoly"
          target="_blank" rel="noreferrer">
          <FiInstagram />
        </a>
      </div>

      <a href="mailto:calpoly@hack4impact.org">
        calpoly@hack4impact.org
      </a>
    </div>

    <div className={styles.links+" d-none d-md-flex"}>
      <div className={styles.grouping}>
        <h4>Quick Links</h4>
        <Link href='/about-us'>
          <a>About Us</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        <Link href="/contact-us">
          <a>Contact Us</a>
        </Link>
      </div>

      <div className={styles.grouping+" d-none d-lg-block"}>
        <h4>Apply</h4>
        <Link href="/students">
          <a>Students</a>
        </Link>
        <Link href="/nonprofits">
          <a>Nonprofits</a>
        </Link>
      </div>

      <div className={styles.grouping+" d-none d-lg-block"}>
        <h4>Support</h4>

        <a
          rel="noreferrer"
          target="_blank"
          href="https://securelb.imodules.com/s/699/bp19/interior.aspx?sid=699&gid=1&sitebuilder=1&pgid=961&cid=2272&bledit=1&dids=623"
        >Donate</a>

        <a
          rel="noreferrer"
          target="_blank"
          href="https://drive.google.com/file/d/1M1DmLNQIc0-xnvZY1-AqhXeBWND3ytr5/view?usp=sharing"
        >Sponsor</a>

        <a
          rel="noreferrer"
          href="mailto:calpoly@hack4impact.org"
        >Email</a>
      </div>
    </div>
  </footer>
);

export default Footer;

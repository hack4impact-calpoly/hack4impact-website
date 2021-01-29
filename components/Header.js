import Link from 'next/link';

import { Nav, Navbar } from "react-bootstrap";
import styles from "../styles/Header.module.css";

const Brand = () => (
  <Link href='/' passHref>
    <Navbar.Brand>
      <img
        src="https://images.ctfassets.net/zuhqmf1mxpuu/3K1ljXnunFgRseQx1GD0rA/6331962fa9378139af87e1cb5f421846/H4I-logo.png?w=400&fm=webp"
        height="27"
        width="156"
        alt="Hack4Impact Logo"
        className="d-inline-block align-text-bottom"
      />{' '}
      <span className={styles.navBrand}>cal poly</span>
    </Navbar.Brand>
  </Link>
);

const Header = () => (
  <Navbar bg="light" expand="md" fixed="top" collapseOnSelect="true">
    <Brand />

    <Navbar.Toggle
      aria-controls="responsive-navbar-nav"
      className={styles.navbarToggler}
    />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Link href="/about-us" passHref>
          <Nav.Link className={styles.link}>About Us</Nav.Link>
        </Link>
        <Link href="/projects" passHref>
          <Nav.Link className={styles.link}>Projects</Nav.Link>
        </Link>
        <Link href="/students" passHref>
          <Nav.Link className={styles.link}>Students</Nav.Link>
        </Link>
        <Link href="/nonprofits" passHref>
          <Nav.Link className={styles.link}>Nonprofits</Nav.Link>
        </Link>
        <Link href="/contact-us" passHref>
          <Nav.Link className={styles.link}>Contact Us</Nav.Link>
        </Link>
        <Nav.Link
          target="_blank"
          rel="noreferrer"
          className={styles.link}
          href="https://securelb.imodules.com/s/699/bp19/interior.aspx?sid=699&gid=1&sitebuilder=1&pgid=961&cid=2272&bledit=1&dids=623"
        >Donate</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;

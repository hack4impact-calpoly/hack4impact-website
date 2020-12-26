import { Nav, Navbar } from "react-bootstrap";
import styles from "../styles/Header.module.css";

import Link from 'next/link';

const Brand = () => (
  <Link href='/' passHref>
    <Navbar.Brand>
      <img
        src="/images/H4I-logo.png"
        height="27"
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

    <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.navbarToggler} />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Link href="/about-us" passHref><Nav.Link>About Us</Nav.Link></Link>
        <Link href="/projects" passHref><Nav.Link>Projects</Nav.Link></Link>
        <Link href="/students" passHref><Nav.Link>Students</Nav.Link></Link>
        <Link href="/nonprofits" passHref><Nav.Link>Nonprofits</Nav.Link></Link>
        <Link href="/contact-us" passHref><Nav.Link>Contact Us</Nav.Link></Link>
        <Nav.Link target="_blank" href="https://securelb.imodules.com/s/699/bp19/interior.aspx?sid=699&gid=1&sitebuilder=1&pgid=961&cid=2272&bledit=1&dids=623">Donate</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;

import {Nav, Navbar} from "react-bootstrap";
import styles from "../styles/Header.module.css";

import { useRouter } from 'next/router';
import Link from 'next/link';

function ActiveLink({ children, href }) {
   const router = useRouter()
   const linkClass = router.pathname === href ? styles.activeLink + " nav-link" : "nav-link";

   return (
      <a href={href} className={linkClass}>
         {children}
      </a>
   )
}

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="md" fixed="top" onSelect="test()">
        <Navbar.Brand href="/">
          <img
            src="/images/H4I-logo.png"
            height="27"
            alt="Hack4Impact Logo"
            className="d-inline-block align-text-bottom"
          />{' '}
          <span className={styles.navBrand}>cal poly</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" className={styles.navbarToggler} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Link href="/about-us" passHref><ActiveLink>About Us</ActiveLink></Link>
            <Link href="/projects" passHref><ActiveLink>Projects</ActiveLink></Link>
            <Link href="/students" passHref><ActiveLink>Students</ActiveLink></Link>
            <Link href="/nonprofits" passHref><ActiveLink>Nonprofits</ActiveLink></Link>
            <Link href="https://securelb.imodules.com/s/699/bp19/interior.aspx?sid=699&gid=1&sitebuilder=1&pgid=961&cid=2272&bledit=1&dids=623" passHref><ActiveLink>Donate</ActiveLink></Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;

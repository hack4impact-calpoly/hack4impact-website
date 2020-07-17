import {Nav, NavLink, Navbar} from "react-bootstrap";
import styles from "../styles/Header.module.css"

import { useRouter } from 'next/router'

function ActiveLink({ children, href }) {
   const router = useRouter()
   const linkClass = router.pathname === href ? styles.activeLink + " nav-link" : "nav-link";

   const handleClick = (e) => {
      e.preventDefault()
      router.push(href)
   }

   return (
      <a href={href} onClick={handleClick} className={linkClass}>
         {children}
      </a>
   )
}

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="md" fixed="top">
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
            <ActiveLink href="/about-us">About Us</ActiveLink>
            <ActiveLink href="/projects">Projects</ActiveLink>
            <ActiveLink href="/students">Students</ActiveLink>
            <ActiveLink href="/nonprofits">Nonprofits</ActiveLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;

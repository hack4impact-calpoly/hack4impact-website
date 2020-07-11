import {Nav, Navbar} from "react-bootstrap";

//will be imported in the _app component for all pages
class Header extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="md" fixed="top">
        <Navbar.Brand href="/">
          <img
            src="/images/H4I%20Logo.png"
            height="27"
            alt="Hack4Impact Logo"
            className="d-inline-block align-top"
          />{' '}
          <span className="nav-brand">cal poly</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="aboutus">About Us</Nav.Link>
            <Nav.Link href="projects">Projects</Nav.Link>
            <Nav.Link href="students">Students</Nav.Link>
            <Nav.Link href="nonprofits">Nonprofits</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;

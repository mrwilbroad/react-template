import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="#">Link 1</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link 2</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">link 3</NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} made with{" "}
          <i className="tim-icons icon-heart-2" /> by{" "}
          <a
          rel="noreferrer"
            href="https://github.com/mrwilbroad/react-template"
            target="_blank"
          >
            mrwilbroad
          </a>{" "}
          as web template.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

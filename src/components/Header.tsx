import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

type Props = {};

const Header = (props: Props) => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;

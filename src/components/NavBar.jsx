import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  return (
<Navbar fixed='top' collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Cod-E</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#cdos">200</Nav.Link>
             <Nav.Link href="#ctres">300</Nav.Link>
             <Nav.Link href="#ccuatro">400</Nav.Link>
             <Nav.Link href="#ccinco">500</Nav.Link>
             <Nav.Link href="https://developer.mozilla.org/es/docs/Web/HTTP/Status" target='_blank'>DOC</Nav.Link>
          
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
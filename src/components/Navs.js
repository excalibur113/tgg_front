import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import {BsCart, BsPerson}  from "react-icons/bs";
import {Link} from 'react-router-dom';
function Navs() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className='container'>
        <Navbar.Brand as={Link} to='/' className="logo">Toy GunXGun</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to='/About'>About</Nav.Link>
            <Nav.Link as={Link} to='Products'>Products</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link to="#"><BsCart/></Nav.Link>
            <Nav.Link eventKey={2} to="#">
              <BsPerson/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navs

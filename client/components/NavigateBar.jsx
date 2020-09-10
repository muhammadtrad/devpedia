import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigateBar = () => {


  return (
      <Navbar className="navigateBar" bg="primary" variant="dark">
      <Nav className="mr-auto">
      <Link style={{ color: 'white' }} to="/home">
        <Navbar.Brand>Devpedia</Navbar.Brand>
      </Link>
      </Nav>
      <Nav className="nav-right">
          <Nav.Link className="login-link" style={{ color: 'white' }} href="/login">
            Login
          </Nav.Link>
          <Nav.Link style={{ color: 'white' }} href="/signup">
            Signup
          </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavigateBar;

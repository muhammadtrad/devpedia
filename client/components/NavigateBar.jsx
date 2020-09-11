import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigateBar = () => {
  return (
    <Navbar className="navigateBar" bg="primary" variant="dark">
      <Nav className="nav-left">
        <h2>Devpedia</h2>
      </Nav>
      <Nav className="nav-right">
        <div id="navButtonsContainer">
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/signup">Signup</Nav.Link>
        </div>
      </Nav>
    </Navbar>
  );
};

export default NavigateBar;

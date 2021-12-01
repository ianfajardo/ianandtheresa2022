import { useState, useEffect } from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faTwitter, faInstagram);

export default function Navigation(props) {
  return (
    <div className="navbar-container">
      <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <h1 className="it-nav-title text-primary animate__animated animate__fadeInLeft">
              Theresa + Ian
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="mx-auto">
              <Nav.Link href="/details">Details</Nav.Link>
              <Nav.Link href="/accommodations">Accommodations</Nav.Link>
              <Nav.Link href="/photos">Photos</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Button variant="primary" href="/rsvp">RSVP</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

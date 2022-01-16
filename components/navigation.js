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
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="/">
            <h1 className="it-nav-title text-white mb-0">
              theresa + ian
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="mx-auto">
              <Nav.Link href="/details">Details</Nav.Link>
              <Nav.Link href="/wedding-party">Wedding Party</Nav.Link>
              <Nav.Link href="/accommodations">Accommodations</Nav.Link>
              <Nav.Link href="/things-to-do">Things to Do</Nav.Link>
              <Nav.Link href="/photos">Photos</Nav.Link>
            </Nav>
            <div className="d-flex">
              <Button variant="primarydark" href="/rsvp">
                RSVP
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

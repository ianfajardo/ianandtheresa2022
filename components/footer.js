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

export default function Footer(props) {
  return (
    <footer class="footer" style={props.style}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="py-1">
              &copy;2022 Ian & Theresa. All Rights Reserved{" "}
            </div>
            <div className="py-1">
              <span className="pe-3">
                Photos by{" "}
                <a target="_blank" href="http://katienesbittphotography.com/">
                  Katie Nesbitt Photography
                </a>
              </span>
              Website by{" "}
              <a target="_blank" href="https://ianfajardo.com">
                Ian Fajardo
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

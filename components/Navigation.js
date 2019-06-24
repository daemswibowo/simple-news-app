/* @flow */

import React, { Component } from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap'
export default class Navigation extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/" className="font-weight-bold"><i className="icon-energy text-primary"></i> SIMPLE NEWS APP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="https://github.com/daemswibowo" title="Github" target="_blank">
                <i className="icon-social-github"></i> Github
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/dimaswibowo/" title="LinkedIn" target="_blank">
                <i className="icon-social-linkedin"></i> LinkedIn
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

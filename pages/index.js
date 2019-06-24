import React, { Component } from 'react';
import "../assets/styles.scss"
import { Button, Navbar, Container, Row, Col, Nav } from 'react-bootstrap'
import { Provider } from 'react-redux'
import store from '../store'

export default class Index extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home" className="font-weight-bold">SIMPLE NEWS FEED</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav activeKey="/home">
                <Nav.Item>
                  <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="disabled" disabled>
                    Disabled
                  </Nav.Link>
                </Nav.Item>
              </Nav>
          </Container>
        </Navbar>
        <Container className="mt-3">
          <Row>
            <Col>
              <p>dimas</p>
            </Col>
          </Row>
        </Container>
      </Provider>
    );
  }
}

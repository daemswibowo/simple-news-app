import React, { Component } from 'react';
import "../assets/styles.scss"
import { Button, Navbar, Container, Row, Col, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import { Provider } from 'react-redux'
import store from '../store'
import Headline from '../components/Headline'
import Contents from '../components/Contents'
import Navigation from '../components/Navigation'

export default class Index extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
        <Container className="mt-3">
          <Headline />
          <Contents />
        </Container>
      </Provider>
    );
  }
}

/* @flow */

import React, { Component } from 'react';
import {Row, Col, Card, Image, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import ContentLoader, {Facebook} from 'react-content-loader'
import Router from 'next/router'
import {setDetail} from '../actions/News'
import {bindActionCreators} from 'redux'

class Contents extends Component {
  detail = (item) => {
    this.props.setDetail(item);
    var win = window.open(item.url, '_blank');
    win.focus();
  }
  render() {
    return (
      <Row>
        {this.props.loadings && [0,0,0,0].map((i,k) => <Col key={k} md="3">
          <Card className="mb-3">
            <ContentLoader></ContentLoader>
            <Card.Body>
              <Facebook></Facebook>
            </Card.Body>
          </Card>
        </Col>)}
        {!this.props.loading && this.props.items.map((item, k) => {
          if (k>3) {
            return (
              <Col key={k} md="3">
                <Card className="mb-3">
                  <Card.Img variant="top" src={item.urlToImage} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      {item.description}
                    </Card.Text>
                    <Button variant="primary" onClick={() => this.detail(item)}>Read More</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          }
          return null;
        })}
      </Row>
    );
  }
}

const mapstp = (state) => {
  console.log("news", state.news)
  return state.news
}

const mapdtp = (dispatch) => {
  return bindActionCreators({setDetail}, dispatch)
}

export default connect(mapstp, mapdtp)(Contents)

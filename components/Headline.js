import React, { Component } from 'react';
import { Container, Row, Col, Carousel, Nav, Image } from 'react-bootstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getNews} from '../actions/News'
import Link from 'next/link'
import ContentLoader from 'react-content-loader'
class Headline extends Component {
  componentDidMount() {
    this.props.getNews('country=us').then(res => {

    });
  }
  render() {
    return (
        <Row>
          {this.props.loading?<Col md='12'>
            <ContentLoader></ContentLoader>
          </Col>:<Col className="mb-3">
            <Carousel>
              {this.props.items.map((item, key) => {
                if (key<3) {
                  return (
                    <Carousel.Item key={key}>
                      <img
                        width="100%"
                        src={item.urlToImage}
                        alt={item.title}
                      />
                      <Carousel.Caption>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  )
                }
                return null;
              }
              )}
            </Carousel>
          </Col>}

        </Row>
    );
  }
}

const mapstp = (state) => {
  return state.news
}

const mapdtp = (dispatch) => {
  return bindActionCreators({getNews}, dispatch)
}

export default connect(mapstp, mapdtp)(Headline)

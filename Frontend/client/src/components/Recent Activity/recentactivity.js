/* eslint-disable import/order */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import Jumbotron from 'react-bootstrap/Jumbotron';
import React, { Component } from 'react';
import '../../App.css';
import UpperNavbar from '../Commonpage/upperNavbar';
import '../../styles/recentactivity.css';
import SideNavbar from '../Commonpage/SideNavbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Recentactivity extends Component {
  render() {
    return (
      <div>
        <UpperNavbar />
        <SideNavbar />
        <Jumbotron className="justify-content-md-center Title">
          <h3>Recent Acitivity </h3>
        </Jumbotron>
        <Container className="justify-content-md-center-lower lowerrectangle">
          <Row className="individualactivity">
            hii
          </Row>
          <Row className="individualactivity">
            hii
          </Row>
          <Row className="individualactivity">
            hii
          </Row>
        </Container>
      </div>
    );
  }
}

export default Recentactivity;

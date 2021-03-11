/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-undef */
import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../index.css';
import Jumbotron from 'react-bootstrap/Jumbotron';

class dashboardUpper extends Component {
  constructor(props) {
    // Call the constrictor of Super class i.e The Component
    super(props);
    // maintain the state required for this component
    // this.state = {
    //   total_Balance: '',
    //   you_Owe: '',
    //   you_are_Owed: '',
    // };
    // // Bind the handlers to this class
    // this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
    // this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
    // this.submitLogin = this.submitLogin.bind(this);
  }

  render() {
    return (
      <Container className="justify-content-md-center">
        <Jumbotron className="jumbotron">
          <Row>
            <h2>Dashboard </h2>
            <Col><Button id="expense_button">Add an Expense</Button></Col>
            <Col><Button id="settle_button">Settle</Button></Col>
          </Row>
          <Row>
            <Col className="grid">You owe blah blah</Col>
            <Col className="grid">You owe blah blah</Col>
            <Col className="grid">You owe blah blah</Col>
          </Row>
        </Jumbotron>
      </Container>
    );
  }
}

export default dashboardUpper;

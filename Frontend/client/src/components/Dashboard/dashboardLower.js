/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../index.css';

// eslint-disable-next-line react/prefer-stateless-function
class Footer extends Component {
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
      <Container className="justify-content-md-center-lower">
        <Row>
          <Col><h3 style={{ color: '#999' }}>You Owe</h3></Col>
          <Col><h3 style={{ color: '#999' }}>You Are Owed</h3></Col>
        </Row>
        <div className="row">

          <div className="col" id="uowelist">
            <ul>
              <li className="relationship">
                <img src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-orange37-100px.png" className="rounded-circle" alt="Avatar" />
                <div className="name">
                  <span>  Chinmay  </span>
                </div>
                <div className="balance_i_owe"><span>You Owe</span></div>
                <ul className="balance_details">
                  <li>load for each grp</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="col" id="urowedlist">
            <ul>
              <li className="relationship">
                <img src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-orange37-100px.png" className="rounded-circle" alt="Avatar" />
                <div className="name">
                  <span>  Chinmay  </span>
                </div>
                <div className="balance_r_owed"><span>You Owe</span></div>
                <ul className="balance_details">
                  <li>load for each grp</li>
                </ul>
              </li>
            </ul>
          </div>

        </div>
      </Container>
    );
  }
}

export default Footer;

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
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
import '../../styles/commonpage.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { Nav } from 'react-bootstrap';

// eslint-disable-next-line react/prefer-stateless-function
class UpperNavbar extends Component {
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
      <Container className="upperNavbar">
        <div>
          {' '}
          <img id="logo" className="rounded-cirlce" src="https://assets.splitwise.com/assets/core/logo-wordmark-horizontal-white-short-c309b91b96261a8a993563bdadcf22a89f00ebb260f4f04fd814c2249a6e05d4.svg" />

          <img id="profilepic" src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-blue23-50px.png" />
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              User Name
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Your Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Create Grp</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </div>
      </Container>

    );
  }
}
export default UpperNavbar;
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

// eslint-disable-next-line react/prefer-stateless-function
class SideNavbar extends Component {
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
        <Container className='sidebar'>

        </Container>




        );
      }
    }
    export default SideNavbar;
    
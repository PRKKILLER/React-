/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import '../../index.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Header from './dashboardUpper';
import Footer from './dashboardLower';
import UpperNavbar from '../Commonpage/upperNavbar';
import '../../styles/dashboard.css';
import SideNavbar from '../Commonpage/SideNavbar';

class dashboard extends Component {
  render() {
    return (
      <div>
        <UpperNavbar />
        <SideNavbar />
        <Header />
        <Footer />
      </div>
    );
  }
}

export default dashboard;

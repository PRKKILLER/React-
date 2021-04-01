/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
/* eslint-disable consistent-return */
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
import _ from 'lodash';
import Header from './dashboardUpper';
import Footer from './dashboardLower';
import UpperNavbar from '../Commonpage/upperNavbar';
import '../../styles/dashboard.css';
import SideNavbar from '../Commonpage/SideNavbar';

class dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      UserOwesRes: [],
      UserOwedRes: [],
      settleUpList: [],
    };
  }

  componentDidMount = async () => {
    const EmailId = localStorage.getItem('EmailId');
    let UserOwesRes = await axios.post('http://localhost:3002/dashboard/getUserOwes', { EmailId });
    let UserOwedRes = await axios.post('http://localhost:3002/dashboard/getUserOwed', { EmailId });
    console.log('UserOwesRes', UserOwesRes.data.response);
    console.log('UserOwedRes', UserOwedRes.data.response);
    UserOwesRes = UserOwesRes.data.response;
    UserOwedRes = UserOwedRes.data.response;
    this.setState({ UserOwedRes });
    this.setState({ UserOwesRes });
    // const SettleupRes = await axios.post('http://localhost:3002/dashboard/settleup', {UserId1, UserId2,});
    const owedList = UserOwedRes.map((user) => user.UserId1);
    // const owesList = UserOwesRes.map((user) => user.UserId1);
    const settleUpList = owedList.map((user) => ({
      label: user,
      value: user,
    }));
    this.setState({ settleUpList });
  }

  render() {
    let EmailId = localStorage.getItem('EmailId');
    let redirectVar = null;
    let currentURL = '';
    if (EmailId === false || EmailId === undefined || EmailId === null) {
      redirectVar = <Redirect to="/login" />;
    } else {
      EmailId = EmailId.charAt(0).toUpperCase() + EmailId.slice(1);
      const urlstring = EmailId.replace('@', '%40');
      currentURL = `https://splitwisebucket.s3.us-east-2.amazonaws.com/${urlstring}`;
      console.log('Current User url', currentURL);
    }
    return (
      <div>
        {redirectVar}
        <UpperNavbar />
        <SideNavbar />
        <Header settleList={this.state.settleUpList} />
        <Footer owed={this.state.UserOwedRes} owes={this.state.UserOwesRes} />
      </div>
    );
  }
}

export default dashboard;

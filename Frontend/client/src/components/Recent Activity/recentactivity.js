/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
/* eslint-disable import/order */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import Jumbotron from 'react-bootstrap/Jumbotron';
import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import '../../App.css';
import UpperNavbar from '../Commonpage/upperNavbar';
import '../../styles/recentactivity.css';
import SideNavbar from '../Commonpage/SideNavbar';
import TablePage from './recentactivitytable';
import getDataForRecentActivity from '../../utils/recentActivityUtils';

class Recentactivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: {},
      groupName: [],
      displayActivitie: [],
      data: {
        columns: [
          {
            label: 'Group Name',
            field: 'Name',
            sort: 'asc',
          },
          {
            label: 'Recent Activity',
            field: 'status',
            sort: 'asc',
          },
        ],
        rows: [
          {
            id: '1',
            Name: ' Harry ',
            status: '',
          },
          {
            id: '2',
            Name: 'Tom',
            status: '',
          },
          {
            id: '3',
            Name: 'Dick',
            status: '',
          },
        ],
      },
    };
  }

  componentDidMount = async () => {
    const retrievedObject = localStorage.getItem('EmailId');
    const resForGroupNames = await axios.get(`http://localhost:3002/RecentActivity/getRecentActivity/${retrievedObject}`);
    console.log(resForGroupNames.data.body);
    const tableData = getDataForRecentActivity(resForGroupNames.data.body);
    this.setState({ activities: tableData });
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
    console.log('state', this.state.activities);
    return (
      <div>
        {redirectVar}
        <UpperNavbar />
        <SideNavbar />
        <Jumbotron className="justify-content-md-center Title">
          <h3>Recent Acitivity </h3>
        </Jumbotron>
        <TablePage data={this.state.activities} />
      </div>
    );
  }
}

export default Recentactivity;

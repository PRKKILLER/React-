/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { Redirect } from 'react-router';
// import {
//   MDBBtn, MDBTable, MDBTableBody, MDBTableHead,
// } from 'mdbreact';
// import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Select from 'react-select';
import UpperNavbar from '../Commonpage/upperNavbar';
import '../../styles/mygroups.css';
import TablePage from './mygroupstable';

class mygroups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupList: [],
      options: [],
      redirect: false,
      selected: '',
      selectedName: '',
      isgrouplistnull: true,
    };
  }

  componentDidMount = async () => {
    const retrievedObject = localStorage.getItem('EmailId');
    const groupListRes = await axios.get(`http://localhost:3002/mygroup/myGroupList/${retrievedObject}`);
    console.log('Group  list', groupListRes);
    const alert = null;
    if (groupListRes.data.data === 'Not In Any Group') {
      console.log('Render empty page');
    } else {
      console.log('inside else');
      this.state.isgrouplistnull = false;
      // const tableData = getDataForMyGroups(groupListRes.data.data);
      // console.log('data', tableData);
      this.setState({ groupList: groupListRes.data.data });
      const options = [];
      const groupList = groupListRes.data.data;
      groupList.forEach((group) => {
        options.push({
          label: group.GroupName,
          value: group.GroupId,
        });
      });
      console.log(options);
      this.setState({ options });
    }
  }

  handleChange = (option) => {
    // console.log(option.label);
    this.setState({ selected: option.value });
  }

  handleClick = () => {
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: '/group/',
            state: { group: this.state.selected },
          }}
        />
      );
    }
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
        <div className="GotoGroup">
          {alert}
          <button type="button" className="btn btn-outline-secondary" onClick={this.handleClick}>Go to group</button>
        </div>
        <Select
          className="sort"
          options={this.state.options}
          onChange={(opt) => this.handleChange(opt)}
        />
        <TablePage data={this.state.groupList}/>
      </div>
    );
  }
}

export default mygroups;

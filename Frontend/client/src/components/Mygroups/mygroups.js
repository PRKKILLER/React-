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
import SideNavbar from '../Commonpage/SideNavbar';
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
    };
  }

  componentDidMount = async () => {
    const retrievedObject = localStorage.getItem('EmailId');
    const groupListRes = await axios.get(`http://localhost:3002/mygroup/myGroupList/${retrievedObject}`);
    console.log(groupListRes.data.data);
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
    return (
      <div>
        <UpperNavbar />
        <SideNavbar />
        <button type="button" className="btn btn-primary" onClick={this.handleClick}>Go to group</button>
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

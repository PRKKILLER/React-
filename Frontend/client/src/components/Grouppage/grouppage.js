/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import axios from 'axios';
import SideNavbar from '../Commonpage/SideNavbar';
import UpperNavbar from '../Commonpage/upperNavbar';
import TablePage from './grouppagetable';
import '../../styles/grouppage.css';
import Example from './grouppagemodal';
import Usersummary from './grouptableusersummary';

class GroupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
      usersummary: [],
    };
  }

  componentDidMount = async () => {
    console.log('group id', this.props.location.state.group);
    const groupId = this.props.location.state.group;
    console.log('group id', groupId);
    const resForExpenseList = await axios.get(`http://localhost:3002/individualgroup/showexpanse/${groupId}`);
    console.log('Expanse', resForExpenseList.data);
    this.setState({ expenses: resForExpenseList.data.data });
    const resForUserSummary = await axios.get(`http://localhost:3002/individualgroup/Groupsummary/${groupId}`);
    console.log('summary', resForUserSummary.data);
    this.setState({ usersummary: resForUserSummary.data.body });
  }

  render() {
    // name={this.props.location.state.name});
    return (
      <div>
        <UpperNavbar />
        <SideNavbar />
        <Example GroupId={this.props.location.state.group}/>
        <TablePage data={this.state.expenses}/>
        <Usersummary data={this.state.usersummary}/>
      </div>
    );
  }
}

export default GroupPage;

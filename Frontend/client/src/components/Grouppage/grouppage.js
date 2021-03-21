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

class GroupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
    };
  }

  componentDidMount = async () => {
    const groupId = this.props.location.state.group.GroupId;
    const resForExpenseList = await axios.get(`http://localhost:3002/individualgroup/showexpanse/${groupId}`);
    console.log(resForExpenseList.data);
    this.setState({ expenses: resForExpenseList.data.data });
  }

  render() {
    // name={this.props.location.state.name});
    return (
      <div>
        <UpperNavbar />
        <SideNavbar />
        <Example GroupId={this.props.location.state.group}/>
        <TablePage data={this.state.expenses}/>
      </div>
    );
  }
}

export default GroupPage;

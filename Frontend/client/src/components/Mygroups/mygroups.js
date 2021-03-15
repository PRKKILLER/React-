/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
// import {
//   MDBBtn, MDBTable, MDBTableBody, MDBTableHead,
// } from 'mdbreact';
// import Table from 'react-bootstrap/Table';

import SideNavbar from '../Commonpage/SideNavbar';
import UpperNavbar from '../Commonpage/upperNavbar';
import '../../styles/mygroups.css';
import TablePage from './mygroupstable';

class mygroups extends Component {
  render() {
    return (
      <div>
        <UpperNavbar />
        <SideNavbar />
        <TablePage />
      </div>
    );
  }
}

export default mygroups;

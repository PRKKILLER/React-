/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import SideNavbar from '../Commonpage/SideNavbar';
import UpperNavbar from '../Commonpage/upperNavbar';
import TablePage from './grouppagetable';
import '../../styles/grouppage.css';
import Example from './grouppagemodal';

class grouppage extends Component {
  render() {
    return (
      <div>
        <UpperNavbar />
        <SideNavbar />
        <Example />
        <TablePage/>
      </div>
    );
  }
}

export default grouppage;

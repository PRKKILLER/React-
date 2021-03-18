/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/tabindex-no-positive */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */

import '../../App.css';
import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import '../../styles/creategroup.css';
import Select from 'react-select';

// eslint-disable-next-line react/prefer-stateless-function
class creategroup extends Component {
  constructor(props) { // Call the constrictor of Super class i.e The Component
    super(props);
    // maintain the state required for this component
    this.state = {
      availUsers: [
        { label: 'harry', value: 'harry' },
        { label: 'tom', value: 'tom' },
        { label: 'amanda', value: 'amanda' },
        { label: 'rom', value: 'rob' },
        { label: 'asa', value: 'jon' },
        { label: 'asa', value: 'jon' },
        { label: 'asa', value: 'jon' },
        { label: 'asa', value: 'jon' },
        { label: 'asa', value: 'jon' },
      ],
      UserId: localStorage.getItem('EmailId'),
      // selectedUser:'',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(e) {
  //   this.setState({ value: event.target.value });
  // }

  // handleSubmit(e) {
  //   event.preventDefault();
  // }

   editSearchTerm=(e) => {
     this.setState({ searchTerm: e.target.value });
   }

  dynamicSearch=(e) => {
    this.state.names.filter((name) => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()));
  }

  render() {
    return (
      <div className="content-block">
        <img className="envelope" src="https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg" alt="No img" width="200" height="200" />

        <h2>Start a new group</h2>
        <form id="new_group" className="form" action="/groups" method="post" onSubmit={this.handleSubmit}>
          <div id="group_avatar_upload">
            <input type="file" id="group_avatar" />
          </div>
          <div className="Mygroupshallbe">
            My group shall be called…
          </div>
          <input tabIndex="1" placeholder="The Breakfast Club" autoComplete="off" type="text" id="group_name" />
          <hr />
          <h2>Group Memebers</h2>
          <div className=" d-flex flex-row bd-highlight mb-3 fields ">
            <img className="rounded-circle profile-pic" alt="usrprofile" src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-blue23-50px.png" />
            <Select
              className="names"
              options={this.state.availUsers}
              onChange={(opt) => console.log(opt.label, opt.value)}
            />
          </div>
          <div className=" d-flex flex-row bd-highlight mb-3 fields ">
            <img className="rounded-circle profile-pic" alt="usrprofile" src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-blue23-50px.png" />
            <Select
              className="names"
              options={this.state.availUsers}
              onChange={(opt) => console.log(opt.label, opt.value)}
            />
          </div>
          <div className=" d-flex flex-row bd-highlight mb-3 fields ">
            <img className="rounded-circle profile-pic" alt="usrprofile" src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-blue23-50px.png" />
            <Select
              className="names"
              options={this.state.availUsers}
              onChange={(opt) => console.log(opt.label, opt.value)}
            />

          </div>
          <Button type="submit" value="Submit" style={{ backgroundColor: '#ff652f' }} className="btn btn-secondary btn-lg">SAVE</Button>
        </form>
      </div>
    );
  }
}
export default creategroup;

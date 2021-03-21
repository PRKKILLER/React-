/* eslint-disable import/order */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-alert */
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
/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import UpperNavbar from '../Commonpage/upperNavbar';
import '../../App.css';
import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import '../../styles/creategroup.css';
import Select from 'react-select';
import _ from 'lodash';

// eslint-disable-next-line react/prefer-stateless-function
class creategroup extends Component {
  constructor(props) { // Call the constrictor of Super class i.e The Component
    super(props);
    // maintain the state required for this component
    this.state = {
      users: [],
      selected: [],
      UserId: localStorage.getItem('EmailId'),
      // selectedUser:'',
    };
  }

  // handleChange(e) {
  //   this.setState({ value: event.target.value });
  // }

  // handleSubmit(e) {
  //   event.preventDefault();
  // }

  componentDidMount = async () => {
    const email = localStorage.getItem('EmailId');
    let userListRes = await axios.get(`http://localhost:3002/group/getAllUsersExceptCurrent/${email}`);
    console.log(userListRes.data.body);
    userListRes = userListRes.data.body;
    const options = [];
    userListRes.forEach((user) => {
      options.push({
        label: user.EmailId,
        value: user.EmailId,
      });
    });
    console.log(options);
    this.setState({ users: options });
  }

  handleSelect = (opt) => {
    let newOpts = this.state.selected.concat({ EmailId: opt.value });
    newOpts = _.uniqBy(newOpts, 'EmailId');
    this.setState({ selected: newOpts });
  }

   editSearchTerm=(e) => {
     this.setState({ searchTerm: e.target.value });
   }

  dynamicSearch=(e) => {
    this.state.names.filter((name) => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()));
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log('target', e.target.groupName.value);
    const curentUser = localStorage.getItem('EmailId');
    const selUsers = this.state.selected;
    selUsers.push({ EmailId: curentUser });
    console.log('selected ', selUsers);
    const reqForCreate = {
      GroupName: e.target.groupName.value,
      CreatorEmail: curentUser,
    };
    console.log(reqForCreate);
    try {
      // console.log('selected list', this.state.selected);

      const groupCreateRes = await axios.post('http://localhost:3002/group/creategroup', reqForCreate);
      console.log('id: ', groupCreateRes.data.Groupdetails.GroupId);
      console.log(selUsers[1]);
      if (groupCreateRes.status === 200) {
        const addusergrp = await axios.post('http://localhost:3002/group/addusertorgrp', {
          GroupName: reqForCreate.GroupName,
          GroupId: groupCreateRes.data.Groupdetails.GroupId,
          UserIds: selUsers,
        });
      }
    } catch (err) {
      alert(err);
    }
  }

  render() {
    // console.log(this.state.selected);
    return (
      <div>
        <UpperNavbar />
        <div className="content-block">
          <img className="envelope" src="https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg" alt="No img" width="200" height="200" />
          <h2>Start a new group</h2>
          <form id="new_group" className="form" onSubmit={this.handleSubmit}>
            <div id="group_avatar_upload">
              <input type="file" id="group_avatar" />
            </div>
            <div className="Mygroupshallbe">
              My group shall be called…
            </div>
            <input tabIndex="1" placeholder="Home Expenses" name="groupName" autoComplete="off" type="text" id="group_name" />
            <hr />
            <h2>Group Memebers</h2>
            <div className=" d-flex flex-row bd-highlight mb-3 fields ">
              <img className="rounded-circle profile-pic" alt="usrprofile" src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-blue23-50px.png" />
              <Select
                className="names"
                options={this.state.users}
                onChange={(opt) => this.handleSelect(opt)}
              />
            </div>
            <div className=" d-flex flex-row bd-highlight mb-3 fields ">
              <img className="rounded-circle profile-pic" alt="usrprofile" src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-blue23-50px.png" />
              <Select
                className="names"
                options={this.state.users}
                onChange={(opt) => this.handleSelect(opt)}
              />
            </div>
            <div className=" d-flex flex-row bd-highlight mb-3 fields ">
              <img className="rounded-circle profile-pic" alt="usrprofile" src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-blue23-50px.png" />
              <Select
                className="names"
                options={this.state.users}
                onChange={(opt) => this.handleSelect(opt)}
              />
            </div>
            <div className=" d-flex flex-row bd-highlight mb-3 fields ">
              <img className="rounded-circle profile-pic" alt="usrprofile" src="https://s3.amazonaws.com/splitwise/uploads/user/default_avatars/avatar-blue23-50px.png" />
              <Select
                className="names"
                options={this.state.users}
                onChange={(opt) => this.handleSelect(opt)}
              />
            </div>
            <Button type="submit" value="Submit" style={{ backgroundColor: '#ff652f' }} className="btn btn-secondary btn-lg">SAVE</Button>
          </form>
        </div>
      </div>
    );
  }
}
export default creategroup;

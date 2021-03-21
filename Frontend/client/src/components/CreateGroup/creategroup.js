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
    const userListRes = await axios.get(`http://localhost:3002/group/getAllUsersExceptCurrent/${email}`);
    console.log(userListRes);
  }

  handleSelect = (opt) => {
    const newOpts = this.state.selected.concat({ EmailId: opt.value, Name: opt.label });
    // newOpts = _.uniqBy(newOpts, 'user_id');
    this.setState({ selected: newOpts });
  }

   editSearchTerm=(e) => {
     this.setState({ searchTerm: e.target.value });
   }

  dynamicSearch=(e) => {
    this.state.names.filter((name) => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()));
  }

  handleSubmit = async (e) => {
    const curentUser = localStorage.getItem('EmailId');
    const selUsers = this.state.selected;
    console.log('selected ', selUsers);
    e.preventDefault();
    const reqForCreate = {
      GroupName: e.target.groupName.value,
      CreatorEmail: curentUser.email,
    };
    try {
      console.log('selected list', this.state.selected);
      // const groupCreateRes = await axios.post('http://localhost:3002/group/creategroup', reqForCreate);
      // if (groupCreateRes.status === 201) {
      //   const groupName = groupCreateRes.data.group.name;
      //   const { groupID } = groupCreateRes.data.group;
      //   const inviteList = [];
      //   for (let i = 0; i < selUsers.length; i += 1) {
      //     inviteList.push({
      //       user_id: selUsers[i].user_id,
      //       group_id: groupID,
      //       group_name: groupName,
      //       email: selUsers[i].email,
      //     });
      //   }
      // console.log('invite list ', inviteList);
    } catch (err) {
      alert(err);
    }
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
          <input tabIndex="1" placeholder="Home Expenses" autoComplete="off" type="text" id="group_name" />
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
    );
  }
}
export default creategroup;

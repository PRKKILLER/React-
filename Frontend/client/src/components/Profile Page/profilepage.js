/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import Jumbotron from 'react-bootstrap/Jumbotron';
import React, { Component } from 'react';
import '../../App.css';
import UpperNavbar from '../Commonpage/upperNavbar';
import '../../styles/profilepage.css';
import SideNavbar from '../Commonpage/SideNavbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class profilepage extends Component {
  render() {
    return (
      <div>
        <UpperNavbar />
        <div className="content-block-1">
          <img className="profile_picture" src="https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg" alt="No img" width="200" height="200" />
          <form id="new_profile" className="form" action="/groups" method="post">
            <div id="photo_avatar_upload">
              <input type="file" id="profile_picture" />
            </div>
            <div className="input_1">
              <label>Your default currency</label>
              <br />
              <select className="form-select" id="currency">
                <option value="AED">USD </option>
                <option value="AED">KWD </option>
                <option value="AED">BHD </option>
                <option value="AED">GPB </option>
                <option value="AED">EUR </option>
                <option value="AED">CAD </option>
              </select>
              <br />
              <label>Your Time Zone</label>
              <br />
              <select className="form-select" id="Time Zone">
                <option value="PST">PST </option>
                <option value="EST">EST </option>
                <option value="IST">IST </option>
                <option value="PMT">PMT </option>
              </select>
              <br />
              <label>Language</label>
              <br />
              <select className="form-select" id="Language">
                <option value="English">English </option>
                <option value="Spanish">Spanish </option>
              </select>
            </div>
            <div className="input_2">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="email" placeholder="sdfqfqfa" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="area" placeholder="123424325" />
              </Form.Group>
            </div>
            <Button type="button" style={{ backgroundColor: '#ff652f' }} className="btn btn-secondary btn-lg submit">SAVE</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default profilepage;

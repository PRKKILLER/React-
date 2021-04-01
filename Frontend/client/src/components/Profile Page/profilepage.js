/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import Jumbotron from 'react-bootstrap/Jumbotron';
import axios from 'axios';
import React, { Component } from 'react';
import '../../App.css';
import UpperNavbar from '../Commonpage/upperNavbar';
import '../../styles/profilepage.css';
import SideNavbar from '../Commonpage/SideNavbar';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class profilepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const Currency = e.target.default_currency.value;
      const Name = e.target.name.value;
      const EmailId = e.target.email.value;
      const PhoneNumber = e.target.phone_number.value;
      const photo_URL = e.target.photo_URL.files[0];
      // eslint-disable-next-line no-unused-vars

      if (photo_URL !== '') {
        const reader = new FileReader();
        reader.readAsDataURL(photo_URL);
        const bodyParameters = new FormData();
        bodyParameters.append('file', photo_URL);
        bodyParameters.append('EmailId', EmailId);
        for (const key of bodyParameters.entries()) {
          console.log(`${key[0]}, ${key[1]}`);
        }

        const resPhotoUrl = await axios.post('http://localhost:3002/profile/addProfilePicture', bodyParameters);
        const res = await axios.post('http://localhost:3002/profile/updateUserDetails', {
          EmailId, Name, PhoneNumber, Currency,
        });
        console.log('3 url response', resPhotoUrl);
        if (res.status === 200 && resPhotoUrl.status === 200) {
          alert('Profile updated successfully!');
        }
      }
    } catch (err) {
      console.log(err);
      alert('Could not update profile!');
    }
  }

  render() {
    return (
      <div>
        <SideNavbar />
        <UpperNavbar />
        <div className="content-block-1">
          <img className="profile_picture" src="https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg" alt="No img" width="200" height="200" />
          <form id="new_profile" className="form" method="post" onSubmit={this.handleSubmit}>
            <div id="photo_avatar_upload">
              <input name="photo_URL" type="file" id="profile_picture" onChange={this.onFileChange} />
            </div>
            <div className="input_1">
              <label>Your default currency</label>
              <br />
              <select name="default_currency" className="form-select" id="currency">
                <option value="USD">USD </option>
                <option value="KWD">KWD </option>
                <option value="BHD">BHD </option>
                <option value="GPB">GPB </option>
                <option value="EUR">EUR </option>
                <option value="CAD">CAD </option>
              </select>
              <br />
              <label>Your Time Zone</label>
              <br />
              <select name="timezone" className="form-select" id="Time Zone">
                <option value="PST">PST </option>
                <option value="EST">EST </option>
                <option value="IST">IST </option>
                <option value="PMT">PMT </option>
              </select>
              <br />
              <label>Language</label>
              <br />
              <select name="language" className="form-select" id="Language">
                <option value="English">English </option>
                <option value="Spanish">Spanish </option>
              </select>
            </div>
            <div className="input_2">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>User Name</Form.Label>
                <Form.Control name="name" placeholder="Michael Jackson" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="michael@gmail.com" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control name="phone_number" type="area" placeholder="1669123654" />
              </Form.Group>
            </div>
            <Button type="submit" style={{ backgroundColor: '#ff652f' }} className="btn btn-secondary btn-lg submit">SAVE</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default profilepage;

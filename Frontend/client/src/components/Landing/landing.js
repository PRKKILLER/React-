/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-multi-spaces */
import React, { Component } from 'react';
import '../../styles/landing.css';
import Container from 'react-bootstrap/Container';
import img from './plane.png';

class landing extends Component {
  render() {
    return (
      <div>
        <Container className="upperlanding">
          <div>
            {' '}
            <img id="logo" alt="logo"className="rounded-cirlce" src="https://assets.splitwise.com/assets/core/logo-wordmark-horizontal-white-short-c309b91b96261a8a993563bdadcf22a89f00ebb260f4f04fd814c2249a6e05d4.svg" />
          </div>
          <a className="dropdown-reveal  px-4 block cursor-pointer font-mont font-semibold" id="login" href="/login">Log in</a>
          <a className="bg-teal  px-3 py-2 sm:px-5 sm:py-3 rounded shadow sm-cta-button" id="signup" href="/signup">Sign up</a>
        </Container>
        <Container className="lowerlanding" />
        <img className="plane" alt="plane" src={img} />
      </div>
    );
  }
}

export default landing;

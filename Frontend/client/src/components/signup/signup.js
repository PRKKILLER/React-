/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
/* eslint-disable react/no-unused-state */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import '../../App.css';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { createUser } from '../../Redux/actions/action';
import '../../styles/signup.css';

// Define a Login Component
class signup extends Component {
  // call the constructor method
  constructor(props) {
    // Call the constrictor of Super class i.e The Component
    super(props);
    // maintain the state required for this component
    this.state = {
      username: '',
      password: '',
      emailId: '',
    };
    // Bind the handlers to this class
    this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
    this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
    this.emailIdChangeHandler = this.emailIdChangeHandler.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  UNSAFE_componentWillMount() {
    this.setState({
      authenticated: false,
    });
  }

    // username change handler to update state variable with the text entered by the user
    usernameChangeHandler = (e) => {
      this.setState({
        username: e.target.value,
      });
    }

    // password change handler to update state variable with the text entered by the user
    passwordChangeHandler = (e) => {
      this.setState({
        password: e.target.value,
      });
    }

    emailIdChangeHandler = (e) => {
      this.setState({
        emailId: e.target.value,
      });
    }

    // submit Login handler to send a request to the node backend
    submitLogin = (e) => {
      // prevent page from refresh
      e.preventDefault();

      // eslint-disable-next-line max-len
      const data = { EmailId: this.state.emailId, Password: this.state.password, Name: this.state.username };
      this.props.createUser(data);
    }

    render() {
      // redirect based on successful login
      if (this.props.authenticated) {
        return <Redirect to="/profile" />;
      }
      return (
        <div>
          <Container className="upperlanding">
            <div>
              {' '}
              <a href="/landing">
                <img id="logo" alt="logo" className="rounded-cirlce" src="https://assets.splitwise.com/assets/core/logo-wordmark-horizontal-white-short-c309b91b96261a8a993563bdadcf22a89f00ebb260f4f04fd814c2249a6e05d4.svg" />
              </a>
            </div>
            <a className="dropdown-reveal  px-4 block cursor-pointer font-mont font-semibold" id="login" href="/login">Log in</a>
            <a className="bg-teal  px-3 py-2 sm:px-5 sm:py-3 rounded shadow sm-cta-button" id="signup" href="/signup">Sign up</a>
          </Container>
          <div className="container">
            <img className="envelope-landing" src="https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg" alt="No img" width="200" height="200" />

            <div className="login-form">
              <div className="main-div">
                <div className="panel">

                  <h4>INTRODUCE YOURSELF</h4>
                  <hr />
                </div>

                <div className="form-group">
                  <input onChange={this.usernameChangeHandler} type="text" className="form-control" name="username" placeholder="Username" />
                </div>
                <div className="form-group">
                  <input onChange={this.emailIdChangeHandler} type="email" className="form-control" name="email" placeholder="EmailId" />
                </div>
                <div className="form-group">
                  <input onChange={this.passwordChangeHandler} type="password" className="form-control" name="password" placeholder="Password" />
                </div>

                <Button type="button" style={{ backgroundColor: '#ff652f' }} onClick={this.submitLogin} size="lg" className="btn-orange btn-large primary">Sign Me Up !</Button>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

const mapStateToProps = (state) => ({
  authenticated: state.auth.authenticated,
});

const mapDispatchToProps = (dispatch) => ({
  createUser: (payload) => dispatch(createUser(payload)),
});

// export Login Component
export default connect(mapStateToProps, mapDispatchToProps)(signup);

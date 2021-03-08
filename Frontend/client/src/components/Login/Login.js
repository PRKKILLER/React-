/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable camelcase */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { loginUser } from '../../Redux/actions/action';
// Define a Login Component
class Login extends Component {
  // call the constructor method
  constructor(props) {
    // Call the constrictor of Super class i.e The Component
    super(props);
    // maintain the state required for this component
    this.state = {
      username: '',
      password: '',
      authFlag: false,
    };
    // Bind the handlers to this class
    this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
    this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  // Call the Will Mount to set the auth Flag to false
  UNSAFE_componentWillMount() {
    this.setState({
      authFlag: false,
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

    // submit Login handler to send a request to the node backend
    submitLogin = (e) => {
      const headers = new Headers();
      // prevent page from refresh
      e.preventDefault();

      // make a post request with the user data
      const data = { EmailId: this.state.username, Password: this.state.password };
      this.props.loginUser(data);
    }

    render() {
      // redirect based on successful login
      if (this.props.authUser) {
        return <Redirect to="/profile" />;
      }
      return (
        <div>
          <div className="container">

            <div className="login-form">
              <div className="main-div">
                <div className="panel">

                  <p>Please enter your username and password</p>
                </div>

                <div className="form-group">
                  <input onChange={this.usernameChangeHandler} type="text" className="form-control" name="username" placeholder="Username" />
                </div>
                <div className="form-group">
                  <input onChange={this.passwordChangeHandler} type="password" className="form-control" name="password" placeholder="Password" />
                </div>
                <button type="button" style={{ backgroundColor: '#ff652f' }} onClick={this.submitLogin} className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
}
const mapStateToProps = (state) => ({
  authUser: state.auth.authenticated,
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (payload) => dispatch(loginUser(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

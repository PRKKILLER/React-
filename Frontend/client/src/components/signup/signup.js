/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */
/* eslint-disable react/no-unused-state */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createUser } from '../../Redux/actions/action';

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
                  <input onChange={this.emailIdChangeHandler} type="email" className="form-control" name="email" placeholder="EmailId" />
                </div>
                <div className="form-group">
                  <input onChange={this.passwordChangeHandler} type="password" className="form-control" name="password" placeholder="Password" />
                </div>

                <button type="button" style={{ backgroundColor: '#ff652f' }} onClick={this.submitLogin} className="btn btn-primary">SignUp</button>
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

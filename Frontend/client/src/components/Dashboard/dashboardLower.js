/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../styles/dashboard.css';

// eslint-disable-next-line react/prefer-stateless-function
class Footer extends Component {
  constructor(props) {
    // Call the constrictor of Super class i.e The Component
    super(props);
    // maintain the state required for this component
    // this.state = {
    //   total_Balance: '',
    //   you_Owe: '',
    //   you_are_Owed: '',
    // };
    // // Bind the handlers to this class
    // this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
    // this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
    // this.submitLogin = this.submitLogin.bind(this);
    this.state = {
      data: {
        owesList: [],
        owedList: [],
        owesTotalsList: [],
        owedTotalsList: [],
        owes: [],
        owed: [],
      },
      dataEval: false,
    };
  }

  render() {
    console.log(this.props.owes);
    console.log(this.props.owed);
    return (
      <Container className="justify-content-md-center-lower">
        <Row>
          <Col><h3 style={{ color: '#999' }}>You Owe</h3></Col>
          <Col><h3 style={{ color: '#999' }}>You Are Owed</h3></Col>
        </Row>
        <div className="Row">
          <div className="col" id="uowelist">
            <ul>
              {this.props.owes.map((user) => (
                <li className="relationship">
                  <img src="https://splitwisebucket.s3.us-east-2.amazonaws.com/User1%40gmail.com" className="rounded-circle profilepic" alt="Avatar" />
                  <span>
                    {' '}
                    { user.UserId2 }
                    {' '}
                    is owed
                    {' '}
                    { user.Owes }
                    {' '}
                    from group
                    {' '}
                    {user.GroupName}
                    {' '}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col" id="urowedlist">
            <ul>
              {this.props.owed.map((user) => (
                <li className="relationship">
                  <img src="https://splitwisebucket.s3.us-east-2.amazonaws.com/User1%40gmail.com" className="rounded-circle profilepic" alt="Avatar" />
                  <span>
                    {' '}
                    { user.UserId1 }
                    {' '}
                    owes you
                    {' '}
                    { user.Owes }
                    {' '}
                    from group
                    {' '}
                    {user.GroupName}
                    {' '}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    );
  }
}

export default Footer;

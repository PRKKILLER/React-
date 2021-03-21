/* eslint-disable react/prop-types */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-undef */
import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../styles/dashboard.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select';

class Header extends Component {
  constructor(props) { // Call the constrictor of Super class i.e The Component
    super(props);
    // maintain the state required for this component
    this.state = {
      selected: '',
      modal: false,
      // userSelected: '',
      // // UserId: localStorage.getItem('EmailId'),
      // // selectedUser:'',
    };
  }

  showModal = () => {
    this.setState({
      modal: true,
    });
  }

  onChangeOption = (value) => {
    this.setState({ selected: value });
  }

  handleClose = () => {
    this.setState({
      modal: false,
    });
  }

   handleSettle = async () => {
     console.log(this.state.selected);
     const settleUser = this.state.selected;
     const currUser = localStorage.getItem('EmailId');
     //  console.log(settleUser, currUser);
     try {
       const settleRes = await axios.post('http://localhost:3002/dashboard/settleup', { UserId1: settleUser, UserId2: currUser });
       console.log(settleRes);
     } catch (err) {
       console.log(err);
     }
   }

   render() {
     return (
       <Container className="shadow p-3 mb-5 bg-white rounded" className="justify-content-md-center">
         <Jumbotron className="jumbotron">
           <Row>
             <h3>Dashboard </h3>
             <Col><Button id="settle_button" onClick={this.showModal}>Settle Up Expenses</Button></Col>
           </Row>
           <hr />
         </Jumbotron>

         <Modal
           show={this.state.modal}
           onHide={this.handleClose}
           backdrop="static"
           keyboard={false}
         >
           <Modal.Header closeButton>
             <Modal.Title>Settle up with your Friend!</Modal.Title>
           </Modal.Header>
           <Modal.Body>
             <Select
               className="names"
               options={this.props.settleList}
               onChange={(opt) => this.onChangeOption(opt.value)}
             />
           </Modal.Body>
           <Modal.Footer>
             <Button variant="light" onClick={this.handleClose}>
               Close
             </Button>
             <Button variant="primary" id="save" onClick={this.handleSettle}>Settle UP</Button>
           </Modal.Footer>
         </Modal>

       </Container>
     );
   }
}

export default Header;

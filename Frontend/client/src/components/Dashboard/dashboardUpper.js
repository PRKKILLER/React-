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
      availUsers: [
        { label: 'harry', value: 'harry' },
        { label: 'tom', value: 'tom' },
        { label: 'amanda', value: 'amanda' },
        { label: 'rom', value: 'rob' },
      ],
      navData: {
        total: 0,
        owes: 0,
        owed: 0,
      },
      data: {
        owesList: [],
        owedList: [],
        owesTotalsList: [],
        owedTotalsList: [],
        owes: [],
        owed: [],
      },
      dataEval: false,
      modal: false,
      userSelected: '',
      // UserId: localStorage.getItem('EmailId'),
      // selectedUser:'',
    };
  }

 getCurrentUserData = () => {
   const retrievedObject = localStorage.getItem('user');
   if (retrievedObject === null) {
     return false;
   }
   return retrievedObject;
 }

  showModal = () => {
    this.setState({
      modal: true,
    });
  }

  handleClose = () => {
    this.setState({
      modal: false,
    });
  }

  editSearchTerm=(e) => {
    this.setState({ searchTerm: e.target.value });
  }

 dynamicSearch=(e) => {
   this.state.names.filter((name) => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()));
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
         <Row>
           <Col className="grid">You owe blah blah</Col>
           <Col className="grid">You owe blah blah</Col>
           <Col className="grid">You owe blah blah</Col>
         </Row>
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
             options={this.state.availUsers}
             onChange={(opt) => console.log(opt.label, opt.value)}
           />
         </Modal.Body>
         <Modal.Footer>
           <Button variant="light" onClick={this.handleClose}>
             Close
           </Button>
           <Button variant="primary" id="save">Settle UP</Button>
         </Modal.Footer>
       </Modal>

     </Container>
   );
 }
}

export default Header;

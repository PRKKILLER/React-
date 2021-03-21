/* eslint-disable no-alert */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-filename-extension */
import Jumbotron from 'react-bootstrap/Jumbotron';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import '../../styles/grouppage.css';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

class ExpenseModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      amount: '',
      description: '',
    };
  }

  handleClose = () => this.setState({ show: false });

  handleShow = () => this.setState({ show: true });

  onChangeAmount = (amount) => this.setState({ amount: amount.target.value });
  // console.log();

  onChangeDesc = (description) => this.setState({ description: description.target.value });

    handleSave = async () => {
      const Amount = this.state.amount;
      const Description = this.state.description;
      const EmailId = localStorage.getItem('EmailId');
      const { GroupId } = this.props;
      const body = {
        Amount,
        Description,
        EmailId,
        GroupId,
      };
      const res = await axios.post('http://localhost:3002/individualgroup/addExpense', body);
      if (res.status === 200) {
        alert(res.data.body);
      }
    }

    render() {
      return (
        <>
          <Container className="shadow p-3 mb-5 bg-white rounded" className="justify-content-md-center-group">
            <Jumbotron className="jumbotron-group">
              <Row className="rrow">
                <Col><Button id="expense_button" onClick={this.handleShow}>Add an Expense</Button></Col>
              </Row>
            </Jumbotron>
          </Container>

          <Modal
            show={this.state.show}
            onHide={this.handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add An Expense</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img className="category" alt="usrprofile" src="https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/uncategorized/general@2x.png" />
              <input type="text" className="description" name="description" placeholder="Enter a description" onChange={(e) => this.onChangeDesc(e)} />
              <div className="cost_container">
                <span className="currency_code">$</span>
                <input type="text" className="cost" placeholder="0.00" name="amount" onChange={(e) => this.onChangeAmount(e)} />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="light" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" id="save" onClick={this.handleSave}>Save</Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
}

export default ExpenseModal;

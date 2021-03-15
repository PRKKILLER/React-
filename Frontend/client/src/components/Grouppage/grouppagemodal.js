/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-filename-extension */
import Jumbotron from 'react-bootstrap/Jumbotron';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import '../../styles/grouppage.css';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container className="shadow p-3 mb-5 bg-white rounded" className="justify-content-md-center-group">
        <Jumbotron className="jumbotron-group">
          <Row className="rrow">
            <h3>Group Name </h3>
            <Col><Button id="expense_button" onClick={handleShow}>Add an Expense</Button></Col>
          </Row>
        </Jumbotron>
      </Container>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add An Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="category" alt="usrprofile" src="https://s3.amazonaws.com/splitwise/uploads/category/icon/square_v2/uncategorized/general@2x.png" />
          <input type="text" className="description" placeholder="Enter a description" />
          <div className="cost_container">
            <span className="currency_code">$</span>
            <input type="text" className="cost" placeholder="0.00" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" id="save">Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Example;

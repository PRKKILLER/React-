/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBDataTable,
} from 'mdbreact';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../styles/mygroups.css';
import Button from 'react-bootstrap/Button';

const TablePage = ({ data }) => (
  <Container className="justify-content-md-center-lower">
    <Row className="rrrow">
      <MDBDataTable
        striped
        bordered
        small={true}
        searching
        data={data}
        hover
      />
    </Row>
  </Container>
);

export default TablePage;

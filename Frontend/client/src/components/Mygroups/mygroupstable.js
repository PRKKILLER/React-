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

const TablePage = () => {
  const handleRowClick = () => {
    console.log('Say hi');
  };
  const data = {
    columns: [
      {
        label: '#',
        field: 'id',
        sort: 'asc',
      },
      {
        label: 'Name',
        field: 'Name',
        sort: 'asc',
      },
      {
        label: 'Status',
        field: 'status',
        sort: 'asc',
      },
    ],
    rows: [
      {
        id: '1',
        Name: ' Harry ',
        status: <Button variant="outline-danger">Leave Group</Button>,
        clickEvent: handleRowClick(),
      },
      {
        id: '2',
        Name: 'Tom',
        status: <Button variant="outline-success">Group Invitation</Button>,
        clickEvent: handleRowClick,
      },
      {
        id: '3',
        Name: 'Dick',
        status: <Button variant="outline-success">Group Invitation</Button>,
        clickEvent: handleRowClick,
      },
    ],
  };

  return (
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
};

export default TablePage;

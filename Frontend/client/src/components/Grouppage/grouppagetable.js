/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  MDBDataTable,
} from 'mdbreact';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import '../../styles/mygroups.css';

const TablePage = () => {
  const data = {
    columns: [
      {
        label: '#',
        field: 'id',
        sort: 'asc',
      },
      {
        label: 'Date',
        field: 'Date',
        sort: 'asc',
      },
      {
        label: 'Expense',
        field: 'Expense',
        sort: 'asc',
      },
      {
        label: 'Amount',
        field: 'Amount',
        sort: 'asc',
      },
      {
        label: 'Paid By',
        field: 'Paid',
        sort: 'asc',
      },
    ],
    rows: [
      {
        id: '1',
        Name: ' Harry ',
        Date: '02/10/2020',
        Expense: 'Bhendi chi bhaji',
        Amount: '100rs',
        Paid: 'User1',
      },
      {
        id: '2',
        Name: ' PRATIK ',
        Date: '02/10/2020',
        Expense: 'Bhendi chi bhaji',
        Amount: '100rs',
        Paid: 'User1',
      },
      {
        id: '3',
        Name: ' Harry ',
        Date: '02/10/2020',
        Expense: 'Bhendi chi bhaji',
        Amount: '100rs',
        Paid: 'User1',
      },
    ],
  };

  return (
    <Container className="justify-content-md-center-lower-group">
      <Row className="rrow">
        <MDBDataTable
          striped
          bordered
          small
          searching
          data={data}
          hover
        />
      </Row>
    </Container>
  );
};

export default TablePage;

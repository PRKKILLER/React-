/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import '../../styles/mygroups.css';

class TablePage extends Component {
  render() {
    // console.log('this props data', this.props.data);
    return (
      <table className="table" id="grouppagetable">
        <thead className="thead-dark">
          <tr>
            <th>Expense description</th>
            <th>Paid By</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((expense) => (
            <tr>
              <td>{expense.Description}</td>
              <td>{expense.EmailId}</td>
              <td>{expense.Amount}</td>
              <td>{expense.createdAt.slice(0, 10)}</td>
            </tr>
          ))}
        </tbody>
      </table>

    );
  }
}

export default TablePage;

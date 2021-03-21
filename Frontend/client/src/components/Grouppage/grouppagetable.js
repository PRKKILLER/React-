/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import '../../styles/mygroups.css';

class TablePage extends Component {
  render() {
    console.log(this.props.data);
    return (
      <table className="table" id="grouppagetable">
        <thead className="thead-dark">
          <tr>
            <th>Expense description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((expense) => (
            <tr>
              <td>{expense.Description}</td>
              <td>{expense.Amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

    );
  }
}

export default TablePage;

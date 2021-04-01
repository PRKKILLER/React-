/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import '../../styles/mygroups.css';

class Usersummary extends Component {
  render() {
    console.log('this user summary props data', this.props.data);
    return (
      <div className="UserSummaryTable">
        <ul className="list-group list-group-item-success">
          {this.props.data.map((usersummary) => (
            <li className="list-group-item">
              {usersummary.UserId1}
              {' '}
              Owes
              {' '}
              {usersummary.UserId2}
              {' '}
              {usersummary.Owes}
              $
            </li>
          ))}
        </ul>
      </div>
    //   <table className="table" id="grouppagetable">
    //     <thead className="thead-dark">
    //       <tr>
    //         <th>Expense description</th>
    //         <th>Amount</th>
    //         <th>Date</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {this.props.data.map((expense) => (
    //         <tr>
    //           <td>{expense.Description}</td>
    //           <td>{expense.Amount}</td>
    //           <td>{expense.createdAt.slice(0, 10)}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>

    );
  }
}

export default Usersummary;

/* eslint-disable no-console */
const userGroupTransaction = require('../models/User_Grp_Transaction');

const addtransaction = async ({
  EmailId, Description, Amount, GroupId,
}) => {
  console.log('inside addtransaction');
  // console.log();
  try {
    const response = await userGroupTransaction.create({
      EmailId, Description, Amount, GroupId,
    });
    return ({
      status: 200,
      data: response,

    });
  } catch (err) {
    return ({
      status: 500,
      data: err,
    });
  }
};
const gettransactions = async (GroupId) => {
  console.log('inside Gettransaction with groupId', GroupId);
  // console.log();
  try {
    const response = await userGroupTransaction.findAll({
      where: {
        GroupId,
      },
    });
    console.log(response);
    return ({
      status: 200,
      data: response,

    });
  } catch (err) {
    return ({
      status: 500,
      data: err,
    });
  }
};

module.exports = { addtransaction, gettransactions };

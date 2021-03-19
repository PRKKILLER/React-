/* eslint-disable no-console */
const recentActivity = require('../models/recentactivity');

const addActivity = async ({ OperationType, GroupId, GroupName }) => {
  console.log('inside addactivity');
  // console.log();
  try {
    const response = await recentActivity.create({ OperationType, GroupId, GroupName });
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
module.exports = { addActivity };

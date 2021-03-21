/* eslint-disable no-console */
const { Op } = require('sequelize');
const recentActivity = require('../models/recentactivity');
const { getGroupfromUserId } = require('./groupUserController');

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
const getlist = (groupIds) => {
  const grouplist = [];
  for (let i = 0; i < groupIds.length; i += 1) {
    grouplist.push(groupIds[i].GroupId);
  }
  return (grouplist);
};
const getactivity = async (UserId) => {
  try {
    const groupIds = await getGroupfromUserId(UserId);
    const grouplist = getlist(groupIds.body);
    const activities = await recentActivity.findAll({
      where:
      {
        GroupId:
        { [Op.in]: grouplist },
      },
    });
    console.log(activities);
    if (activities !== undefined && activities !== null) {
      return ({
        status: 200,
        body: activities,
      });
    }
    return ({
      status: 404,
      body: 'not found',
    });
  } catch (err) {
    return ({
      status: 500,
      body: err,
    });
  }
};
module.exports = { addActivity, getactivity };

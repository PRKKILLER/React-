// const { roupUsers } = require('../models/index');
const { Op } = require('sequelize');
const GroupUser = require('../models/group_user');

const getGroupUsers = async (GroupId) => {
  try {
    const groupObject = await GroupUser.findAll({
      attributes: ['UserId'],
      where: {
        GroupId,
        Flag: true,
      },
    });
    if (groupObject !== undefined || groupObject !== null) {
      return {
        statusCode: 200,
        body: groupObject,
      };
    }
    return {
      statusCode: 404,
      body: 'No such group exists',
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: err,
    };
  }
};

const getGroupUsersWithoutCurrent = async (GroupId, CurrentUserId) => {
  try {
    const groupObject = await GroupUser.findAll({
      attributes: ['UserId'],
      where: {
        GroupId,
        Flag: true,
        [Op.not]: [
          { UserId: CurrentUserId }],
      },
    });
    if (groupObject !== undefined || groupObject !== null) {
      return {
        statusCode: 200,
        body: groupObject,
      };
    }
    return {
      statusCode: 404,
      body: 'No such group exists',
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: err,
    };
  }
};

const getGroupfromUserId = async (UserId) => {
  try {
    const groupObject = await GroupUser.findAll({
      attributes: ['GroupId'],
      where: {
        UserId,
        Flag: true,
      },
    });
    if (groupObject !== undefined || groupObject !== null) {
      return {
        statusCode: 200,
        body: groupObject,
      };
    }
    return {
      statusCode: 404,
      body: 'No such group exists',
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: err,
    };
  }
};
module.exports = {
  getGroupUsers,
  getGroupUsersWithoutCurrent,
  getGroupfromUserId,
};

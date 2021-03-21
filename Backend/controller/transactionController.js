/* eslint-disable no-unused-vars */
const { Op } = require('sequelize');
const userUser = require('../models/user_user');

const getDuesForGroup = async (GroupId, UserId) => {
  try {
    console.log('inside getDuesForGroup userid', UserId);
    console.log('inside getDuesForGroup GroupId', GroupId);
    const duesObject = await userUser.findAll({
      where: {
        GroupId,
        UserId1: UserId,
        Owes: { [Op.ne]: 0 },
      },
    });
    console.log('line 14');
    if (duesObject !== undefined || duesObject !== null) {
      return {
        statusCode: 200,
        body: duesObject,
      };
    }
    console.log('line 21');
    return {
      statusCode: 404,
      body: 'No such dues exists',
    };
  } catch (err) {
    console.log('err', err);
    return {
      statusCode: 500,
      body: err,
    };
  }
};
module.exports = getDuesForGroup;

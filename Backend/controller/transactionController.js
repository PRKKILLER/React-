/* eslint-disable no-unused-vars */
const { Op } = require('sequelize');
const userUser = require('../models/user_user');

const getDuesForGroup = async (GroupId, UserID) => {
  try {
    const duesObject = await userUser.findAll({
      where: {
        [Op.and]: [{ GroupId }, { UserId1: UserID }],
        Owes: { [Op.ne]: 0 },
      },
    });
    if (duesObject !== undefined || duesObject !== null) {
      return {
        statusCode: 200,
        body: duesObject,
      };
    }
    return {
      statusCode: 404,
      body: 'No such dues exists',
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: err,
    };
  }
};
module.exports = getDuesForGroup;

/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable import/no-unresolved */
/* eslint-disable consistent-return */
const { Op } = require('sequelize');
// const { getParams, s3 } = require('../services/s3Uploader');
// const router = express.Router();
const Users = require('../models/User');

const findUser = async (EmailId) => {
  console.log(EmailId);
  try {
    const user = await Users.findOne({
      where: {
        EmailId,
      },
    });
    if (user !== null && user !== undefined) {
      return {
        statusCode: 200,
        body: user,

      };
    }
    return {
      statusCode: 404,
      body: 'Not available',
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: 'ERR',
    };
  }
};

module.exports = { findUser };

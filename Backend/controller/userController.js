/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable import/no-unresolved */
/* eslint-disable consistent-return */
const { Op } = require('sequelize');
// const { getParams, s3 } = require('../services/s3Uploader');
// const router = express.Router();
const Users = require('../models/User');

const EmailId = 'kasle36pratik@gmail.com';
const findUser = async (EmailId) => {
  const user = await Users.findAll({
    where: {
      EmailId,
    },
  });
  if (user !== undefined && user !== null) {
    return {
      statusCode: 200,
      body: user,

    };
  }

  return {
    statusCode: 500,
    body: 'ERR',
  };
};
module.exports = findUser;

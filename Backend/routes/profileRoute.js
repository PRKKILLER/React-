/* eslint-disable import/order */
/* eslint-disable no-console */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
const express = require('express');
const User = require('../models/user');
const { Op } = require('sequelize');
const findUser = require('../controller/userController');

const router = express.Router();
// Route to handle Post Request Call

router.post('/login', async (req, res) => {
  // Object.keys(req.body).forEach((key) => {
  //   req.body = JSON.parse(key);
  // });
  const EmailId = await req.body.EmailId;
  const Password = await req.body.Password;
  console.log(EmailId, Password);
  try {
    const user = await User.findOne({ where: { [Op.and]: [{ EmailId }, { Password }] } });
    if (user !== undefined) {
      res.status(200).send({ user });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post('/signup', async (req, res) => {
  // Object.keys(req.body).forEach((key) => {
  //   req.body = JSON.parse(key);
  // });

  console.log(req.body);

  const Name = await req.body.Name;
  const EmailId = await req.body.EmailId;
  const Password = await req.body.Password;
  // // const Name = 'Pratik';
  // // const EmailId = 'kasle36pratik@gmail.com';
  // // const Password = '123';
  console.log(EmailId, Password, Name);
  res.send({ EmailId, Password, Name });
  try {
    const create = await User.create({ Name, EmailId, Password });
    res.status(200).send({
      create,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

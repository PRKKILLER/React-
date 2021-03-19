/* eslint-disable import/order */
/* eslint-disable no-console */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
const express = require('express');
const Users = require('../models/user');
const { Op } = require('sequelize');
const multer = require('multer');
const { s3, getParams } = require('../services/s3uploader');

const storage = multer.memoryStorage();
const upload = multer({ storage });
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
    const user = await Users.findOne({ where: { [Op.and]: [{ EmailId }, { Password }] } });
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
    const create = await Users.create({ Name, EmailId, Password });
    res.status(200).send({
      create,
    });
  } catch (err) {
    console.log(err);
  }
});

router.post('/updateUserDetails', async (req, res) => {
  console.log('Inside UpdereUserDetails');
  const {
    EmailId, Name, PhoneNumber, Currency,
  } = req.body;
  try {
    const object = await Users.update({ Name, PhoneNumber, Currency }, {
      where: {
        EmailId,
      },
    });
    res.status(200).send({
      data: object,
    });
  } catch (err) {
    res.status(500).send({
      data: err,
    });
  }
});

router.post('/addProfilePicture', upload.single('file'), async (req, res) => {
  console.log('Inside Picture router');
  const { file } = req;
  const { EmailId } = req.body;
  console.log('EmailId', EmailId);
  console.log('file', file);
  const params = getParams(EmailId, file.buffer, file.mimetype);
  s3.upload(params, async (err, data) => {
    console.log(await data.Location);
    const profilepicupdateRes = await Users.update({ Picture: data.Location }, {
      where: {
        EmailId,
      },
    });
    console.log('res', profilepicupdateRes);
    res.send({
      status: 200,
      data: profilepicupdateRes,
    });
  });
});
module.exports = router;

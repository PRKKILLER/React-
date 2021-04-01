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
const bcrypt = require('bcrypt');

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
    const user = await Users.findOne({ where: { EmailId } });
    console.log(' login response ', user);
    if (user === undefined || user === null) {
      res.send(500).send({ body: 'No User Found' });
    }
    bcrypt.compare(Password, user.Password, (
      err,
      isMatch,
    ) => {
      // console.log(bcrypt.hashSync(password, 10));
      // console.log(userDetails.password);
      if (err) {
        console.log('err', err);
        res.status(500).send({
          errors: {
            body: err,
          },
        });
      } else if (!isMatch) {
        res.status(400).send({
          errors: {
            body: 'Unauth User',
          },
        });
      } else {
        console.log('Successful log in');
        delete user.dataValues.Password;
        console.log('user onject', user.EmailId);
        res.status(200).send({
          user,
        });
      }
    });
  } catch (err) {
    console.log('error', err);
    res.status(500).send({
      body: err,
    });
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
  try {
    const create = await Users.create({ Name, EmailId, Password });
    console.log('response on duplicate', create);
    if (create) {
      res.status(200).send({
        create,
      });
    } else {
      res.status(400).send({
        error: 'User Already Exist',
      });
    }
  } catch (err) {
    console.log('Error console 96', err.errors[0].message);
    if (err.errors[0].message === 'Users.EmailId must be unique') {
      res.status(202).send({
        error: 'User Already Exist',
      });
    } else {
      res.status(500).send({
        err,
      });
    }
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

/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');
const { Op } = require('sequelize');
const multer = require('multer');
const GroupUser = require('../models/group_user');

const storage = multer.memoryStorage();
const upload = multer({ storage });
// const findUser = require('../controller/userController');
const Group = require('../models/group');

const { getParams, s3 } = require('../services/s3uploader');

const router = express.Router();
// Route to handle Post Request Call

router.post('/creategroup', async (req, res) => {
  const {
    CreatorEmail,
    GroupName,
  } = req.body;
  //   create a group
  try {
    const creategrpres = await Group.create({ CreatorEmail, GroupName });
    res.send({
    //   createresponse,
      status: 200,
      Groupdetails: creategrpres.dataValues,
    });
  } catch (err) {
    res.send({
    //   createresponse,
      status: 500,
      data: err,
    });
  }
  // create a row in group-user tabl
  //  const creategrpusrres = await GroupUser.create
});

router.post('/addProfilePicture', upload.single('file'), async (req, res) => {
  const { file } = req;
  const { GroupId } = req.body;
  console.log('GroupId', GroupId);
  console.log('file', file);
  const params = getParams(GroupId, file.buffer, file.mimetype);
  s3.upload(params, async (err, data) => {
    if (err) {
      res.status(500).send({
        errors: {
          body: err,
        },
      });
    } else {
      try {
        console.log(await data.Location);
        const profilepicupdateRes = await Group.update({ URL: data.Location }, {
          where: {
            GroupId,
          },
        });
        res.send({
          status: 200,
          data: profilepicupdateRes,
        });
      } catch (err1) {
        res.send({
          status: 500,
          data: err1,
        });
      }
    }
  });
});

router.post('/addusertorgrp', async (req, res) => {
  const {
    GroupId,
    UserId,
    GroupName,
  } = req.body;
    //   create a group
  try {
    const creategrpusrres = await GroupUser.create({ GroupId, UserId, GroupName });
    res.send({
      status: 200,
      GrpUsrDetails: creategrpusrres.dataValues,
    });
  } catch (err) {
    res.send({
      status: 500,
      data: err,
    });
  }
});

module.exports = router;

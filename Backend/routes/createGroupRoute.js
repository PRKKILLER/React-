/* eslint-disable no-unused-vars */
/* eslint-disable no-await-in-loop */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
const express = require('express');
const { Op } = require('sequelize');
const multer = require('multer');
const GroupUser = require('../models/group_user');
const Users = require('../models/user');

const storage = multer.memoryStorage();
const upload = multer({ storage });
const Group = require('../models/group');
const { getParams, s3 } = require('../services/s3uploader');
// const { bulkCreate } = require('../models/group_user');

const router = express.Router();
// Write function for initialization
router.post('/creategroup', async (req, res) => {
  const {
    CreatorEmail,
    GroupName,
  } = req.body;
  //   create a group
  try {
    const creategrpres = await Group.create({ CreatorEmail, GroupName });
    res.status(200).send({
      Groupdetails: creategrpres.dataValues,
    });
  } catch (err) {
    res.status(500).send({
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
    UserIds,
    GroupName,
  } = req.body;
    //   create a group
  console.log('use ids', UserIds);
  const creategrpusrres = [];
  try {
    for (let i = 0; i < UserIds.length; i += 1) {
      console.log(UserIds[i].EmailId);
      const UserId = UserIds[i].EmailId;
      console.log('user id inside loop', UserId);
      creategrpusrres.push({ GroupId, UserId, GroupName });
    }
    const bulkRes = await GroupUser.bulkCreate(creategrpusrres);
    res.status(200).send('Users added to GroupUser');
  } catch (err) {
    console.log(err);
    res.status(500).send({
      data: err,
    });
  }
});

router.get('/getAllUsersExceptCurrent/:EmailId', async (req, res) => {
  const { EmailId } = req.params;
  console.log(EmailId);
  try {
    const userObject = await Users.findAll({
      where: {
        [Op.not]: { EmailId },
      },
    });
    console.log(userObject);
    if (userObject !== undefined && userObject !== null) {
      res.send({
        status: 200,
        body: userObject,
      });
    }
  } catch (err) {
    res.send({
      status: 500,
      body: err,
    });
  }
});

module.exports = router;

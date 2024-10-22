/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-console */
const express = require('express');
const GroupUser = require('../models/group_user');
// const leaveGroupUser = require('../controller/groupController');
const router = express.Router();
const getDuesForGroup = require('../controller/transactionController');
const userUser = require('../models/user_user');
const leaveGroupUser = require('../controller/groupController');

router.get('/myGroupList/:EmailID', async (req, res) => {
  const EmailId = req.params.EmailID;
  console.log('Insode');
  console.log(EmailId);
  try {
    console.log('line 12');
    const response = await GroupUser.findAll({
      where: {
        UserId: EmailId,
      },
    });
    if (response !== undefined
        && response !== null
        && response.length !== 0) {
      console.log(' Response ', response);
      res.send({
        status: 200,
        data: response,
      });
    } else {
      res.send({
        status: 500,
        data: 'Not In Any Group',
      });
    }
  } catch (err1) {
    console.log(err1);
    res.send({
      status: 404,
      data: err1,
    });
  }
});

router.post('/leaveGroup', async (req, res) => {
  const { GroupId, UserId } = req.body;
  console.log('User id ', UserId);
  const getDuesRes = await getDuesForGroup(GroupId, UserId);
  console.log('dues:', getDuesRes);
  const { statusCode, body } = getDuesRes;
  if (statusCode === 200 && body.length === 0) {
    const leaveObject = await leaveGroupUser(GroupId, UserId);
    if (leaveObject.statusCode === 200) {
      res.status(statusCode).send('user left group');
    } else {
      res.status(500).send(leaveObject.body);
    }
  } else {
    res.send('Please clear dues');
  }
});

router.post('/acceptinvitation', async (req, res) => {
  const { GroupId } = req.body;
  const { UserId } = req.body;
  try {
    const response = await GroupUser.update({ Flag: 'true' }, {
      where: {
        GroupId,
        UserId,
      },
    });
    res.send({
      status: 200,
      data: response,
    });
  } catch (err) {
    console.log(err);
    res.send({
      status: 500,
      data: 'Not In Any Group',
    });
  }
});
module.exports = router;

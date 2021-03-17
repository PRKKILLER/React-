const express = require('express');
const User = require('../models/user');
const { Op } = require('sequelize');
const findUser = require('../controller/userController');

const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage });

const { getParams, s3 } = require('../services/s3Uploader');

const router = express.Router();
// Route to handle Post Request Call

router.post('/creategroup', async (req, res) {
    const {
        groupName,
        usercreatingEmail,
        userIDs,
      } = req.body;
    
    const EmailId = await req.body.Groupname;
    const Password = await req.body.Password;

}
const express = require('express');
const User = require('../models/user');
const { Op } = require('sequelize');
const findUser = require('../controller/userController');
const router = express.Router();
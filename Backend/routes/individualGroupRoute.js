/* eslint-disable eqeqeq */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const express = require('express');
const { getGroup } = require('../controller/groupController');
const { findUser } = require('../controller/userController');
const { addActivity } = require('../controller/recentActivitycontroller');
const { getGroupUsersWithoutCurrent } = require('../controller/groupUserController');
const { addUserDeus, getUserSummary } = require('../controller/userUserController');

const router = express.Router();
const { addtransaction, gettransactions } = require('../controller/User_Grp_Transaction_Controller');
// router.get('/getExpensesList/:groupName', async (req, res) => {
//   const expenseListRes = getExpenses(req.params.groupName);
//   const { statusCode, body } = expenseListRes;
//   res.status(statusCode).send(body);
// });
const addUserDeusPool = async ({ Group, EmailId, Amount }) => {
  const { GroupId } = Group.body.dataValues;
  const Userlist = await getGroupUsersWithoutCurrent(GroupId, EmailId);
  const UserId2 = EmailId;
  const Owes = (Number(Amount)) / ((Number(Userlist.body.length)));
  //   console.log(Owes);
  const addUserDeusRes = [];
  for (let i = 0; i < Userlist.body.length; i += 1) {
    // console.log('UserId1', Userlist.body[i].dataValues.UserId);
    const UserId1 = Userlist.body[i].dataValues.UserId;
    // console.log('Owes', Owes);
    // console.log('UserId2', UserId2);
    try {
      addUserDeusRes.push(addUserDeus({
        UserId1, UserId2, GroupId, Owes,
      }));
    } catch (err) {
      console.log(err);
    }
  }
  return Promise.all(addUserDeusRes);
};

router.post('/addExpense', async (req, res) => {
  const {
    EmailId, Description, Amount, GroupId,
  } = req.body;
  console.log('addExpense route', GroupId);
  const createtransactionresponse = await addtransaction({
    EmailId, Description, Amount, GroupId,
  });
  if (createtransactionresponse.status === 200) {
    const Group = await getGroup(GroupId);
    console.log('line38', Group);
    console.log('line39', GroupId);
    const { GroupName } = Group.body.dataValues;
    const User = await findUser(EmailId);
    const UserName = User.body.dataValues.Name;
    const OperationType = `${UserName} added ${Description}  for ${Amount}  in  ${GroupName}`;
    console.log(OperationType);

    const addActivityResponse = await addActivity({ OperationType, GroupId, GroupName });
    // making Changes user-user desus group
    const addUserDeusRes = await addUserDeusPool({ Group, EmailId, Amount });
    if (addUserDeusRes.status == 500) {
      res.send({ status: 500, body: addUserDeusRes.body });
    } else if (addActivityResponse == 500) {
      res.send({ status: 500, body: addUserDeusRes.body });
    } else {
      res.send({ status: 200, body: 'Expense added' });
    }
  } else {
    res.send({ status: 500, body: createtransactionresponse.body });
  }
});

router.get('/showexpanse/:GroupId', async (req, res) => {
  const { GroupId } = req.params;
  console.log(GroupId);
  const transactionres = await gettransactions(GroupId);
  console.log(transactionres);
  if (transactionres.status === 200) {
    console.log(transactionres);
    res.send(transactionres);
  } else {
    res.send(transactionres);
  }
});

router.get('/Groupsummary/:GroupId', async (req, res) => {
  const { GroupId } = req.params;
  console.log(GroupId);
  const userSummaryres = await getUserSummary(GroupId);
  console.log('received data', userSummaryres);
  if (userSummaryres.status === 200) {
    console.log(userSummaryres);
    res.send(userSummaryres);
  } else {
    res.status(500).send(userSummaryres.body);
  }
});
module.exports = router;
// router.post('/getExpense', async (req, res) => {});
// router.get('/getSummary/:groupID', async (req, res) => {});

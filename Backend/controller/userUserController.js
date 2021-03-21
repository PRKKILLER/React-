/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable no-plusplus */
// const e = require('express');
const userUser = require('../models/user_user');
// const addUserDeus=async({ GroupId, EmailId, Amount })=>{
// }
// Initialized dues function
const addUserDeus = async ({
  UserId1, UserId2, GroupId, Owes, GroupName,
}) => {
//   console.log(Owes);
  try {
    const res = await userUser.findOne({ where: { UserId1, UserId2, GroupId } });
    // console.log('line 14', res);
    if (res !== null) {
    //   console.log('line 15');
    //   console.log(res.dataValues.Owes);
      const NewOwes = Number(res.dataValues.Owes) + Number(Owes);
      const resupdate = await userUser.update({ Owes: NewOwes }, {
        where: { UserId1, UserId2, GroupId },
      });
      return ({
        status: 200,
        body: resupdate,
      });
    }
    // console.log('line 26');
    const responsecreate = await userUser.create({
      UserId1, UserId2, GroupId, Owes, GroupName,
    });
    return ({
      status: 201,
      body: responsecreate,
    });
  } catch (err) {
    return ({
      status: 500,
      body: err,
    });
  }
};
const simplify = (table) => {
  console.log('inside simplify', table);
  var new_table = table;
  for (let i = 0; i < table.length; i++) {
    // console.log('i', i, table[i].dataValues.Owes);
    // var flag = 0;
    for (let j = i + 1; j < table.length; j++) {
      if (table[i].dataValues.UserId1 === table[j].dataValues.UserId2 && table[i].dataValues.UserId2 === table[j].dataValues.UserId1 && table[i].dataValues.GroupId === table[j].dataValues.GroupId) {
        // flag = 1;
        console.log('cordinates', i, j);
        console.log('Useridpaire', table[i].dataValues.UserId1, table[j].dataValues.UserId2);
        console.log('Useridpaire', table[i].dataValues.UserId2, table[j].dataValues.UserId1);
        if (table[i].dataValues.owes > table[j].dataValues.owes) {
          // eslint-disable-next-line operator-assignment
          console.log();
          new_table[i].dataValues.Owes = Number(table[i].dataValues.Owes) - Number(table[j].dataValues.Owes);
          new_table.splice(j, 1);
        } else {
          // flag = 1;
          new_table[j].dataValues.Owes = Number(table[j].dataValues.Owes) - Number(table[i].dataValues.Owes);
          new_table.splice(i, 1);
        }
      }
    }
    // if (flag === 0) {
    //   new_table.push(table[i].dataValues);
    // }
  }
  return (new_table);
};
const getUserSummary = async (GroupId) => {
  try {
    const userUserTable = await userUser.findAll({ where: { GroupId } });
    // console.log('line 48', userUserTable);
    if (userUserTable !== null && userUserTable !== undefined) {
      var table = userUserTable;
      // console.log(table);
      const simplified_table = simplify(table);
      console.log('simplified table', simplified_table);
      return ({
        status: 200,
        body: simplified_table,
      });
    } return ({
      status: 201,
      body: 'No data',
    });
  } catch (err) {
    return ({
      status: 500,
      body: err,
    });
  }
};

const settleup = async (UserId1, UserId2) => {
  const response = await userUser.destroy({
    where: {
      UserId1,
      UserId2,
    },
  });
  return (response);
};
const getuserowes = async (EmailId) => {
  const response = await userUser.findAll({
    where: {
      UserId1: EmailId,
    },
  });
  console.log(response);
  return (response);
};

const getUserOwed = async (EmailId) => {
  const response = await userUser.findAll({
    where: {
      UserId2: EmailId,
    },
  });
  return (response);
};
module.exports = {
  getuserowes, getUserOwed, settleup, addUserDeus, getUserSummary,
};

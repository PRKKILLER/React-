const userUser = require('../models/user_user');
// const addUserDeus=async({ GroupId, EmailId, Amount })=>{
// }
// Initialized dues function
const addUserDeus = async ({
  UserId1, UserId2, GroupId, Owes,
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
      UserId1, UserId2, GroupId, Owes,
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
const getUserSummary = async (GroupId) => {
  try {
    const res = await userUser.findAll({ where: { GroupId } });
    console.log('line 42', res);
    if (res !== null && res !== undefined) {
      return ({
        status: 200,
        body: res,
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
module.exports = { addUserDeus, getUserSummary };

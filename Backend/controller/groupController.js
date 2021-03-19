// const GroupUser = require('../models/group_user');
// const GroupUser = require('../models/group');
const Group = require('../models/group');

const getGroup = async (GroupId) => {
  try {
    const groupObject = await Group.findByPk(GroupId);
    if (groupObject !== undefined || groupObject !== null) {
      return {
        statusCode: 200,
        body: groupObject,
      };
    }
    return {
      statusCode: 404,
      body: 'Group not found',
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: err,
    };
  }
};

// const leaveGroupUserObject = await GroupUser.destroy({
//       where: {
//         GroupId,
//         UserId,
//       },
//     });
// const leaveGroupUser = async (GroupId, UserId) => {
//   try {
//     const leaveGroupUserObject = await GroupUser.destroy({
//       where: {
//         GroupId,
//         UserId,
//       },
//     });
//     if (leaveGroupUserObject !== undefined
//         && leaveGroupUserObject !== null
//         // eslint-disable-next-line eqeqeq
//         && leaveGroupUserObject != 0) {
//       return {
//         statusCode: 200,
//         body: 'User group entries deleted successfully(user left group).',
//       };
//     }
//     return {
//       statusCode: 500,
//       body: 'User already left group.',
//     };
//   } catch (err) {
//     return {
//       statusCode: 500,
//       body: err,
//     };
//   }
// };

module.exports = {
  getGroup,

};

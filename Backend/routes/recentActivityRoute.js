/* eslint-disable no-undef */
/* eslint-disable no-console */
const express = require('express');
const { getactivity } = require('../controller/recentActivitycontroller');

const router = express.Router();

router.get('/getRecentActivity/:email', async (req, res) => {
  EmailId = req.params.email;
  const activitiesRes = await getactivity(req.params.email);
  console.log(activitiesRes);
  if (activitiesRes.status === 200) {
    res.status(200).send({
      body: activitiesRes.body,
    });
  } else {
    res.status(500).send({
      body: activitiesRes.body,
    });
  }
});

// router.post('/createActivity', async (req, res) => {
//   const { operationType, GroupId, groupName } = req.body;
//   console.log('Inside Create activity');
//   try {
//     const Object = await recentActivity.create({ operationType, GroupId, groupName });
//     res.send({
//       status: 200,
//       body: Object,
//     });
//   } catch (err) {
//     console.log('34 line', err);
//     res.send({
//       status: 500,
//       body: err,
//     });
//   }
// });

module.exports = router;

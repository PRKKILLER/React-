const express = require('express');
const recentActivity = require('../models/recentactivity');

const router = express.Router();

router.get('/getRecentActivity/:email', async (req, res) => {
  const activitiesRes = await getActivities(req.params.email);
  console.log(activitiesRes);
  if (activitiesRes.statusCode === 200) {
    res.status(200).send({
      body: activitiesRes.body,
    });
  } else {
    res.status(500).send({
      errors: {
        body: activitiesRes.body,
      },
    });
  }
});

router.post('/createActivity', async (req, res) => {
  const { operationType, groupId, groupName } = req.body;
  try {
    const Object = await recentActivity.create({ operationType, groupId, groupName });

    res.send({
      status: 200,
      body: Object,
    });
  } catch (err) {
    res.send({
      status: 500,
      body: err,
    });
  }
});

module.exports = router;

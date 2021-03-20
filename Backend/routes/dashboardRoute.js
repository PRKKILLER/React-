const express = require('express');

const router = express.Router();
const {
  getuserowes, getUserOwed, settleup,
} = require('../controller/userUserController');

router.post('/settleup', async (req, res) => {
  try {
    const {
      UserId1, UserId2,
    } = req.body;
    const response = await settleup(UserId1, UserId2);
    res.status(200).send({ response });
  } catch (err) {
    res.status(500).send({ error: err });
  }
});
router.post('/getUserOwes', async (req, res) => {
  try {
    const {
      EmailId,
    } = req.body;
    const response = await getuserowes(EmailId);
    res.status(200).send({ response });
  } catch (err) {
    res.status(500).send({ error: err });
  }
});
router.post('/getUserOwed', async (req, res) => {
  try {
    const {
      EmailId,
    } = req.body;
    const response = await getUserOwed(EmailId);
    res.status(200).send({ response });
  } catch (err) {
    res.status(500).send({ error: err });
  }
});
module.exports = router;

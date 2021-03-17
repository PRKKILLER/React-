const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: AWS.config.credentials.accessKeyId,
  secretAccessKey: AWS.config.credentials.secretAccessKey,
  region: 'us-east-2',
});

const getParams = (userID, body, ftype) => ({
  Bucket: 'splitwisebucket',
  Key: `${userID}`,
  Body: body,
  ACL: 'public-read',
  ContentType: ftype,
});

module.exports = {
  s3,
  getParams,
};

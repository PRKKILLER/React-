/* eslint-disable no-console */
const { Sequelize, DataTypes } = require('sequelize');

// Option 2: Passing parameters separately (other dialects)

const sequelize = new Sequelize('splitwise', 'root', 'root_123', {
  host: 'splitwise-db.cxahoocsb1cn.us-east-2.rds.amazonaws.com',
  port: 3306,
  logging: console.log,
  maxConcurrentQueries: 100,
  dialect: 'mysql',
  dialectOptions: {
    ssl: 'Amazon RDS',
  },
  pool: { maxConnections: 5, maxIdleTime: 30 },
  language: 'en',
});

const userUser = sequelize.define('userUser', {
  // Model attributes are defined here
  UUID: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,

  },
  // USER1 owes USER2
  UserId1: {
    type: DataTypes.STRING,
    allowNull: false,

  },
  UserId2: {
    type: DataTypes.STRING,
    allowNull: false,

  },
  GroupId: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  Owes: {
    type: DataTypes.INTEGER,
  },
  GroupName: {
    type: DataTypes.STRING,
  },
}, {
  // Other model options go here
});

sequelize.sync();
console.log('UserUser', userUser === sequelize.models.userUser);
module.exports = userUser;

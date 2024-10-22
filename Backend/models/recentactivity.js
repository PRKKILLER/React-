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

const recentActivity = sequelize.define(
  'recentActivity',
  {
    activityId: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1,
    },
    OperationType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    GroupId: {
      type: DataTypes.STRING,
      isEMail: true,
    },
    GroupName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
);

sequelize.sync();
console.log('Recent Activity', recentActivity === sequelize.models.recentActivity);
module.exports = recentActivity;

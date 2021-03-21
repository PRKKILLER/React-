/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
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

async function f() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
f();

const userGroupTransaction = sequelize.define('userGroupTransaction', {
  // Model attributes are defined here

  UUID: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,

  },
  EmailId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Description: {
    type: DataTypes.STRING,

  },
  Amount: {
    type: DataTypes.INTEGER,
  },
  GroupId: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },

}, {
  // Other model options go here
});

sequelize.sync();

console.log('UsrGroupTransaction', userGroupTransaction === sequelize.models.userGroupTransaction);
module.exports = userGroupTransaction;

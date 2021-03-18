/* eslint-disable camelcase */
/* eslint-disable no-console */
const { Sequelize, DataTypes } = require('sequelize');

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('splitwise', 'admin', 'password123', {
  host: 'database-2.c4fklk3lbje2.us-east-2.rds.amazonaws.com',
  port: 3306,
  logging: console.log('Hii'),
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

const GroupUser = sequelize.define('GroupUser', {
  // Model attributes are defined here
  GroupUserId: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV1,
  },
  GroupName: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  UserId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  GroupId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Flag: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },

}, {
  // Other model options go here
});
console.log('GroupUser', GroupUser === sequelize.models.GroupUser);

sequelize.sync();
module.exports = GroupUser;

const { Sequelize, DataTypes } = require('sequelize');

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('splitwise', 'admin', 'password123', {
  host: 'database-2.c4fklk3lbje2.us-east-2.rds.amazonaws.com',
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
const User_User_Transaction = sequelize.define('User_User_Transaction', {
  // Model attributes are defined here
  UUID: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,

  },
  // USER1 PAYES ==>USER2
  UserId1: {
    type: DataTypes.STRING,
    allowNull: false,

  },
  UserId2: {
    type: DataTypes.STRING,
    allowNull: false,

  },
  Amount: {
    type: DataTypes.INTEGER,
  },
  GroupId: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  Date: {
    type: DataTypes.DATE,
    // allowNull defaults to true
  },

}, {
  // Other model options go here
});

sequelize.sync();
// console.log('hiii', User === sequelize.models.User);
model.exports = User_User_Transaction;

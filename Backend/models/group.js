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

async function f() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
f();

const Group = sequelize.define('Group', {
  // Model attributes are defined here
  GroupId: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV1,
  },
  URL: {
    type: DataTypes.STRING(200),
  },
  GroupName: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  CreatorEmail: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },

}, {
  // Other model options go here
});
console.log('Group', Group === sequelize.models.Group);

sequelize.sync();
module.exports = Group;

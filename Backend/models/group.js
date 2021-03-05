// import the require dependencies

const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const session = require('express-session');

const cookieParser = require('cookie-parser');

const cors = require('cors');

app.set('view engine', 'ejs');

// use cors to allow cross origin resource sharing
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

const { Sequelize, DataTypes } = require('sequelize');

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('splitwise', 'admin', 'password123', {
  host: 'database-2.c4fklk3lbje2.us-east-2.rds.amazonaws.com',
  port: 3306,
  logging: console.log("Hii"),
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
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  GroupName: {
    type: DataTypes.STRING,

    // allowNull defaults to true
  },
  Picture: {
    type: DataTypes.STRING,
  },
  MemberIds: {
    type: DataTypes.STRING,
  },
  Timezone: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },

}, {
  // Other model options go here
});
//console.log('hiii', User === sequelize.models.User);

sequelize.sync();
module.exports = Group;
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

const User = sequelize.define('User', {
  // Model attributes are defined here
  EmailId: {
    type: DataTypes.STRING,
    allowNull: false,
    isEmail: true,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
    // allowNull defaults to true
  },
  Password: {
    type: DataTypes.STRING,
  },
  Picture: {
    type: DataTypes.STRING,
  },
  Currency: {
    type: DataTypes.STRING,
  },
  TimeZone: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  DefaultLanguage: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  PhoneNumber: {
    type: DataTypes.INTEGER,
    // allowNull defaults to true
  },

}, {
  // Other model options go here
});

sequelize.sync();
console.log('hiii', User === sequelize.models.User);
module.exports = User;
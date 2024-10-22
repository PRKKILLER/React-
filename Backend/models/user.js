/* eslint-disable no-console */
// import the require dependencies

const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

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
const salt = 10;
const User = sequelize.define('User', {
  // Model attributes are defined here
  EmailId: {
    type: DataTypes.STRING,
    allowNull: false,
    isEmail: true,
    unique: true,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,

    // allowNull defaults to true
  },
  Password: {
    type: DataTypes.STRING,
    allowNull: false,
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
    type: DataTypes.STRING,
    // allowNull defaults to true
  },

}, {
  hooks: {
    // eslint-disable-next-line no-shadow
    beforeCreate: (User) => {
      // eslint-disable-next-line no-param-reassign
      User.Password = User.Password !== '' ? bcrypt.hashSync(User.Password, salt) : '';
    },
  },
  // Other model options go here
});

sequelize.sync();
console.log('User', User === sequelize.models.User);
module.exports = User;

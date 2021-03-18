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

const Invitation = sequelize.define('Invitation', {
  // Model attributes are defined here
  UUID: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    autoIncrement: true,

  },
  UserId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  GroupId: {
    type: DataTypes.STRING,
    // allowNull defaults to true
    allowNull: false,
  },

}, {
  // Other model options go here
});
console.log('Invitation', Invitation === sequelize.models.Invitation);

sequelize.sync();

module.exports = Invitation;

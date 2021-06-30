const Sequelize = require('sequelize');
const env = 'development';
const config = require('../config/config.json')[env];

const User = require('./user');

const db = {};

const sequelize = new Sequelize(
  config.database, 
  config.username, 
  config.password,
  config
);

db.User = User;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

User.init(sequelize);
User.associate(sequelize);

module.exports = db;

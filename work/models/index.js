const Sequelize = require('sequelize');
const env = 'development';
const config = require('../config/config.json')[env];

const User = require('./user');
const List = require('./list');

const db = {};

const sequelize = new Sequelize(
  config.database, 
  config.username, 
  config.password,
  config
);

db.User = User;
db.List = List;

db.sequelize = sequelize;
db.Sequelize = Sequelize;



User.init(sequelize);
List.init(sequelize);

User.associate(db);
List.associate(db);

module.exports = db;

const Sequelize = require('sequelize');
const env = 'development';
const config = require('../config/config.json')[env];

const User = require('./user');
const Post = require('./post');
const Video = require('./video');
const View = require('./view');

const db = {};

const sequelize = new Sequelize(
  config.database, 
  config.username, 
  config.password,
  config
);

db.User = User;
db.Post = Post;
db.Video = Video;
db.View = View;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

User.init(sequelize);
Post.init(sequelize);
Video.init(sequelize);
View.init(sequelize);

User.associate(db);
Post.associate(db);
Video.associate(db);
View.associate(db);

module.exports = db;

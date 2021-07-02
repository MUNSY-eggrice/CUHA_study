const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
        name:{
            type: Sequelize.STRING(20),
            allowNull: false,
            unique: true
        },
        password:{
            type: Sequelize.STRING(100),
            allowNull: false
        },
    }, 
    {
        sequelize,
        timestamps: true,
        underscored: false,
        modelName: 'User',
        tableName: 'user',
        paranoid: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
  }

  static associate(db) {
    db.User.hasMany(db.List, { foreignKey: "user_id", sourceKey: "id" });
  }
};
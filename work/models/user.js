const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
        email: {
            type: Sequelize.STRING(20),
            allowNull: false,
            unique: true
        },
        password:{
            type: Sequelize.STRING(100),
            allowNull: false
        },
        type:{
            type: Sequelize.ENUM('free','premium','admin'),
            allowNull: true,
            defaultValue: "free",
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

  static associate(db) {}
};
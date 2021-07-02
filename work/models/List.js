const Sequelize = require("sequelize");

module.exports = class List extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            content:{
                type: Sequelize.STRING(200),
                allowNull: false,
            },
        },{
            sequelize,
            timestamps: true, //createdAt, updatedAt
            underscored: false, // created_at, updated_at
            modelName: 'List',
            tableName: 'list',
            paranoid: true, //deleted_at
            charset: 'utf8mb4', //emotecon까지 사용가능함
            collate: 'utf8mb4_general_ci',
        });
    }
    static associate(db){
        db.List.belongsTo(db.User, { foreignKey: "user_id", targetKey: "id" });
    }
};
const Sequelize = require("sequelize");

module.exports = class View extends Sequelize.Model{
    static init(sequelize){
        return super.init({
           
        },{
            sequelize,
            timestamps: true, //createdAt, updatedAt
            underscored: false, // created_at, updated_at
            modelName: 'View',
            tableName: 'view',
            paranoid: true, //deleted_at
            charset: 'utf8mb4', //emotecon까지 사용가능함
            collate: 'utf8mb4_general_ci',
        });
    }
    static associate(db){
        db.View.belongsTo(db.User, { foreignKey: "user_id", targetKey: "id" });
        db.View.belongsTo(db.Post, { foreignKey: "post_id", targetKey: "id" });
        db.View.belongsTo(db.Video, { foreignKey: "video_id", targetKey: "id" });
    }
};
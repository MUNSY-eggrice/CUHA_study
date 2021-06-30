const Sequelize = require("sequelize");

module.exports = class Video extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            title:{
                type: Sequelize.STRING(200),
                allowNull: false,
            },
            video:{
                type: Sequelize.STRING(100),
                allowNull: false,
            },  
            subtitle:{
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            img:{
                type: Sequelize.STRING(100),
                allowNull: false,
            },
           
        },{
            sequelize,
            timestamps: true, //createdAt, updatedAt
            underscored: false, // created_at, updated_at
            modelName: 'Video',
            tableName: 'video',
            paranoid: true, //deleted_at
            charset: 'utf8mb4', //emotecon까지 사용가능함
            collate: 'utf8mb4_general_ci',
        });
    }
    static associate(db){
        db.Video.belongsTo(db.Post, { foreignKey: "post_id", targetKey: "id" });
        db.Video.hasMany(db.View, { foreignKey: "video_id", sourceKey: "id" });
    }
};
const Sequelize = require("sequelize");

module.exports = class Post extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            title:{
                type: Sequelize.STRING(200),
                allowNull: false,
            },
            day: {
                type: Sequelize.ENUM("monday", "tuesday","wednesday","thursday","friday","saturday","sunday"),
                allowNull: false,
            },
            tag:{
                type: Sequelize.STRING(100),
                allowNull: false
            },
          
            img:{
                type: Sequelize.STRING(100),
                allowNull: true,
            },
        },{
            sequelize,
            timestamps: true, //createdAt, updatedAt
            underscored: false, // created_at, updated_at
            modelName: 'Post',
            tableName: 'post',
            paranoid: true, //deleted_at
            charset: 'utf8mb4', //emotecon까지 사용가능함
            collate: 'utf8mb4_general_ci',
        });
    }
    static associate(db){
        db.Post.hasMany(db.Video, { foreignKey: "post_id", sourceKey: "id" });
        db.Post.hasMany(db.View, { foreignKey: "post_id", sourceKey: "id" });
    }
};
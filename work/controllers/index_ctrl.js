const User = require("../models/user");
const suquelize = require("sequelize");
const List = require("../models/list");

const getMain = async (req, res) => {
    try {
        let list = {};
        if (req.user && req.user.name) {
            const user = await User.findOne({
              where: { name: req.user.name },
            });
      
             list = await List.findAll({
              where: { user_id: user.id },
            });
           
          }
          res.render("todo",{list});
         } catch (error) {
            console.error(error);
        }
  };

const postList = async (req,res) =>{

    const {content} = req.body;
    try{
        await List.create({
           content,
           user_id:req.user.id,
        });
        return res.redirect('/');
    }catch(error){
        console.error(error);
    }
};


module.exports = {
    getMain,
    postList,
};

/*function abc(){
    return x* x;
}

const abc = function(){
    return x*x;
}

const abc = new Function('x','return = x * x');

const abc = () => {
    return x* x;
};
*/
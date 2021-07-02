const User = require("../models/user");
const suquelize = require("sequelize");
const List = require("../models/List");

const getMain = async (req, res) => {
    try {
        // const list = await List.findAll({
        //     where:{content}
        // })
      return res.render("todo");
    } catch (error) {
      console.error(error);
    }
  };


module.exports = {
    getMain,
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
const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require('../models/user');

const postJoin = async(req,res,next)=>{
    const {name, password} = req.body;
    try{
        const exUser =await User.findOne({where:{name}});
        if(exUser){
            return res.redirect('/join?error=exist');
        }
        const hash = await bcrypt.hash(password, 12);
        await User.create({
            name,
            password: hash
        });
        return res.redirect("/");
    }catch(error){
        console.error(error);
    }
};

const postLogin = (req, res, next) => {
    passport.authenticate("local", (authError, user, info) => {
      if (authError) {
        console.error(authError);
      }
      if (!user) {
        return res.redirect(`/?loginError=${info.message}`);
      }
      return req.login(user, (loginError) => {
        if (loginError) {
          console.error(loginError);
        }
        return res.redirect("/");
      });
    })(req, res, next);
  };

  const getLogout = (req,res)=>{
    req.logout();
    req.session.destroy();
    res.redirect("/");
};

module.exports = {
    postJoin,
    postLogin,
    getLogout,
};
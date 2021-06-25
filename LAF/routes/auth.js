const express = require("express");
const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require('../models/user');
const {isLoggedIn, isNotLoggedIn} = require('./middlewares');

const router = express.Router();

//await를 사용하려면 async를 사용해야한다. 작동에 시간이 걸리는 구문이 동작하면 홈페이지를 못쓰기때문에 비동기구동이 필요하다.
router.post('/join',  isNotLoggedIn, async(req,res,next)=>{
    const {email, password, re_password} = req.body;
    try{
        const exUser =await User.findOne({where:{email}});
        if(exUser || password !== re_password){
            return res.redirect('/join?error=exist');
        }
        const hash = await bcrypt.hash(password, 12);
        await User.create({
            email,
            password: hash
        });
        return res.redirect("/login");
    }catch(error){
        console.error(error);
    }
});

router.post("/login", isNotLoggedIn, (req, res, next) => {
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
  });

router.get('/logout',isLoggedIn,(req,res)=>{
    req.logout();
    req.session.destroy();
    res.redirect("/");
});

module.exports = router;
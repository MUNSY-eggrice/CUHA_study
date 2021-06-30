const express = require("express");
const router = express.Router();
const {isLoggedIn, isNotLoggedIn} = require('./middlewares');

const controller = require("../controllers/index_ctrl");
const { User } = require("../models");

router.use((req,res,next)=>{
    res.locals.user = req.user;
    next();
});

router.get("/", controller.getMain);
router.get("/login",isNotLoggedIn, controller.getLogin);
router.get("/join", isNotLoggedIn,controller.getJoin);


module.exports = router; // 외부로 내보냄
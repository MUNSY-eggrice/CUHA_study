const express = require("express");
const router = express.Router();
const {isLoggedIn, isNotLoggedIn, isAdminIn} = require('./middlewares');

const controller = require("../controllers/index_ctrl");
const { User } = require("../models");

router.use((req,res,next)=>{
    res.locals.user = req.user;
    next();
});

router.get("/", controller.getMain);


module.exports = router; // 외부로 내보냄
const express = require("express");
const {isLoggedIn, isNotLoggedIn} = require('./middlewares');
const {postJoin,postLogin,getLogout} = require("../controllers/authctrl");
const router = express.Router();

//await를 사용하려면 async를 사용해야한다. 작동에 시간이 걸리는 구문이 동작하면 홈페이지를 못쓰기때문에 비동기구동이 필요하다.
router.post('/join',  isNotLoggedIn, postJoin);

router.post("/login", isNotLoggedIn, postLogin);

router.get('/logout',isLoggedIn, getLogout);

module.exports = router;
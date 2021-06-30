const express = require("express");
const ejs = require("ejs");
const path = require("path");
const cookieParser = require("cookie-parser");// 
const session = require("express-session");//
const dotenv = require("dotenv");
const passport = require("passport");

const passportConfig = require("./passport");
const {sequelize} = require("./models"); //index는 생략가능
const indexRouter = require('./routes/index'); //라우팅 , ./(현재 디렉토리), ../(상위 디렉토리) .../은 없다. ../../를 사용한다.
const authRouter = require('./routes/auth');

const app = express();
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");

dotenv.config();
passportConfig();
sequelize
    .sync({force:true})
    .then(()=>{
    console.log("데이터베이스 연결 성공");
    })
    .catch((err)=>{
    console.error(err);
    });

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    },
}));
app.use(passport.initialize());
app.use(passport.session());


app.use = ("/", indexRouter);
app.use = ("/auth", authRouter);

app.listen(3000);
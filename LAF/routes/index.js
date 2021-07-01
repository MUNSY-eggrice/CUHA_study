const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const {isLoggedIn, isNotLoggedIn, isAdminIn} = require('./middlewares');

const controller = require("../controllers/index_ctrl");
const { User } = require("../models");
try{
    fs.readdirSync("./public/uploads");
  } catch(error){
      console.error("uploads폴더가 없어 폴더를 생성합니다.");
      fs.mkdirSync("./public/uploads");
}
const upload = multer({
    storage: multer.diskStorage({
        destination: (req,res,cb)=>{
            cb(null, './public/uploads/');
        },
        filename: (req,file,cb)=>{
            const ext = path.extname(file.originalname);

            cb(null, path.basename(file.originalname,ext) + Date.now()+ext);
        },
    }),
    
    limits: {fileSize: 5* 1024 *1024 *1024},
});

router.use((req,res,next)=>{
    res.locals.user = req.user;
    next();
});

router.get("/", controller.getMain);
router.get("/login",isNotLoggedIn, controller.getLogin);
router.get("/join", isNotLoggedIn,controller.getJoin);
router.get("/email", isNotLoggedIn,controller.getEmail);
router.get("/daily", controller.getDaily);
router.get("/item/:id",controller.getItem);;
router.get("/thumbnail", isLoggedIn,isAdminIn ,controller.getThumbnail);
router.get("/ani/:id", isLoggedIn,isAdminIn,controller.getAni);
router.get("/view/:id", isLoggedIn,controller.getView);
router.get("/update/:id", isLoggedIn,isAdminIn, controller.getUpdate);
router.get("/delete/:id", isLoggedIn,isAdminIn, controller.deleteThumbnail);
router.get("/search", controller.getSearch);
router.get("/admin", controller.getAdmin);

router.post("/thumbnail",isLoggedIn,isAdminIn,upload.single("thumbnail"),controller.postThumbnail);
router.post("/ani/:id",isLoggedIn,isAdminIn,upload.fields([
    {name: "video", maxCount:1},
    {name: "subtitle", maxCount:1},
    {name: "thumbnail", maxCount:1},
]),controller.postAni);

router.post("/update/:id",isLoggedIn,isAdminIn,upload.single("thumbnail"),controller.postUpdate);

module.exports = router; // 외부로 내보냄
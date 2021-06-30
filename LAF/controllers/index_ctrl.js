const Post = require("../models/post");
const Video = require("../models/video");
const View = require("../models/view");
const User = require("../models/user");

const getMain = async (req, res) => {
    try {
      let posts = {};
  
      if (req.user && req.user.email) {
        const user = await User.findOne({
          where: { email: req.user.email },
        });
  
        posts = await View.findAll({
          include: [
            {
              model: User,
            },
            {
              model: Video,
            },
          ],
          where: { user_id: user.id },
          limit: 5,
        });
      }
  
      const top5_posts = await Post.findAll({
        limit: 5,
        order: [["id", "DESC"]],
      });
  
      return res.render("index", { posts, top5_posts });
    } catch (error) {
      console.error(error);
    }
  };

const getLogin = (req,res) => {
    res.render("login");
};

const getJoin = (req,res) => {
    res.render("join");
};

const getEmail = (req,res) => {
    res.render("email");
};

const getDaily = async(req,res) => {
    try{
        const posts = await Post.findAll({});
        const sorter = {
          monday:1,
          tuesday:2,
          wednesday:3,
          thursday:4,
          friday:5,
          saturday:6,
          sunday:7,  
        };

        posts.sort((a,b)=> sorter[a.day]-sorter[b.day]);
        return  res.render("daily", {posts});
    }catch(error){
        console.log(object);
    }
   
};

const getItem = async(req,res)=>{
    const id = req.params.id;
    try{
        const post = await Post.findOne({
            where:{id},
        });
        const videos = await Video.findAll({
            where:{post_id:id}
        });
       return res.render("item",{post,videos});
    }catch(error){
        console.error(error);
    }
    
};

const getThumbnail = (req,res)=>{
    res.render("thumbnail");
};

const postThumbnail = async (req,res)=>{
    const {title, tag, day, thumbnail} = req.body;
    try{
        await Post.create({
            title,
            day,
            tag,
            img:req.file.filename,
        });
        return res.redirect('/');
    }catch(error){
        console.error(error);
    }
};

const postAni = async (req,res)=>{
    const id = req.params.id;
    const {title,} = req.body;
    const subtitle = Object.hasOwnProperty(req.files.subtitle)
    ? req.files.subtitle[0].filename
    : null;

    try{
        await Video.create({
           title,
           video: req.files.video[0].filename,
           subtitle,
           img:req.files.thumbnail[0].filename, 
           post_id:id,
        });
        return res.redirect('/');
    }catch(error){
        console.error(error);
    }
    console.log(req.body);
};


const getAni = (req,res)=>{
    const id = req.params.id;
    res.render("ani",{id});
}

const getView = async (req,res)=>{
    const id = req.params.id;
    try{
        const video = await Video.findOne({
           where:{id} 
        });

        const user = await User.findOne({
            where:{email: req.user.email},
        });

        await View.create({
            user_id: user.id,
            video_id:id,
            });
        res.render("view",{video});
    }catch(error){
        console.error(error);
    }
};
module.exports = {
    getMain,
    getLogin,
    getJoin,
    getEmail,
    getDaily,
    getItem,
    getThumbnail,
    getAni,
    getView,
    postAni,
    postThumbnail,
    
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
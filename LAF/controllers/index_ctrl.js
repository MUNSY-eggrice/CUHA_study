





const getMain = (req,res) => {
    res.render("index");
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

const getDaily = (req,res) => {
    res.render("daily");
};

const getItem = (req,res)=>{
    res.render("item");
};

const getThumbnail = (req,res)=>{
    res.render("thumbnail");
};

const postThumbnail = (req,res)=>{
    const {title, tag, day, thumbnail} = req.body;
    console.log(req.body);
    res.redirect("/");
};
module.exports = {
    getMain,
    getLogin,
    getJoin,
    getEmail,
    getDaily,
    getItem,
    getThumbnail,
    postThumbnail
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
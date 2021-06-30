const getMain = (req,res) => {
    res.render("todo",{List});
};
const List=[{content:"hi"},
            {content:"hoho"},
            {content: "haha"}];



app.post("/create", (req,res)=>{
    const {content} = req.body;
    const posts= {content};
    List.push(posts);
    res.redirect("/");
    
});


const getLogin = (req,res) => {
    res.render("login");
};

const getJoin = (req,res) => {
    res.render("join");
};


module.exports = {
    getMain,
    getLogin,
    getJoin,

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
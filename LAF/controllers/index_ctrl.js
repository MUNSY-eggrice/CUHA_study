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

module.exports = {
    getMain,
    getLogin,
    getJoin,
    getEmail,
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
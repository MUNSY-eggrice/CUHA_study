const express = require("express");
const path = require("path");
const ejs = require("ejs");
const app = express();

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req,res)=>{
    res.render("todo",{List});
});

const List=[{content:"hi"},
            {content:"hoho"},
            {content: "haha"}];

app.post("/create", (req,res)=>{
    const {content} = req.body;
    const posts= {content};
    List.push(posts);
    res.redirect("/");
    
});

app.listen(3000);
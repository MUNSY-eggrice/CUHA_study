const express = require("express");
const ejs = require("ejs");
const patg = require("path");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/public",express.static(path.join(__dirname, "public")));

app.get("/", (req,res)=>{
    res.render("index");
});

app.get("/login", (req,res)=>{
    res.render("login");
});

app.get("/join", (req,res)=>{
    res.render("join");
});

app.get("/email", (req,res)=>{
    res.render("email");
});


app.listen(3000);
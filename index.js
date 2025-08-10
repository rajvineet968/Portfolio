const express =require("express");
const app=express();
const port=4040;

app.listen(port,(req,res)=>{
    console.log(`Successfully connected to ${port}`);
})
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); //ejs

app.use(express.static(path.join(__dirname, "public"))); //css,html files

app.get('/home',(req,res)=>{
    res.render("home.ejs");
})

app.get('/home/aboutme',(req,res)=>{
    res.render("aboutme.ejs");
})

app.get('/home/myprojects',(req,res)=>{
    res.render("myprojects.ejs");
})

app.get('/home/miscellaneous',(req,res)=>{
    res.render("misc.ejs");
})

app.get('/home/contactme',(req,res)=>{
    res.render("contactme.ejs");
})

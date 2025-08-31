const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.render("pages/home.ejs",{pageCSS: "home"});
});

router.get('/aboutme',(req,res)=>{
    res.render("pages/aboutme.ejs",{pageCSS:"aboutme"});
});

router.get('/myprojects',(req,res)=>{
    res.render("pages/myprojects.ejs",{pageCSS:"myprojects"});
});

router.get('/miscellaneous',(req,res)=>{
    res.render("pages/misc.ejs",{pageCSS:"misc"});
});

router.get('/contactme',(req,res)=>{
    res.render("pages/contactme.ejs",{pageCSS: "contactme"});
});

module.exports = router;
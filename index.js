const express =require("express");
const app=express();
const port=4040;

const pages=require("./routes/pages.js");

app.listen(port,(req,res)=>{
    console.log(`Successfully connected to ${port} `);
})
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); //ejs

const ejsMate=require("ejs-mate");//for using navbar and footer in boilerplate ejs to avoid redudancy
app.engine('ejs', ejsMate);// use ejs-locals for all ejs templates:

app.use(express.static(path.join(__dirname, "public"))); //css,html files

app.get('/', (req, res) => {
    res.redirect('/home');
});

app.use('/home',pages);

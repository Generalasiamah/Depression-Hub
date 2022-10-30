const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const req = require("express/lib/request");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

mongoose.connect('mongodb://127.0.0.1:27017/schoolDB');

const Article = mongoose.model('Article', { title: "string", content: "string" });

app.get("/", (req, res)=> {
  res.render("base")
    })

app.post("/", (req, res)=> {
    console.log(req.body.email);
    console.log(req.body.psw);

    (err) => {
        if(!err){
            app.get("/", (req, res) =>{
                res.render("diagnose")
            })
           
        }
    }
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
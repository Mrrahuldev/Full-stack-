var express=require("express");
var mongoose = require("mongoose");
var bodyparser=require("body-parser");

mongoose.connect("mongodb://127.0.0.1:27017/abc"); //abc is the name of database
var db=mongoose.connection;
var app=express();

app.use(bodyparser.json());
app.use(express.static("formfolder"));
app.use(bodyparser.urlencoded({
   extended: true
}));

app.post("/registration", function(req,res){
   var name = req.body.name;
   var mobile =req.body.mobile;
   var date =req.body.date;
   var email =req.body.email;
   var password = req.body.password;

   var userdetails = {
      "name": name,
      "mobile":mobile,
      "date": date,
      "email":email,
      "password":password,
   }

   db.collection("formdata").insertOne(userdetails, () => {
      console.log("Data inserted");
   });


   return res.redirect("register.html");

})

app.get("/", (req,res) => {
   res.set({
      'Access-control-Allow-Origin': '*'
   });
   return res.redirect("index.html");
}).listen(8080)

console.log("server listening at port 8080");
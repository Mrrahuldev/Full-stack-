var fs=require("fs");
var express=require("express");
var app=express();
var port=8080;

app.get("/",(req,res) => {
    res.send("<h1>hello</h1>")
})
app.get("/getRestaurants",(req,res) => {
    fs.readFile("./restaurants.json",(err,result) => {
        if(err){
            throw err;
        }
        else{
            res.send(JSON.parse(result));
        }
    })
})
app.listen(port,(err) => {
    console.log("server is running on port "+port);
})
var express=require("express");
var app=express();
var port=8080;
app.listen(port, (err) => {
    if(err) throw err;
    console.log("server is running on port "+port);
})
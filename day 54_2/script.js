var express=require("express");
var app=express();
var port=8080;
app.get("/", (req,res) => {
    res.send("hello");
})
app.listen(port, () => {
    console.log("server is running on port "+port);
})
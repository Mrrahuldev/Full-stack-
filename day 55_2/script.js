var express=require("express");
var app=express();
var port=8080;

app.get("/", (req,res) => {
    res.send("<h1>hello</h1>");
})

app.listen(port, () => {
    console.log("server is running on port "+port);
})
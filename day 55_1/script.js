var express=require("express");
var app=express();
var port=8080;
var birds=require("./birds");
app.use("/birds",birds);
app.listen(port, () => {
    console.log("Api is running on port "+port);
})
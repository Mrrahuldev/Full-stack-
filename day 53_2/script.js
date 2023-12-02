var http=require("http");
const server=http.createServer((req,res) => {
    if(req.url=="/" || req.url=="/home"){
        res.write("<h1>home page</h1>");
        res.end();
    }
    else if(req.url=="/about"){
        res.write("<h1>about page</h1>");
        res.end();
    }
    else{
        res.write("<h1>page not found");
        res.end();
    }
});
server.listen(8080, () => {
    console.log("server is listening on port 8080");
})